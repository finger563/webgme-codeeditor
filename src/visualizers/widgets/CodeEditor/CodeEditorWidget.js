/*globals define, WebGMEGlobal*/
/*jshint browser: true*/

/**
 * Generated by VisualizerGenerator 0.1.0 from webgme on Sat Apr 16 2016 08:51:41 GMT-0700 (PDT).
 */

define([
    'js/Utils/ComponentSettings',
    // HTML
    'text!./CodeEditor.html',
    // Codemirror
    './lib/cm/lib/codemirror', 
    // Syntax highlighting
    './lib/cm/mode/clike/clike',
    './lib/cm/mode/markdown/markdown',
    './lib/cm/mode/javascript/javascript',
    './lib/cm/mode/python/python',
    './lib/cm/mode/diff/diff',
    './lib/cm/mode/cmake/cmake',
    './lib/cm/mode/coffeescript/coffeescript',
    './lib/cm/mode/css/css',
    './lib/cm/mode/dockerfile/dockerfile',
    './lib/cm/mode/erlang/erlang',
    './lib/cm/mode/fortran/fortran',
    './lib/cm/mode/gfm/gfm',
    './lib/cm/mode/go/go',
    './lib/cm/mode/handlebars/handlebars',
    './lib/cm/mode/haskell/haskell',
    './lib/cm/mode/htmlembedded/htmlembedded',
    './lib/cm/mode/htmlmixed/htmlmixed',
    './lib/cm/mode/idl/idl',
    './lib/cm/mode/lua/lua',
    './lib/cm/mode/mathematica/mathematica',
    './lib/cm/mode/modelica/modelica',
    './lib/cm/mode/nginx/nginx',
    './lib/cm/mode/pascal/pascal',
    './lib/cm/mode/perl/perl',
    './lib/cm/mode/php/php',
    './lib/cm/mode/protobuf/protobuf',
    './lib/cm/mode/r/r',
    './lib/cm/mode/rst/rst',
    './lib/cm/mode/ruby/ruby',
    './lib/cm/mode/shell/shell',
    './lib/cm/mode/spreadsheet/spreadsheet',
    './lib/cm/mode/tcl/tcl',
    './lib/cm/mode/stex/stex',
    './lib/cm/mode/textile/textile',
    './lib/cm/mode/vhdl/vhdl',
    './lib/cm/mode/verilog/verilog',
    './lib/cm/mode/xml/xml',
    './lib/cm/mode/yaml/yaml',
    './lib/cm/mode/yaml-frontmatter/yaml-frontmatter',
    // Keymaps
    './lib/cm/keymap/emacs', 
    './lib/cm/keymap/sublime',
    './lib/cm/keymap/vim',
    // Addons 
    './lib/cm/addon/lint/lint',
    './lib/cm/addon/lint/json-lint',
    './lib/cm/addon/lint/jsonlint',
    './lib/cm/addon/lint/javascript-lint',
    './lib/cm/addon/lint/coffeescript-lint',
    './lib/cm/addon/lint/yaml-lint',
    './lib/cm/addon/hint/show-hint',
    './lib/cm/addon/hint/anyword-hint',
    './lib/cm/addon/hint/css-hint',
    './lib/cm/addon/hint/html-hint',
    './lib/cm/addon/hint/javascript-hint',
    './lib/cm/addon/hint/sql-hint',
    './lib/cm/addon/hint/xml-hint',
    './lib/cm/addon/search/search',
    './lib/cm/addon/search/searchcursor',
    './lib/cm/addon/search/matchesonscrollbar',
    './lib/cm/addon/search/match-highlighter',
    './lib/cm/addon/search/jump-to-line',
    './lib/cm/addon/scroll/annotatescrollbar',
    './lib/cm/addon/dialog/dialog',
    './lib/cm/addon/display/fullscreen',
    './lib/cm/addon/fold/foldcode',
    './lib/cm/addon/fold/foldgutter',
    './lib/cm/addon/fold/brace-fold',
    './lib/cm/addon/fold/xml-fold',
    './lib/cm/addon/fold/markdown-fold',
    './lib/cm/addon/fold/comment-fold',
    // CSS
    'css!./styles/CodeEditorWidget.css',
    'css!./lib/cm/addon/lint/lint.css',
    'css!./lib/cm/addon/hint/show-hint.css',
    'css!./lib/cm/addon/search/matchesonscrollbar.css',
    'css!./lib/cm/addon/dialog/dialog.css',
    'css!./lib/cm/addon/display/fullscreen.css',
    'css!./lib/cm/theme/night.css',
    'css!./lib/cm/lib/codemirror.css',
    'css!./lib/cm/theme/3024-day.css',
    'css!./lib/cm/theme/3024-night.css',
    'css!./lib/cm/theme/abcdef.css',
    'css!./lib/cm/theme/ambiance.css',
    'css!./lib/cm/theme/base16-dark.css',
    'css!./lib/cm/theme/bespin.css',
    'css!./lib/cm/theme/base16-light.css',
    'css!./lib/cm/theme/blackboard.css',
    'css!./lib/cm/theme/cobalt.css',
    'css!./lib/cm/theme/colorforth.css',
    'css!./lib/cm/theme/dracula.css',
    'css!./lib/cm/theme/eclipse.css',
    'css!./lib/cm/theme/elegant.css',
    'css!./lib/cm/theme/erlang-dark.css',
    'css!./lib/cm/theme/hopscotch.css',
    'css!./lib/cm/theme/icecoder.css',
    'css!./lib/cm/theme/isotope.css',
    'css!./lib/cm/theme/lesser-dark.css',
    'css!./lib/cm/theme/liquibyte.css',
    'css!./lib/cm/theme/material.css',
    'css!./lib/cm/theme/mbo.css',
    'css!./lib/cm/theme/mdn-like.css',
    'css!./lib/cm/theme/midnight.css',
    'css!./lib/cm/theme/monokai.css',
    'css!./lib/cm/theme/neat.css',
    'css!./lib/cm/theme/neo.css',
    'css!./lib/cm/theme/night.css',
    'css!./lib/cm/theme/paraiso-dark.css',
    'css!./lib/cm/theme/paraiso-light.css',
    'css!./lib/cm/theme/pastel-on-dark.css',
    'css!./lib/cm/theme/railscasts.css',
    'css!./lib/cm/theme/rubyblue.css',
    'css!./lib/cm/theme/seti.css',
    'css!./lib/cm/theme/solarized.css',
    'css!./lib/cm/theme/the-matrix.css',
    'css!./lib/cm/theme/tomorrow-night-bright.css',
    'css!./lib/cm/theme/tomorrow-night-eighties.css',
    'css!./lib/cm/theme/ttcn.css',
    'css!./lib/cm/theme/twilight.css',
    'css!./lib/cm/theme/vibrant-ink.css',
    'css!./lib/cm/theme/xq-dark.css',
    'css!./lib/cm/theme/xq-light.css',
    'css!./lib/cm/theme/yeti.css',
    'css!./lib/cm/theme/zenburn.css',
    'css!./lib/cm/addon/fold/foldgutter'
], function (
    ComponentSettings,
    CodeEditorHtml,
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
    cmPercent = '94%';

    CodeEditorWidget = function (logger, container, client) {
        this._logger = logger.fork('Widget');
	this._client = client;
        this._el = container;

	$(this._el).css({
	    'padding': '0'
	});

        this.nodes = {};
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
	    'autoSaveInterval': 2000,
	    'attrToSyntaxMap': {}
	};
    }; 
    
    CodeEditorWidget.getComponentId = function () { 
        return 'CodeEditor'; 
    }; 

    CodeEditorWidget.prototype._initialize = function () {
        var width = this._el.width(),
        height = this._el.height(),
        self = this;

	this._config = CodeEditorWidget.getDefaultConfig(); 
	ComponentSettings.resolveWithWebGMEGlobal(this._config, CodeEditorWidget.getComponentId()); 

        // set widget class
        //this._el.addClass(WIDGET_CLASS);

        // Create the CodeEditor and options
	this._readOnly = this._client.isProjectReadOnly();
	this._fullscreen = false;
        this._el.append(CodeEditorHtml);
	this._container = this._el.find('#CODE_EDITOR_DIV').first();
	this._codearea = this._el.find('#codearea').first();
	this._title = this._el.find('#code_editor_title');
	this.selectedAttribute = null;
	this.selectedNode = null;

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
	    path: './lib/cm/lib/',
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

	var self=this;
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

	// SYNTAX HIGHLIGHTING SELECTION
	this.syntax_select = this._el.find("#syntax_select").first();
	var modeNames = Object.keys(this._config.syntaxToModeMap);
	var self = this;
	modeNames.map(function(modeName) {
	    $(self.syntax_select).append(new Option(modeName, modeName));
	});
	$(this.syntax_select).val(this._config.defaultSyntax);
	this.syntax_select.on('change', this.selectSyntax.bind(this));

	this.buffer_select = this._el.find("#buffer_select").first();
	this.buffer_select.on('change', this.selectBuffer.bind(this));

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
	    $(container).zIndex(9999);
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
	    $(container).zIndex('auto');
	    $(container).appendTo(this._el);
	    $(container).find('.CodeMirror').css({
		height: cmPercent
	    });
	    this.editor.focus();
	    this._fullScreen = false;
	}
	this.editor.refresh();
    };

    CodeEditorWidget.prototype.saveChanges = function(cm, changes) {
	try {
	    if (this.selectedNode && this.selectedAttribute && cm) {
		var value = cm.getValue();
		console.log('Checking for difference in: ' + this.selectedAttribute);
		if (value != this.docs[this.selectedAttribute].__previous_value) {
		    console.log('Saving Changes.');
		    this._client.setAttributes(this.selectedNode, this.selectedAttribute, value);
		    this.docs[this.selectedAttribute].__previous_value = value;
		}
	    }
	}
	catch (e) {
	    this._logger.error('Saving META failed: ' + e);
	}
    };

    CodeEditorWidget.prototype.selectBuffer = function(event) {
	var buffer_select = event.target;
	var newAttribute = buffer_select.options[buffer_select.selectedIndex].textContent;
	if (newAttribute) {
	    this.saveChanges(this.editor);
	    var newDoc = this.docs[newAttribute];
	    this.docs[this.selectedAttribute] = this.editor.swapDoc(newDoc);
	    this.selectedAttribute = newAttribute;
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

    CodeEditorWidget.prototype.selectSyntax = function(event) {
	var self=this;
	var syntax_select = event.target;
	var syntax = syntax_select.options[syntax_select.selectedIndex].textContent;
	this._config.defaultSyntax = syntax;
	this.saveConfig();
	this.editor.setOption("mode", this._config.syntaxToModeMap[syntax]);
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

    // Adding/Removing/Updating items
    CodeEditorWidget.prototype.addNode = function (desc) {
	var self = this;
        if (desc) {
	    self.saveChanges(self.editor); // save in case we're moving and haven't saved yet
	    $(self._title).text(desc.name);
	    var attributeNames = Object.keys(desc.codeAttributes);
	    if (attributeNames.length > 0) {
		self.nodes[desc.id] = desc;
		self.selectedNode = desc.id;
		attributeNames.map(function(attributeName) {
		    // add the attributes to buffers
		    var mode = self._config.syntaxToModeMap[desc.codeAttributes[attributeName].mode] ||
			self._config.syntaxToModeMap[self._config.defaultSyntax];
		    self.docs[attributeName] = new CodeMirror.Doc(desc.codeAttributes[attributeName].value, mode);
		    self.docs[attributeName].__previous_value = desc.codeAttributes[attributeName].value;
		    $(self.buffer_select).append(new Option(attributeName, attributeName));
		});
		// select the first attribute?
		self.selectedAttribute = attributeNames[0];
		self.editor.swapDoc(self.docs[self.selectedAttribute]);
		self.editor.refresh();
	    }
        }
    };

    CodeEditorWidget.prototype.removeNode = function (gmeId) {
	var self = this;
        var desc = this.nodes[gmeId];
	if(desc) {
	    $(this._el).find('#CODE_EDITOR_DIV').first().detach();
            delete this.nodes[gmeId];
	}
    };

    CodeEditorWidget.prototype.updateNode = function (desc) {
	var self = this;
        if (desc) {
	    var attributeNames = Object.keys(desc.codeAttributes);
	    if (attributeNames.length > 0) {
		self.nodes[desc.id] = desc;
		$(self._title).text(desc.name);
		attributeNames.map(function(attributeName) {
		    if (self.docs[attributeName].__previous_value != desc.codeAttributes[attributeName].value) {
			self.docs[attributeName].__previous_value = desc.codeAttributes[attributeName].value;
			var cursor = self.docs[attributeName].getCursor();
			var lineCount = self.docs[attributeName].lineCount();
			self.docs[attributeName].replaceRange(
			    desc.codeAttributes[attributeName].value,
			    {line:0, ch: 0},
			    {line:lineCount}
			);
			self.docs[attributeName].setCursor(cursor);
		    }
		});
		self.editor.refresh();
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
	this.saveChanges(this.editor);
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
	this.saveChanges(this.editor);
    };

    return CodeEditorWidget;
});
