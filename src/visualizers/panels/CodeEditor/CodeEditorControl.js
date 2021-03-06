/*globals define, WebGMEGlobal*/
/*jshint browser: true*/
/**
 * Generated by VisualizerGenerator 0.1.0 from webgme on Sat Apr 16 2016 08:51:41 GMT-0700 (PDT).
 */

define(['js/Constants',
        'js/Utils/GMEConcepts',
        'js/Utils/SvgManager',
        'js/NodePropertyNames'
       ], function (CONSTANTS,
                    GMEConcepts,
                    svgManager,
                    nodePropertyNames) {

           'use strict';

           var CodeEditorControl;

           // the final leaf is a 'mode' object for the CodeMirror to use
           var TypeToAttributeMap = {};

           CodeEditorControl = function (options) {

               this._logger = options.logger.fork('Control');
               this._client = options.client;

               // Initialize core collections and variables
               this._widget = options.widget;

               // the component config comes from widget._config
               this._config = this._widget._config;
               TypeToAttributeMap = this._config.attrToSyntaxMap;

               this.currentNodeInfo = {id: null, children: [], parentId: null};
               this._selfPatterns = {};

               this._initWidgetEventHandlers();

               this._logger.debug('ctor finished');
           };

           CodeEditorControl.prototype._initWidgetEventHandlers = function () {
               this._widget.onNodeClick = function (id) {
                   // Change the current active object
                   WebGMEGlobal.State.registerActiveObject(id);
               };
           };

           /* * * * * * * * Visualizer content update callbacks * * * * * * * */
           // One major concept here is with managing the territory. The territory
           // defines the parts of the project that the visualizer is interested in
           // (this allows the browser to then only load those relevant parts).
           CodeEditorControl.prototype.selectedObjectChanged = function (nodeId) {
               var self = this,
                   desc,
                   nodeName;

               //console.log('current nodeId \'' + self.currentNodeInfo.id + '\'');
               //console.log('activeObject nodeId \'' + nodeId + '\'');

               desc = this._getObjectDescriptor(nodeId);
               var widgetNode = self._widget.nodes[ nodeId ];
               if (!self.currentNodeInfo.id && desc) {
                   // Remove current territory patterns
                   if (self._territoryId) {
                       console.log('CodeEditorControl:: saving when changing nodes!');
                       self._widget.saveChanges();
                       self._widget.clearNodes();
                       // Update the territory
                       self._selfPatterns = {};
                       self._client.updateTerritory(self._territoryId, self._selfPatterns);
                       self._client.removeUI(self._territoryId);
                   }

                   this.currentNodeInfo.id = nodeId;
                   this.currentNodeInfo.parentId = undefined;
                   if (desc //&&
                       //Object.keys(self._config.attrToSyntaxMap).indexOf( desc.type ) > -1 &&
                       //self._config.excludeTypes.indexOf( desc.type ) == -1
                      ) {
                       this.currentNodeInfo.parentId = desc.parentId;

                       // Put new node's info into territory rules
                       var loadDepth = self._config.loadDepth;
                       if (loadDepth < 0) {
                           loadDepth = 1;
                       }
                       self._selfPatterns[nodeId] = {children: loadDepth};  // Territory "rule"

                       self._territoryId = self._client.addUI(self, function (events) {
                           self._eventCallback(events);
                       });

                   }
                   // Update the territory
                   self._client.updateTerritory(self._territoryId, self._selfPatterns);
               }
               else if (widgetNode) {
                   // if we've already loaded the tree, try setting the selection
                   self._widget.setActiveSelection(nodeId, WebGMEGlobal.State.getActiveTab(), false);
                   //self._widget.setGMESelection(nodeId);
                   /*
                   WebGMEGlobal.State.registerActiveObject(
                       nodeId,
                       {suppressVisualizerFromNode: true}
                   );
                   WebGMEGlobal.State.registerActiveSelection([nodeId]);
                   */
               }
           };

           // This next function retrieves the relevant node information for the widget
           CodeEditorControl.prototype._getObjectDescriptor = function (nodeId) {
               var self = this;
               var client = this._client;
               var nodeObj = client.getNode(nodeId),
                   objDescriptor = null;

               if (nodeObj) {
                   objDescriptor = {
                       'id': undefined,
                       'type': undefined,
                       'name': undefined,
                       'childrenIds': undefined,
                       'parentId': undefined,
                       'isConnection': false,
                       'iconPath': undefined,
                       'codeAttributes': {},
                       'attributes': {}
                   };

                   // load in all attributes the node has
                   var attrNames = nodeObj.getAttributeNames();
		   if (attrNames.length == 0) {
		       // don't want to load invalid nodes that have no attributes
		       return null;
		   }
                   attrNames.map(function(attrName) {
                       objDescriptor.attributes[attrName] = nodeObj.getAttribute(attrName);
                   });

                   // load in the code attributes that were defined in the config
                   var nodeMetaName = undefined;
                   var baseId = nodeObj.getMetaTypeId();
                   var baseObj = client.getNode(baseId);
                   if (baseObj) {
                       nodeMetaName = baseObj.getAttribute('name');
                       if (nodeMetaName && TypeToAttributeMap[nodeMetaName]) {
                           var attrNames = Object.keys(TypeToAttributeMap[nodeMetaName]);
                           attrNames.map(function(attrName) {
                               var value = nodeObj.getAttribute(attrName); 
                               if (!value) value = '';
                               objDescriptor.codeAttributes[attrName] = { 
                                   value: value,
                                   mode: TypeToAttributeMap[nodeMetaName][attrName]
                               };
                           });
                       }
                   }
		   else {
		       return null; // don't load nodes that have no base
		   }

                   if (self._config.excludeTypes.indexOf(nodeMetaName) > -1) {
                       return null; // exclude these types
                   }

                   objDescriptor.id = nodeObj.getId();
                   objDescriptor.type = nodeMetaName;
                   objDescriptor.name = nodeObj.getAttribute('name');
                   objDescriptor.childrenIds = nodeObj.getChildrenIds();
                   objDescriptor.childrenNum = objDescriptor.childrenIds.length;
                   objDescriptor.parentId = nodeObj.getParentId();
                   var iconPath = svgManager.getSvgUri(nodeObj, 'SVGIcon') ||
                       svgManager.getSvgUri(nodeObj, 'TreeItemCollapsedIcon') ||
                       svgManager.getSvgUri(nodeObj, 'TreeItemExpandedIcon') ||
                       svgManager.getSvgUri(nodeObj, 'PortSVGIcon');
                   if (iconPath) {
                       objDescriptor.iconPath = iconPath;
                   }
                   objDescriptor.isConnection = GMEConcepts.isConnection(nodeId);  // GMEConcepts can be helpful

                   if (self._config.rootTypes.indexOf(objDescriptor.type) == -1) {
                       // load parent until we get to rootType
                       self._selfPatterns[objDescriptor.parentId] = {children: 1};
                       if (self._config.loadDepth < 0) {
                           self._selfPatterns[objDescriptor.id] = {children: 1};
                       }
                   }
                   else {
                       var loadDepth = self._config.loadDepth;
                       if (loadDepth < 0) {
                           loadDepth = 1;
                       }
                       self._selfPatterns[objDescriptor.id] = {children: loadDepth};
                   }
                   self._client.updateTerritory(self._territoryId, self._selfPatterns);
               }
               return objDescriptor;
           };

           /* * * * * * * * Node Event Handling * * * * * * * */
           CodeEditorControl.prototype._eventCallback = function (events) {
               var i = events ? events.length : 0,
                   event;

               this._logger.debug('_eventCallback \'' + i + '\' items');

               while (i--) {
                   event = events[i];
                   switch (event.etype) {
                   case CONSTANTS.TERRITORY_EVENT_LOAD:
                       this._onLoad(event.eid);
                       break;
                   case CONSTANTS.TERRITORY_EVENT_UPDATE:
                       this._onUpdate(event.eid);
                       break;
                   case CONSTANTS.TERRITORY_EVENT_UNLOAD:
                       this._onUnload(event.eid);
                       break;
                   default:
                       break;
                   }
               }

               this._logger.debug('_eventCallback \'' + events.length + '\' items - DONE');
           };

           CodeEditorControl.prototype._onLoad = function (gmeId) {
               var description = this._getObjectDescriptor(gmeId);
               if (description && this._widget)
                   this._widget.addNode(description);
           };

           CodeEditorControl.prototype._onUpdate = function (gmeId) {
               var description = this._getObjectDescriptor(gmeId);
               if (description && this._widget)
                   this._widget.updateNode(description);
           };

           CodeEditorControl.prototype._onUnload = function (gmeId) {
               if (this._widget)
                   this._widget.removeNode(gmeId);
           };

           CodeEditorControl.prototype._stateActiveObjectChanged = function (model, activeObjectId) {
               this.selectedObjectChanged(activeObjectId);
           };

           /* * * * * * * * Visualizer life cycle callbacks * * * * * * * */
           CodeEditorControl.prototype.setReadOnly = function(isReadOnly) {
               this._widget.setReadOnly(isReadOnly);
           };

           CodeEditorControl.prototype.destroy = function () {
               this._detachClientEventListeners();
               this._client.removeUI(this._territoryId);
               delete this._widget;
           };

           CodeEditorControl.prototype._attachClientEventListeners = function () {
               this._detachClientEventListeners();
               WebGMEGlobal.State.on('change:' + CONSTANTS.STATE_ACTIVE_OBJECT, this._stateActiveObjectChanged, this);
           };

           CodeEditorControl.prototype._detachClientEventListeners = function () {
               WebGMEGlobal.State.off('change:' + CONSTANTS.STATE_ACTIVE_OBJECT, this._stateActiveObjectChanged);
           };

           CodeEditorControl.prototype.onActivate = function () {
               this._attachClientEventListeners();

               if (this.currentNodeInfo && typeof this.currentNodeInfo.id === 'string') {
                   WebGMEGlobal.State.registerActiveObject(this.currentNodeInfo.id, {
                       suppressVisualizerFromNode: true
                   });
               }
           };

           CodeEditorControl.prototype.onDeactivate = function () {
               this._detachClientEventListeners();
           };

           return CodeEditorControl;
       });
