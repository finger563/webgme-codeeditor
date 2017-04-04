/*globals define, WebGMEGlobal*/
/*jshint browser: true*/

/**
 * Generated by VisualizerGenerator 0.1.0 from webgme on Sat Apr 16 2016 08:51:41 GMT-0700 (PDT).
 */

// STORES NODES INTO TREE WITH UNIQUE IDs AS THE WEBGME PATH

define([
    'js/Utils/ComponentSettings',
    // HTML
    'text!./CodeEditor.html',
    // fancy tree
    //'fancytree/jquery.fancytree-all.min',
    // Codemirror
    './bower_components/codemirror/lib/codemirror', 
    // Syntax highlighting
    './bower_components/codemirror/mode/clike/clike',
    './bower_components/codemirror/mode/markdown/markdown',
    './bower_components/codemirror/mode/javascript/javascript',
    './bower_components/codemirror/mode/python/python',
    './bower_components/codemirror/mode/diff/diff',
    './bower_components/codemirror/mode/cmake/cmake',
    './bower_components/codemirror/mode/coffeescript/coffeescript',
    './bower_components/codemirror/mode/css/css',
    './bower_components/codemirror/mode/dockerfile/dockerfile',
    './bower_components/codemirror/mode/erlang/erlang',
    './bower_components/codemirror/mode/fortran/fortran',
    './bower_components/codemirror/mode/gfm/gfm',
    './bower_components/codemirror/mode/go/go',
    './bower_components/codemirror/mode/handlebars/handlebars',
    './bower_components/codemirror/mode/haskell/haskell',
    './bower_components/codemirror/mode/htmlembedded/htmlembedded',
    './bower_components/codemirror/mode/htmlmixed/htmlmixed',
    './bower_components/codemirror/mode/idl/idl',
    './bower_components/codemirror/mode/lua/lua',
    './bower_components/codemirror/mode/mathematica/mathematica',
    './bower_components/codemirror/mode/modelica/modelica',
    './bower_components/codemirror/mode/nginx/nginx',
    './bower_components/codemirror/mode/pascal/pascal',
    './bower_components/codemirror/mode/perl/perl',
    './bower_components/codemirror/mode/php/php',
    './bower_components/codemirror/mode/protobuf/protobuf',
    './bower_components/codemirror/mode/r/r',
    './bower_components/codemirror/mode/rst/rst',
    './bower_components/codemirror/mode/ruby/ruby',
    './bower_components/codemirror/mode/shell/shell',
    './bower_components/codemirror/mode/spreadsheet/spreadsheet',
    './bower_components/codemirror/mode/tcl/tcl',
    './bower_components/codemirror/mode/stex/stex',
    './bower_components/codemirror/mode/textile/textile',
    './bower_components/codemirror/mode/vhdl/vhdl',
    './bower_components/codemirror/mode/verilog/verilog',
    './bower_components/codemirror/mode/xml/xml',
    './bower_components/codemirror/mode/yaml/yaml',
    './bower_components/codemirror/mode/yaml-frontmatter/yaml-frontmatter',
    // Keymaps
    './bower_components/codemirror/keymap/emacs', 
    './bower_components/codemirror/keymap/sublime',
    './bower_components/codemirror/keymap/vim',
    // Addons 
    './bower_components/codemirror/addon/lint/lint',
    './bower_components/codemirror/addon/lint/json-lint',
    './bower_components/jsonlint/web/jsonlint',
    './bower_components/codemirror/addon/lint/javascript-lint',
    './bower_components/codemirror/addon/lint/coffeescript-lint',
    './bower_components/codemirror/addon/lint/yaml-lint',
    './bower_components/codemirror/addon/hint/show-hint',
    './bower_components/codemirror/addon/hint/anyword-hint',
    './bower_components/codemirror/addon/hint/css-hint',
    './bower_components/codemirror/addon/hint/html-hint',
    './bower_components/codemirror/addon/hint/javascript-hint',
    './bower_components/codemirror/addon/hint/sql-hint',
    './bower_components/codemirror/addon/hint/xml-hint',
    './bower_components/codemirror/addon/search/search',
    './bower_components/codemirror/addon/search/searchcursor',
    './bower_components/codemirror/addon/search/matchesonscrollbar',
    './bower_components/codemirror/addon/search/match-highlighter',
    './bower_components/codemirror/addon/search/jump-to-line',
    './bower_components/codemirror/addon/scroll/annotatescrollbar',
    './bower_components/codemirror/addon/dialog/dialog',
    './bower_components/codemirror/addon/display/fullscreen',
    './bower_components/codemirror/addon/fold/foldcode',
    './bower_components/codemirror/addon/fold/foldgutter',
    './bower_components/codemirror/addon/fold/brace-fold',
    './bower_components/codemirror/addon/fold/xml-fold',
    './bower_components/codemirror/addon/fold/markdown-fold',
    './bower_components/codemirror/addon/fold/comment-fold',
    // CSS
    // codeEditorWidget
    'css!./styles/CodeEditorWidget.css',
    'css!./bower_components/codemirror/addon/lint/lint.css',
    'css!./bower_components/codemirror/addon/hint/show-hint.css',
    'css!./bower_components/codemirror/addon/search/matchesonscrollbar.css',
    'css!./bower_components/codemirror/addon/dialog/dialog.css',
    'css!./bower_components/codemirror/addon/display/fullscreen.css',
    'css!./bower_components/codemirror/theme/night.css',
    'css!./bower_components/codemirror/lib/codemirror.css',
    'css!./bower_components/codemirror/theme/3024-day.css',
    'css!./bower_components/codemirror/theme/3024-night.css',
    'css!./bower_components/codemirror/theme/abcdef.css',
    'css!./bower_components/codemirror/theme/ambiance.css',
    'css!./bower_components/codemirror/theme/base16-dark.css',
    'css!./bower_components/codemirror/theme/bespin.css',
    'css!./bower_components/codemirror/theme/base16-light.css',
    'css!./bower_components/codemirror/theme/blackboard.css',
    'css!./bower_components/codemirror/theme/cobalt.css',
    'css!./bower_components/codemirror/theme/colorforth.css',
    'css!./bower_components/codemirror/theme/dracula.css',
    'css!./bower_components/codemirror/theme/eclipse.css',
    'css!./bower_components/codemirror/theme/elegant.css',
    'css!./bower_components/codemirror/theme/erlang-dark.css',
    'css!./bower_components/codemirror/theme/hopscotch.css',
    'css!./bower_components/codemirror/theme/icecoder.css',
    'css!./bower_components/codemirror/theme/isotope.css',
    'css!./bower_components/codemirror/theme/lesser-dark.css',
    'css!./bower_components/codemirror/theme/liquibyte.css',
    'css!./bower_components/codemirror/theme/material.css',
    'css!./bower_components/codemirror/theme/mbo.css',
    'css!./bower_components/codemirror/theme/mdn-like.css',
    'css!./bower_components/codemirror/theme/midnight.css',
    'css!./bower_components/codemirror/theme/monokai.css',
    'css!./bower_components/codemirror/theme/neat.css',
    'css!./bower_components/codemirror/theme/neo.css',
    'css!./bower_components/codemirror/theme/night.css',
    'css!./bower_components/codemirror/theme/paraiso-dark.css',
    'css!./bower_components/codemirror/theme/paraiso-light.css',
    'css!./bower_components/codemirror/theme/pastel-on-dark.css',
    'css!./bower_components/codemirror/theme/railscasts.css',
    'css!./bower_components/codemirror/theme/rubyblue.css',
    'css!./bower_components/codemirror/theme/seti.css',
    'css!./bower_components/codemirror/theme/solarized.css',
    'css!./bower_components/codemirror/theme/the-matrix.css',
    'css!./bower_components/codemirror/theme/tomorrow-night-bright.css',
    'css!./bower_components/codemirror/theme/tomorrow-night-eighties.css',
    'css!./bower_components/codemirror/theme/ttcn.css',
    'css!./bower_components/codemirror/theme/twilight.css',
    'css!./bower_components/codemirror/theme/vibrant-ink.css',
    'css!./bower_components/codemirror/theme/xq-dark.css',
    'css!./bower_components/codemirror/theme/xq-light.css',
    'css!./bower_components/codemirror/theme/yeti.css',
    'css!./bower_components/codemirror/theme/zenburn.css',
    'css!./bower_components/codemirror/addon/fold/foldgutter'
], function (
    ComponentSettings,
    CodeEditorHtml,
    // fancytree
    // fancytree,
    // CodeMirror
    CodeMirror,
    // Syntax Highlighting
    CodeMirrorModeClike,
    CodeMirrorModeMarkdown,
    CodeMirrorModeJavascript,
    CodeMirrorModePython,
    CodeMirrorModediff,
    CodeMirrorModecmake,
    CodeMirrorModecoffeescript,
    CodeMirrorModecss,
    CodeMirrorModedockerfile,
    CodeMirrorModeerlang,
    CodeMirrorModefortran,
    CodeMirrorModegfm,
    CodeMirrorModego,
    CodeMirrorModehandlebars,
    CodeMirrorModehaskell,
    CodeMirrorModehtmlembedded,
    CodeMirrorModehtmlmixed,
    CodeMirrorModeidl,
    CodeMirrorModelua,
    CodeMirrorModemathematica,
    CodeMirrorModemodelica,
    CodeMirrorModenginx,
    CodeMirrorModepascal,
    CodeMirrorModeperl,
    CodeMirrorModephp,
    CodeMirrorModeprotobuf,
    CodeMirrorModer,
    CodeMirrorModerst,
    CodeMirrorModeruby,
    CodeMirrorModeshell,
    CodeMirrorModespreadsheet,
    CodeMirrorModetcl,
    CodeMirrorModestex,
    CodeMirrorModetextile,
    CodeMirrorModevhdl,
    CodeMirrorModeverilog,
    CodeMirrorModexml,
    CodeMirrorModeyaml,
    CodeMirrorModeyamlfrontmatter,
    // Keymaps
    CodeMirrorEmacsKeymap,
    CodeMirrorSublimeKeymap,
    CodeMirrorVimKeymap,
    // Addons
    CodeMirrorLint,
    CodeMirrorJSONLint,
    jsonlint,
    CodeMirrorJSLint,
    CodeMirrorCSLint,
    CodeMirrorYAMLLint,
    CodeMirrorShowHint,
    CodeMirrorAnywordHint,
    CodeMirrorCSSHint,
    CodeMirrorHTMLHint,
    CodeMirrorJSHint,
    CodeMirrorSQLHint,
    CodeMirrorXMLHint,
    CodeMirrorSearch,
    CodeMirrorSearchCursor,
    CodeMirrorMatchesOnScrollbar,
    CodeMirrorMatchHighlighter,
    CodeMirrorJumpToLine,
    CodeMirrorAnnotateScrollbar,
    CodeMirrorDialog,
    CodeMirrorFullScreen,
    CodeMirrorFoldCode,
    CodeMirrorFoldGutter,
    CodeMirrorBraceFold,
    CodeMirrorXMLFold,
    CodeMirrorMarkdownFold,
    CodeMirrorCommentFold) {
    'use strict';

    var CodeEditorWidget,
        WIDGET_CLASS = 'code-editor',
        cmPercent = '100%';

    CodeEditorWidget = function (logger, container, client) {
        this._logger = logger.fork('Widget');
	this._client = client;
        this._el = container;

	$(this._el).css({
	    'padding': '0'
	});

        this.nodes = {};
        this.waitingNodes = {};
        this._initialize();

        this._logger.debug('ctor finished');
    };

    CodeEditorWidget.getName = function () {
        return 'CodeEditor';
    };

    CodeEditorWidget.getVersion = function () {
        return '0.1.0';
    };

    CodeEditorWidget.getDefaultConfig = function () {
        return {
	    'theme': 'default',
	    'keyBinding': 'sublime',
	    'defaultSyntax': 'cpp',
	    'syntaxToModeMap': {},
	    'rootType': '',
	    'loadDepth': 5,
	    'autoSaveInterval': 2000,
	    'attrToSyntaxMap': {}
	};
    };

    CodeEditorWidget.getComponentId = function () {
        return 'CodeEditor';
    };

    CodeEditorWidget.prototype._initialize = function () {
        // TODO: Update active attribute and node structure to accomodate
        //       multiple nodes and their relation / mapping to tree
        var width = this._el.width(),
            height = this._el.height(),
            self = this;

	this._config = CodeEditorWidget.getDefaultConfig();
	ComponentSettings.resolveWithWebGMEGlobal(this._config, CodeEditorWidget.getComponentId());

        // set widget class
        //this._el.addClass(WIDGET_CLASS);

        this._activeInfo = {};

        // Create the CodeEditor and options
	this._readOnly = this._client.isProjectReadOnly();
	this._fullscreen = false;
        this._el.append(CodeEditorHtml);

	this._container = this._el.find('#CODE_EDITOR_DIV').first();
	this._codearea = this._el.find('#codearea').first();

        // Tree browswer widget
        this._treeBrowser = this._el.find('#codeTree');
        this._treeBrowser.fancytree({
            'checkbox': false,
            'activeVisible': true,
            'clickFolderMode': 2, // expand,
            'focusOnSelect': true,
            'icon': true, // make function returning icons,
            'imagePath': null, // store icons here for use,
            'selectMode': 1, // single select mode
            'source': []
        });
        this._fancyTree = this._el.find('#codeTree').fancytree('getTree');
        this._fancyTree.render();

        this._treeBrowser.on('fancytreeactivate', function(event, data) {
            // save old buffer
	    self.saveChanges();
            // now select new buffer
            var node = data.node;
            node.setActive(true);
            node.setSelected(true);
	    self._activeInfo = self.getActiveInfo();
            // swap to new buffer
            self.swapBuffer();
        });

        // Split view resizing
        this._handle = this._el.find('#codeEditorHandle');
        this._left = this._el.find('#codeEditorLeft');
        this._right = this._el.find('#codeEditorRight');

        this._left.css('width', '18%');
        this._right.css('width', '80%');

        this.isDragging = false;

        this._handle.mousedown(function(e) {
            self.isDragging = true;
            e.preventDefault();
        });
        this._container.mouseup(function() {
            self.isDragging = false;
        }).mousemove(function(e) {
            if (self.isDragging) {
                var maxWidth = $('.ui-layout-pane-center').width();
                var handleWidth = $('#codeEditorHandle').width();
                var handlePercent = handleWidth / maxWidth * 100;
                var minX = $('.ui-layout-pane-center').position().left;
                var maxX = $('.ui-layout-pane-center').width() + minX;
                var leftWidth = e.pageX - minX;
                var leftPercent = Math.max(10, Math.ceil((leftWidth - handleWidth/2) / maxWidth * 100));
                var rightPercent = Math.max(10, Math.ceil(100 - leftPercent - handlePercent));
                leftPercent = Math.floor(100 - rightPercent - handlePercent);
                self._left.css('width', leftPercent + '%');
                self._right.css('width', rightPercent + '%');
            }
        });

	var mac = CodeMirror.keyMap.default == CodeMirror.keyMap.macDefault;
	CodeMirror.keyMap.default[(mac ? "Cmd" : "Ctrl") + "-Space"] = "autocomplete";
	CodeMirror.keyMap.sublime[(mac ? "Cmd" : "Ctrl") + "-Space"] = "autocomplete";
	CodeMirror.keyMap.emacs[(mac ? "Cmd" : "Ctrl") + "-Space"] = "autocomplete";
	CodeMirror.keyMap.vim[(mac ? "Cmd" : "Ctrl") + "-Space"] = "autocomplete";

	var CodeMirrorEditorOptions = {
	    readOnly: this._readOnly,
	    lineNumbers: true,
	    matchBrackets: true,
	    lint: true,
	    //viewPortMargin: Infinity,
	    keyMap: this._config.keyBinding,
	    path: './bower_components/codemirror/lib/',
	    theme: this._config.theme,
	    fullscreen: false,
	    foldGutter: true,
	    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"]
	};
	this.editor = new CodeMirror.fromTextArea(
	    this._codearea.get(0),
	    CodeMirrorEditorOptions
	);

	this.editor.on(
	    'change',
	    _.debounce(this.saveChanges.bind(this), +this._config.autoSaveInterval)
	);

	this.editor.setOption("extraKeys", {
	    'F11': function(cm) {
		//cm.setOption('fullScreen', !cm.getOption('fullScreen'));
		self.fullScreen(!self._fullScreen);
	    },
	    'Esc': function(cm) {
		//cm.setOption('fullScreen', false);
		self.fullScreen(false);
	    },
	    "Ctrl-Q": function(cm){
		cm.foldCode(cm.getCursor());
	    }
	});

	this.editor.foldCode(CodeMirror.Pos(0, 0));
	// THEME SELECT
	this.theme_select = this._el.find("#theme_select").first();
	$(this.theme_select).val(this._config.theme);
	this.theme_select.on('change', this.selectTheme.bind(this));

	// KEY MAP SELECTION
	this.kb_select = this._el.find("#kb_select").first();
	$(this.kb_select).val(this._config.keyBinding);
	this.kb_select.on('change', this.selectKeyBinding.bind(this));

	this.docs = {};
	$(this._el).find('.CodeMirror').css({
	    height: cmPercent
	});
    };

    CodeEditorWidget.prototype.fullScreen = function(toFullScreen) {
	if (toFullScreen) {
	    var container = $(this._el).find('#CODE_EDITOR_DIV').first();
	    $(container).css({
		position: 'fixed',
		top: '0',
		left: '0',
		width: '100%',
		height: '100%'
	    });
	    //$(container).zIndex(9999);
	    $(container).css('zIndex',9999);
	    $(container).prependTo(document.body);
	    $(container).find('.CodeMirror').css({
		height: cmPercent
	    });
	    this.editor.focus();
	    this._fullScreen = true;
	}
	else {
	    var container = $(document).find('#CODE_EDITOR_DIV').first();
	    $(container).css({
		position: '',
		top: '',
		left: '',
		width: '100%',
		height: '100%'
	    });
	    //$(container).zIndex('auto');
	    $(container).css('zIndex','auto');
	    $(container).appendTo(this._el);
	    $(container).find('.CodeMirror').css({
		height: cmPercent
	    });
	    this.editor.focus();
	    this._fullScreen = false;
	}
	this.editor.refresh();
    };

    CodeEditorWidget.prototype.getActiveInfo = function() {
        var self = this;
        var retData = {};
        var selectedNodes = self._fancyTree.getSelectedNodes(); // should just return one
        if (selectedNodes.length) {
            var selectedAttribute = selectedNodes[0];
            var selectedNode = selectedAttribute.getParent();
            retData.activeNode = selectedAttribute;
            retData.parentNode = selectedNode;
            retData.gmeId = selectedNode.data.id;
            retData.attribute = selectedAttribute.title;
            retData.document = selectedAttribute.data;
        }
        return retData;
    };

    CodeEditorWidget.prototype.getNodeInfo = function(gmeId) {
	var self = this;
	var retData = {};
	var parentNode = self._fancyTree.getNodeByKey(gmeId);
	if (parentNode) {
	    retData.node = parentNode;
	    retData.gmeId = gmeId;
	    retData.attributes = {};
	    var children = parentNode.getChildren();
	    children.map(function(child) {
		retData.attributes[child.title] = {
		    'node': child,
		    'document': child.data
		}
	    });
	}
	return retData;
    };

    CodeEditorWidget.prototype.saveChanges = function() {
	if (this._activeInfo.attribute) {
	    var value = this.editor.getValue();
	    console.log('Checking for difference in: ' + this._activeInfo.attribute);
	    if (value != this._activeInfo.document.__previous_value) {
		console.log('Saving Changes to ' + this._activeInfo.gmeId + ' : ' + this._activeInfo.attribute);
		this._client.setAttribute(this._activeInfo.gmeId, this._activeInfo.attribute, value);
                var doc = this._activeInfo.document;
                doc.__previous_value = value;
		this._activeInfo.activeNode.fromDict({
                    'data': doc
                });
	    }
	}
    };

    CodeEditorWidget.prototype.swapBuffer = function() {
        // TODO: Update to not just use attribute name to support multiple nodes
        var self = this;
	if (self._activeInfo.document) {
	    var newDoc = self._activeInfo.document;
	    this.editor.swapDoc(newDoc);
	    this.editor.refresh();
	}
    };

    CodeEditorWidget.prototype.saveConfig = function() {
	var self=this;
	ComponentSettings.overwriteComponentSettings(
	    CodeEditorWidget.getComponentId(), this._config,
	    function (err) {
		if (err) {
		    self._logger.error(err);
		}
		else
		    WebGMEGlobal.userInfo.settings[CodeEditorWidget.getComponentId()] = self._config;
	    });
    };

    CodeEditorWidget.prototype.selectTheme = function(event) {
	var self=this;
	var theme_select = event.target;
	var theme = theme_select.options[theme_select.selectedIndex].textContent;
	this._config.theme = theme;
	this.saveConfig();
	this.editor.setOption("theme", theme);
    };

    CodeEditorWidget.prototype.selectKeyBinding = function(event) {
	var self=this;
	var kb_select = event.target;
	var binding = kb_select.options[kb_select.selectedIndex].textContent;
	this._config.keyBinding = binding;
	this.saveConfig();
	this.editor.setOption("keyMap", binding);
    };

    CodeEditorWidget.prototype.onWidgetContainerResize = function (width, height) {
        //console.log('Widget is resizing...');
    };

    CodeEditorWidget.prototype.checkDependencies = function(desc) {
	// only dependency is the node's parent, which must be in the tree already
	var self = this;
	var depsMet = false;
	depsMet = desc.type == self._config.rootType || self.nodes[desc.parentId];
	return depsMet;
    };

    CodeEditorWidget.prototype.updateDependencies = function() {
	// a new node has been created, figure out what other nodes can be made now
	var self = this;
	Object.keys(self.waitingNodes).map(function(gmeId) {
	    var desc = self.waitingNodes[gmeId];
	    if (desc) {
		if (self.checkDependencies(desc)) {
		    self.createNode(desc);
		}
	    }
	});
    };

    CodeEditorWidget.prototype.createNode = function(desc) {
	// simple function to make a node; dependencies have been met
	var self = this;
	var parentNode = self._fancyTree.getRootNode();
	if (self.nodes[desc.parentId] && desc.type != self._config.rootType)
	    parentNode = self._fancyTree.getNodeByKey(desc.parentId);
        var newChild = parentNode.addChildren({
            'title': desc.name,
            'tooltip': desc.type,
            'folder': true,
	    'icon': desc.iconPath,
            'data': desc,
	    'key': desc.id
        });
	self.nodes[desc.id] = desc;
	self.waitingNodes[desc.id] = undefined;
	var attributeNames = Object.keys(desc.codeAttributes);
	if (attributeNames.length > 0) {
	    attributeNames.map(function(attributeName) {
		// add the attributes to buffers
		var mode = self._config.syntaxToModeMap[desc.codeAttributes[attributeName].mode] ||
		    self._config.syntaxToModeMap[self._config.defaultSyntax];
		var doc = new CodeMirror.Doc(desc.codeAttributes[attributeName].value, mode);
		doc.__previous_value = desc.codeAttributes[attributeName].value;
                // add the attribute to the new tree node
		var childKey = desc.id + '::' + attributeName;
                newChild.addChildren({
                    'title': attributeName,
                    'folder': false,
                    'data': doc,
		    'key': childKey,
		    'icon': 'glyphicon glyphicon-edit'
                });
	    });
	    // select the first attribute
	    if (desc.id == WebGMEGlobal.State.getActiveObject())
		self._fancyTree.activateKey(desc.id + '::' + attributeNames[0]);
	    self.editor.refresh();
	    self._fancyTree.getRootNode().sortChildren(null, true); // true for sorting deeply
            self._fancyTree.render();
	}
	self.updateDependencies();
    };

    // Adding/Removing/Updating items
    CodeEditorWidget.prototype.addNode = function (desc) {
	var self = this;
	var self = this;
	if (desc) {
	    self.saveChanges(); // save in case we're moving and haven't saved yet
	    var depsMet = self.checkDependencies(desc);
	    if (depsMet) {
		self.createNode(desc);
	    }
	    else {
		self.waitingNodes[desc.id] = desc;
	    }
	}
    };

    CodeEditorWidget.prototype.removeNode = function (gmeId) {
        // TODO: Update to check which node is removed and update tree or remove viz accordingly
	var self = this;
        var desc = this.nodes[gmeId];
	if(desc) {
	    //$(this._el).find('#CODE_EDITOR_DIV').first().detach();
	    var treeNode = this._fancyTree.getNodeByKey(gmeId);
	    if (treeNode)
		treeNode.remove();
            delete this.nodes[gmeId];
	}
    };

    CodeEditorWidget.prototype.updateNode = function (desc) {
        // TODO: Update to determine which attributes of which node to update.
	var self = this;
        if (desc) {
	    var attributeNames = Object.keys(desc.codeAttributes);
	    if (attributeNames.length > 0) {
		self.nodes[desc.id] = desc;
		var nodeInfo = self.getNodeInfo(desc.id);
		if (nodeInfo.attributes) {
		    attributeNames.map(function(attributeName) {
			var doc = nodeInfo.attributes[attributeName].document;
			if (doc.__previous_value != desc.codeAttributes[attributeName].value) {
			    doc.__previous_value = desc.codeAttributes[attributeName].value;
			    var cursor = doc.getCursor();
			    var lineCount = doc.lineCount();
			    doc.replaceRange(
				desc.codeAttributes[attributeName].value,
				{line:0, ch: 0},
				{line:lineCount}
			    );
			    doc.setCursor(cursor);
			    nodeInfo.attributes[attributeName].node.fromDict({
				'data': doc
			    });
			}
		    });
		    self.editor.refresh();
		}
	    }
        }
    };

    /* * * * * * * * Visualizer event handlers * * * * * * * */

    CodeEditorWidget.prototype.onNodeClick = function (id) {
        //console.log('node clicked');
    };

    /* * * * * * * * Visualizer life cycle callbacks * * * * * * * */
    CodeEditorWidget.prototype.destroy = function () {
        console.log('CodeEditorWidget:: saving when being destroyed');
	this.saveChanges();
    };

    CodeEditorWidget.prototype.onSelectionChanged = function(/*selectedIds*/) {
        //console.log('changed');
    };

    CodeEditorWidget.prototype.onUIActivity = function() {
        //console.log('UI');
    };

    CodeEditorWidget.prototype.onActivate = function () {
        //console.log('CodeEditorWidget has been activated');
    };

    CodeEditorWidget.prototype.onDeactivate = function () {
        console.log('CodeEditorWidget:: saving when being deactivated');
	this.saveChanges();
    };

    return CodeEditorWidget;
});
