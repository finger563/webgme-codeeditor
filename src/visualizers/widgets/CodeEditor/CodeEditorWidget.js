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
    'codemirror/lib/codemirror', 
    // Syntax highlighting
    'codemirror/mode/clike/clike',
    'codemirror/mode/markdown/markdown',
    'codemirror/mode/javascript/javascript',
    'codemirror/mode/python/python',
    'codemirror/mode/diff/diff',
    'codemirror/mode/cmake/cmake',
    'codemirror/mode/coffeescript/coffeescript',
    'codemirror/mode/css/css',
    'codemirror/mode/dockerfile/dockerfile',
    'codemirror/mode/erlang/erlang',
    'codemirror/mode/fortran/fortran',
    'codemirror/mode/gfm/gfm',
    'codemirror/mode/go/go',
    'codemirror/mode/handlebars/handlebars',
    'codemirror/mode/haskell/haskell',
    'codemirror/mode/htmlembedded/htmlembedded',
    'codemirror/mode/htmlmixed/htmlmixed',
    'codemirror/mode/idl/idl',
    'codemirror/mode/lua/lua',
    'codemirror/mode/mathematica/mathematica',
    'codemirror/mode/modelica/modelica',
    'codemirror/mode/nginx/nginx',
    'codemirror/mode/pascal/pascal',
    'codemirror/mode/perl/perl',
    'codemirror/mode/php/php',
    'codemirror/mode/protobuf/protobuf',
    'codemirror/mode/r/r',
    'codemirror/mode/rst/rst',
    'codemirror/mode/ruby/ruby',
    'codemirror/mode/shell/shell',
    'codemirror/mode/spreadsheet/spreadsheet',
    'codemirror/mode/tcl/tcl',
    'codemirror/mode/stex/stex',
    'codemirror/mode/textile/textile',
    'codemirror/mode/vhdl/vhdl',
    'codemirror/mode/verilog/verilog',
    'codemirror/mode/xml/xml',
    'codemirror/mode/yaml/yaml',
    'codemirror/mode/yaml-frontmatter/yaml-frontmatter',
    // Keymaps
    'codemirror/keymap/emacs', 
    'codemirror/keymap/sublime',
    'codemirror/keymap/vim',
    // Addons 
    'codemirror/addon/lint/lint',
    'codemirror/addon/lint/json-lint',
    'jsonlint/jsonlint',
    'codemirror/addon/lint/javascript-lint',
    'codemirror/addon/lint/coffeescript-lint',
    'codemirror/addon/lint/yaml-lint',
    'codemirror/addon/hint/show-hint',
    'codemirror/addon/hint/anyword-hint',
    'codemirror/addon/hint/css-hint',
    'codemirror/addon/hint/html-hint',
    'codemirror/addon/hint/javascript-hint',
    'codemirror/addon/hint/sql-hint',
    'codemirror/addon/hint/xml-hint',
    'codemirror/addon/search/search',
    'codemirror/addon/search/searchcursor',
    'codemirror/addon/search/matchesonscrollbar',
    'codemirror/addon/search/match-highlighter',
    'codemirror/addon/search/jump-to-line',
    'codemirror/addon/scroll/annotatescrollbar',
    'codemirror/addon/dialog/dialog',
    'codemirror/addon/display/fullscreen',
    'codemirror/addon/fold/foldcode',
    'codemirror/addon/fold/foldgutter',
    'codemirror/addon/fold/brace-fold',
    'codemirror/addon/fold/xml-fold',
    'codemirror/addon/fold/markdown-fold',
    'codemirror/addon/fold/comment-fold',
    // CSS
    'css!./styles/CodeEditorWidget.css',
    'css!codemirror/addon/lint/lint.css',
    'css!codemirror/addon/hint/show-hint.css',
    'css!codemirror/addon/search/matchesonscrollbar.css',
    'css!codemirror/addon/dialog/dialog.css',
    'css!codemirror/addon/display/fullscreen.css',
    'css!codemirror/theme/night.css',
    'css!codemirror/lib/codemirror.css',
    'css!codemirror/theme/3024-day.css',
    'css!codemirror/theme/3024-night.css',
    'css!codemirror/theme/abcdef.css',
    'css!codemirror/theme/ambiance.css',
    'css!codemirror/theme/base16-dark.css',
    'css!codemirror/theme/bespin.css',
    'css!codemirror/theme/base16-light.css',
    'css!codemirror/theme/blackboard.css',
    'css!codemirror/theme/cobalt.css',
    'css!codemirror/theme/colorforth.css',
    'css!codemirror/theme/dracula.css',
    'css!codemirror/theme/eclipse.css',
    'css!codemirror/theme/elegant.css',
    'css!codemirror/theme/erlang-dark.css',
    'css!codemirror/theme/hopscotch.css',
    'css!codemirror/theme/icecoder.css',
    'css!codemirror/theme/isotope.css',
    'css!codemirror/theme/lesser-dark.css',
    'css!codemirror/theme/liquibyte.css',
    'css!codemirror/theme/material.css',
    'css!codemirror/theme/mbo.css',
    'css!codemirror/theme/mdn-like.css',
    'css!codemirror/theme/midnight.css',
    'css!codemirror/theme/monokai.css',
    'css!codemirror/theme/neat.css',
    'css!codemirror/theme/neo.css',
    'css!codemirror/theme/night.css',
    'css!codemirror/theme/paraiso-dark.css',
    'css!codemirror/theme/paraiso-light.css',
    'css!codemirror/theme/pastel-on-dark.css',
    'css!codemirror/theme/railscasts.css',
    'css!codemirror/theme/rubyblue.css',
    'css!codemirror/theme/seti.css',
    'css!codemirror/theme/solarized.css',
    'css!codemirror/theme/the-matrix.css',
    'css!codemirror/theme/tomorrow-night-bright.css',
    'css!codemirror/theme/tomorrow-night-eighties.css',
    'css!codemirror/theme/ttcn.css',
    'css!codemirror/theme/twilight.css',
    'css!codemirror/theme/vibrant-ink.css',
    'css!codemirror/theme/xq-dark.css',
    'css!codemirror/theme/xq-light.css',
    'css!codemirror/theme/yeti.css',
    'css!codemirror/theme/zenburn.css',
    'css!codemirror/addon/fold/foldgutter'
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
	    path: 'codemirror/lib/',
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

    CodeEditorWidget.prototype.saveChanges = function(cm, changes) {
	try {
	    if (this.selectedNode && this.selectedAttribute && cm) {
		var value = cm.getValue();
		console.log('Checking for difference in: ' + this.selectedAttribute);
		if (value != this.docs[this.selectedAttribute].__previous_value) {
		    console.log('Saving Changes.');
		    this._client.setAttribute(this.selectedNode, this.selectedAttribute, value);
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
