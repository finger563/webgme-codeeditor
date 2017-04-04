/*globals define, WebGMEGlobal*/
/*jshint browser: true*/
/**
 * Generated by VisualizerGenerator 0.1.0 from webgme on Sat Apr 16 2016 08:51:41 GMT-0700 (PDT).
 */

define(['js/Constants',
    'js/Utils/GMEConcepts',
    'js/NodePropertyNames'
], function (CONSTANTS,
             GMEConcepts,
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

        self._logger.debug('activeObject nodeId \'' + nodeId + '\'');

        if (nodeId && nodeId != this.currentNodeInfo.id) {
            // Remove current territory patterns
            if (self._territoryId) {
		            self._client.removeUI(self._territoryId);
            }

            this.currentNodeInfo.id = nodeId;
            this.currentNodeInfo.parentId = undefined;

            desc = this._getObjectDescriptor(nodeId);
            nodeName = (desc && desc.name);
            if (desc) {
                this.currentNodeInfo.parentId = desc.parentId;
            }

            this._refreshBtnModelHierarchyUp();

            // Put new node's info into territory rules
            // TODO: Update to get depth of children to load from component config
            // TODO: Update to get parents as well?
            self._selfPatterns[nodeId] = {children: self._config.loadDepth};  // Territory "rule"

            self._territoryId = self._client.addUI(self, function (events) {
                self._eventCallback(events);
            });

            // Update the territory
            self._client.updateTerritory(self._territoryId, self._selfPatterns);
        }
    };

    CodeEditorControl.prototype._refreshBtnModelHierarchyUp = function () {
        if (this.currentNodeInfo.id) {
            this.$btnModelHierarchyUp.show();
        } else {
            this.$btnModelHierarchyUp.hide();
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
		'codeAttributes': {}
            };

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

	    if (self._config.excludeTypes.indexOf(nodeMetaName) > -1) {
		return null; // exclude these types
	    }

            objDescriptor.id = nodeObj.getId();
            objDescriptor.type = nodeMetaName;
            objDescriptor.name = nodeObj.getAttribute('name');
            objDescriptor.childrenIds = nodeObj.getChildrenIds();
            objDescriptor.childrenNum = objDescriptor.childrenIds.length;
            objDescriptor.parentId = nodeObj.getParentId();
	    var iconPath = nodeObj.getRegistry('TreeItemCollapsedIcon');
	    if (iconPath)
		objDescriptor.iconPath = '/assets/DecoratorSVG/' + iconPath;
            objDescriptor.isConnection = GMEConcepts.isConnection(nodeId);  // GMEConcepts can be helpful

	    if (objDescriptor.type != self._config.rootType) {
		// load parent until we get to rootType
		self._selfPatterns[objDescriptor.parentId] = {children: self._config.loadDepth};
		self._client.updateTerritory(self._territoryId, self._selfPatterns);
	    }
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
        this._widget.addNode(description);
    };

    CodeEditorControl.prototype._onUpdate = function (gmeId) {
        var description = this._getObjectDescriptor(gmeId);
        this._widget.updateNode(description);
    };

    CodeEditorControl.prototype._onUnload = function (gmeId) {
        this._widget.removeNode(gmeId);
    };

    CodeEditorControl.prototype._stateActiveObjectChanged = function (model, activeObjectId) {
        this.selectedObjectChanged(activeObjectId);
    };

    /* * * * * * * * Visualizer life cycle callbacks * * * * * * * */
    CodeEditorControl.prototype.destroy = function () {
        this._detachClientEventListeners();
        this._removeToolbarItems();
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
        this._displayToolbarItems();

        if (this.currentNodeInfo && typeof this.currentNodeInfo.id === 'string') {
            WebGMEGlobal.State.registerActiveObject(this.currentNodeInfo.id, {
                suppressVisualizerFromNode: true
            });
        }
    };

    CodeEditorControl.prototype.onDeactivate = function () {
        this._detachClientEventListeners();
        this._hideToolbarItems();
    };

    /* * * * * * * * * * Updating the toolbar * * * * * * * * * */
    CodeEditorControl.prototype._displayToolbarItems = function () {

        if (this._toolbarInitialized === true) {
            for (var i = this._toolbarItems.length; i--;) {
                this._toolbarItems[i].show();
            }
        } else {
            this._initializeToolbar();
        }
    };

    CodeEditorControl.prototype._hideToolbarItems = function () {

        if (this._toolbarInitialized === true) {
            for (var i = this._toolbarItems.length; i--;) {
                this._toolbarItems[i].hide();
            }
        }
    };

    CodeEditorControl.prototype._removeToolbarItems = function () {

        if (this._toolbarInitialized === true) {
            for (var i = this._toolbarItems.length; i--;) {
                this._toolbarItems[i].destroy();
            }
        }
    };

    CodeEditorControl.prototype._onModelHierarchyUp = function () {
        var myId = this.currentNodeInfo.id;
        if (this.currentNodeInfo.parentId ||
            this.currentNodeInfo.parentId === CONSTANTS.PROJECT_ROOT_ID) {
            WebGMEGlobal.State.registerActiveObject(this.currentNodeInfo.parentId);
            WebGMEGlobal.State.registerActiveSelection([myId]);
        }
    };

    CodeEditorControl.prototype._initializeToolbar = function () {
        var self = this,
            toolBar = WebGMEGlobal.Toolbar;

        this._toolbarItems = [];

        this._toolbarItems.push(toolBar.addSeparator());

        /************** GOTO PARENT IN HIERARCHY BUTTON ****************/
        this.$btnModelHierarchyUp = toolBar.addButton({
            title: 'Go to parent',
            icon: 'glyphicon glyphicon-circle-arrow-up',
            clickFn: function (/*data*/) {
                self._onModelHierarchyUp();
            }
        });
        this._toolbarItems.push(this.$btnModelHierarchyUp);

        this.$btnModelHierarchyUp.hide();

        this._toolbarInitialized = true;
    };

    return CodeEditorControl;
});
