/*globals define, WebGMEGlobal*/
/*jshint browser: true*/

/**
 * Generated by VisualizerGenerator 0.1.0 from webgme on Sat Apr 16 2016 08:51:41 GMT-0700 (PDT).
 */

// STORES NODES INTO TREE WITH UNIQUE IDs AS THE WEBGME PATH

define([
    'js/Utils/ComponentSettings',
    './Dialog/Dialog',
    // HTML
    'text!./CodeEditor.html',
    'text!./ThemeSelector.html',
    'text!./KeybindingSelector.html',
    'text!./LineWrappingToggle.html',
    // showdown
    './bower_components/showdown/dist/showdown.min',
    // handlebars
    './bower_components/handlebars/handlebars.min',
    // fancy tree
    //'fancytree/jquery.fancytree-all.min',
    // Codemirror
    './bower_components/codemirror/lib/codemirror',
    // Scrolling
    './bower_components/codemirror/addon/scroll/simplescrollbars',
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
    'css!./bower_components/codemirror/addon/scroll/simplescrollbars.css',
    'css!./bower_components/codemirror/lib/codemirror.css',
    'css!./bower_components/codemirror/addon/lint/lint.css',
    'css!./bower_components/codemirror/addon/hint/show-hint.css',
    'css!./bower_components/codemirror/addon/search/matchesonscrollbar.css',
    'css!./bower_components/codemirror/addon/dialog/dialog.css',
    'css!./bower_components/codemirror/addon/display/fullscreen.css',
    'css!./bower_components/codemirror/theme/night.css',
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
    //'css!./bower_components/codemirror/theme/liquibyte.css',
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
    Dialog,
    // html
    CodeEditorHtml,
    ThemeSelectorHtml,
    KeybindingSelectorHtml,
    LineWrappingToggleHtml,
    // showdown
    showdown,
    // handlebars
    handlebars,
    // fancytree
    // fancytree,
    // CodeMirror
    CodeMirror,
    // Scrolling
    CodeMirrorScrolling,
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
	this.docs = {};
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
	    'enableThemeSelection': true,
            'keyBinding': 'sublime',
	    'enableKeybindingSelection': true,
            'lineWrapping': false,
	    'enableLineWrappingToggle': true,
            'defaultSyntax': 'cpp',
            'syntaxToModeMap': {},
            'rootTypes': [],
            'excludeTypes': [],
            'loadDepth': 5,
            'autoSaveInterval': 2000,
            'attrToSyntaxMap': {},
            'attrToInfoMap': {},
            'nameTemplateMap': {}
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
	var compId = CodeEditorWidget.getComponentId();
	if (typeof WebGMEGlobal !== 'undefined') {
	    var deploymentSettings = WebGMEGlobal.componentSettings &&
		WebGMEGlobal.componentSettings[ compId ];
	    var userSettings       = WebGMEGlobal.userInfo && WebGMEGlobal.userInfo.settings &&
		WebGMEGlobal.userInfo.settings[ compId ];
	    this._config = ComponentSettings.resolveSettings( this._config, deploymentSettings );
	    // update what is saved for the user
	    if (this._config.enableThemeSelection) {
		this._config.theme = userSettings && userSettings.theme;
	    }
	    if (this._config.enableKeybindingSelection) {
		this._config.keyBinding = userSettings && userSettings.keyBinding;
	    }
	    if (this._config.enableLineWrappingToggle) {
		this._config.lineWrapping = userSettings && userSettings.lineWrapping;
	    }
            //ComponentSettings.resolveWithWebGMEGlobal(this._config, CodeEditorWidget.getComponentId());
	}

        // set widget class
        //this._el.addClass(WIDGET_CLASS);

        this._activeInfo = {};

	// make sure any resizing gets properly propagated
	this._el.resize(this.onWidgetContainerResize);

        // Create the CodeEditor and options
        this._readOnly = this._client.isProjectReadOnly();
        this._fullscreen = false;
        this._el.append(CodeEditorHtml);

        //this._containerTag = '.ui-layout-pane-center';
        this._containerTag = '#CODE_EDITOR_DIV';
        this._container = this._el.find(this._containerTag).first();
        this._codearea = this._el.find('#codearea').first();

        // Tree browswer widget
        this._treeBrowser = this._el.find('#codeTree');
        this._treeBrowser.fancytree({
            'checkbox': false,
            'activeVisible': true,
            'clickFolderMode': 3, // expand,
            'focusOnSelect': true,
            'icon': true, // make function returning icons,
            'imagePath': null, // store icons here for use,
            'selectMode': 1, // single select mode,
            'keyboard': true, // disable keyboard for now
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
	    self.setGMESelection();
            // swap to new buffer
            self.swapBuffer();
        });

        // Split view resizing
        this._handle = this._el.find('#codeEditorHandle');
        this._left = this._el.find('#codeEditorLeft');
        this._right = this._el.find('#codeEditorRight');

        this._left.css('width', '19.5%');
        this._right.css('width', '80%');

        this.isDragging = false;
        this._fullScreen = false;

        this._handle.mousedown(function(e) {
            self.isDragging = true;
            e.preventDefault();
        });
        this._container.mouseup(function() {
            self.isDragging = false;
            self.editor.refresh();
        }).mousemove(function(e) {
            if (self.isDragging) {
                var selector = $(self._el).find(self._containerTag);
		var mousePosX = e.pageX;
                if (self._fullScreen) {
		    // now we're at the top of the document :)
		    selector = $(document).find(self._containerTag).first();
                }
		else {
		    // convert x position as needed
		    // get offset from split panel
                    mousePosX -= $(self._el).find(self._containerTag).parents('.panel-base-wh').parent().position().left;
		    // get offset from west panel
		    mousePosX -= $('.ui-layout-pane-center').position().left;
                    //var selector = self._fullScreen ? self._containerTag : '.ui-layout-pane-center';
		}
                var maxWidth = selector.width();
                var handlePercent = 0.5;
                var minX = 0;
                var maxX = selector.width() + minX;
                var leftWidth = mousePosX - minX;
                var leftPercent = Math.max(10, (leftWidth / maxWidth) * 100);
                var rightPercent = Math.max(10, 100 - leftPercent - handlePercent);
                leftPercent = 100 - rightPercent - handlePercent;
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
            scrollbarStyle: "simple",
            lint: false,
            //viewPortMargin: Infinity,
            lineWrapping: this._config.lineWrapping || false,
            keyMap: this._config.keyBinding || 'sublime',
            path: './bower_components/codemirror/lib/',
            theme: this._config.theme || 'default',
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
            _.debounce(this.saveChanges.bind(this), +this._config.autoSaveInterval || 1.0)
        );

        this.editor.setOption("extraKeys", {
            'F11': function(cm) {
                self.fullScreen(!self._fullScreen);
            },
            'Esc': function(cm) {
                self.fullScreen(false);
            },
            "Ctrl-Q": function(cm){
                cm.foldCode(cm.getCursor());
            }
        });

        this.editor.foldCode(CodeMirror.Pos(0, 0));

	this._selectors = $(this._el).find('#codeEditorSelectors').first();
        // THEME SELECT
	if (this._config.enableThemeSelection) {
	    this._selectors.append( ThemeSelectorHtml );
            this.theme_select = this._el.find("#theme_select").first();
            $(this.theme_select).val(this._config.theme);
            this.theme_select.on('change', this.selectTheme.bind(this));
	}

        // KEY MAP SELECTION
	if (this._config.enableKeybindingSelection) {
	    this._selectors.append( KeybindingSelectorHtml );
            this.kb_select = this._el.find("#kb_select").first();
            $(this.kb_select).val(this._config.keyBinding);
            this.kb_select.on('change', this.selectKeyBinding.bind(this));
	}

	this._toggles = $(this._el).find('#codeEditorToggles').first();
        // LINE WRAPPING TOGGLE
	if (this._config.enableLineWrappingToggle) {
	    this._toggles.append( LineWrappingToggleHtml );
            this.lineWrap_toggle = this._el.find("#cbLineWrapping").first();
            $(this.lineWrap_toggle).prop('checked', this._config.lineWrapping);
            
            this.lineWrap_toggle.on('click', this.toggleLineWrapping.bind(this));
	}

        $(this._el).find('.CodeMirror').css({
            height: cmPercent
        });
    };

    /* * * * * * * * Display Functions  * * * * * * * */
    function makeDocString(obj) {
        var docStr = obj
        if (Array.isArray(docStr)) {
            docStr = docStr.join('\n');
        }
        return docStr;
    }

    function makeDocSummary(docStr, summary) {
        return '<details><summary>' + summary + '</summary><p>\n' + docStr + '\n</p></details>';
    }

    CodeEditorWidget.prototype._getDocumentation = function(activeInfo) {
        var self = this;
        var markdown = null;
        var numParents = 0;
        var p = null;
        if (activeInfo.attribute) {
            // we've clicked on an editable code attribute
            var parentInfoMap = self._config.attrToInfoMap &&
                self._config.attrToInfoMap[activeInfo.parentNode.data.type];
            if (parentInfoMap) {
                var attrInfo = makeDocString(parentInfoMap.attributes[activeInfo.attribute]);
                var parentInfo = makeDocString(parentInfoMap.docstring);
                var parentSummary = activeInfo.parentNode.data.type + ' Information';
                numParents = parentInfoMap.ancestorDepth || 0;
                p = activeInfo.parentNode;
                markdown = [attrInfo, makeDocSummary( parentInfo, parentSummary ) ];
            }
        }
        else {
            // we've clicked on a folder
            var folderInfoMap = self._config.attrToInfoMap &&
                self._config.attrToInfoMap[activeInfo.activeNode.data.type];
            if (folderInfoMap) {
                var folderInfo = makeDocString(folderInfoMap.docstring);
                numParents = folderInfoMap.ancestorDepth || 0;
                p = activeInfo.activeNode;
                markdown = [ folderInfo ];
            }
        }
        for (var i=0; i<numParents; i++) {
            p = p.getParent();
            if (!p) break;
            var parentInfoMap = self._config.attrToInfoMap &&
                self._config.attrToInfoMap[p.data.type];
            if (parentInfoMap) {
                var parentInfo = makeDocString(parentInfoMap.docstring);
                var parentSummary = p.data.type + ' Information';
                markdown.push(makeDocSummary( parentInfo, parentSummary ) );
            }
        }
        markdown = makeDocString( markdown );
        return markdown;
    };

    CodeEditorWidget.prototype._addSplitPanelToolbarBtns = function(toolbarEl) {
        var self = this;

        // BUTTON EVENT HANDLERS

        var infoEl = [
            '<span id="information" class="split-panel-toolbar-btn fa fa-info-circle">',
            '</span>',
        ].join('\n');

        toolbarEl.append(infoEl);

        toolbarEl.find('#information').on('click', function(){
            var d = new Dialog();
            var activeInfo = self.getActiveInfo();
            var markdown = self._getDocumentation( activeInfo );
            if (markdown) {
                var converter = new showdown.Converter();
                d.initialize(converter.makeHtml(markdown));
                d.show();
            }
        });
    };
    

    CodeEditorWidget.prototype.fullScreen = function(toFullScreen) {
	if (this._fullScreen == toFullScreen)
	    return;
        if (toFullScreen) {
            var container = $(this._el).find(this._containerTag).first();
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
            var container = $(document).find(this._containerTag).first();
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

    CodeEditorWidget.prototype.setGMESelection = function() {
	var self = this;
	var selId = null;
	var selectedTreeNodes = self._fancyTree.getSelectedNodes();
	if (selectedTreeNodes.length) {
	    var selNode = selectedTreeNodes[0]; // should just be one
	    if (selNode.isFolder()) { // not a code attribute but an actual webGME node
		selId = selNode.data.id;
	    }
	    else { // code attribute, need to get parent for real webGME node
		selId = selNode.getParent().data.id;
	    }
	}
	if (selId)
	    WebGMEGlobal.State.registerActiveSelection([selId]);
    };

    CodeEditorWidget.prototype.getActiveInfo = function() {
        var self = this;
        var retData = {};
        var selectedNodes = self._fancyTree.getSelectedNodes(); // should just return one
        if (selectedNodes.length) {
            if (!selectedNodes[0].isFolder()) {
                var selectedAttribute = selectedNodes[0];
                var selectedNode = selectedAttribute.getParent();
                retData.activeNode = selectedAttribute;
                retData.parentNode = selectedNode;
                retData.gmeId = selectedNode.data.id;
                retData.attribute = selectedAttribute.title;
            }
            else {
                var selectedNode   = selectedNodes[0];
                var selectedParent = selectedNode.getParent();
                retData.activeNode = selectedNode;
                retData.parentNode = selectedParent;
                retData.gmeId = selectedNode.data.id;
                retData.attribute = null;
            }
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
	    if (children) {
		children.map(function(child) {
                    retData.attributes[child.title] = {
			'node': child
                    };
		});
	    }
        }
        return retData;
    };

    CodeEditorWidget.prototype.getActiveDoc = function() {
	if (this.docs[this._activeInfo.gmeId] && this._activeInfo.attribute)
	    return this.docs[this._activeInfo.gmeId][this._activeInfo.attribute];
	return null;
    };

    CodeEditorWidget.prototype.saveChanges = function() {
        if (this.nodes && this._activeInfo.attribute) {
            var value = this.editor.getValue();
            console.log('Checking for difference in: ' + this._activeInfo.attribute);
	    var doc = this.getActiveDoc();
            if (doc && value != doc.__previous_value) {
                console.log('Saving Changes to ' + this._activeInfo.gmeId + ' : ' + this._activeInfo.attribute);
                this._client.setAttribute(this._activeInfo.gmeId, this._activeInfo.attribute, value);
                doc.__previous_value = value;
		this.docs[this._activeInfo.gmeId][this._activeInfo.attribute] = doc;
            }
        }
    };

    CodeEditorWidget.prototype.swapBuffer = function() {
        var self = this;
        var newDoc = new CodeMirror.Doc(' ');
        if (self.getActiveDoc()) {
            newDoc = self.getActiveDoc();
        }
        this.editor.swapDoc(newDoc);
        this.editor.refresh();
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

    CodeEditorWidget.prototype.toggleLineWrapping = function(event) {
        var self=this;
        //var lineWrapping = $(self.lineWrap_toggle).prop('checked');
        var lineWrap_toggle = event.target;
        var lineWrap = lineWrap_toggle.checked;

        this._config.lineWrapping = lineWrap;
        this.saveConfig();
        this.editor.setOption("lineWrapping", lineWrap);
    };

    CodeEditorWidget.prototype.onWidgetContainerResize = function (width, height) {
	this.editor.refresh();
        //console.log('Widget is resizing...');
    };

    CodeEditorWidget.prototype.isRootType = function(type) {
	var self = this;
	var isRoot = self._config.rootTypes.indexOf(type) > -1;
	return isRoot;
    };

    CodeEditorWidget.prototype.checkDependencies = function(desc) {
        // only dependency is the node's parent, which must be in the tree already
        var self = this;
        var depsMet = false;
        depsMet = self.isRootType(desc.type) || self.nodes[desc.parentId];
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

    CodeEditorWidget.prototype.getNodeName = function(desc) {
        var self = this;
        var name = desc.name;
        var template = self._config.nameTemplateMap && self._config.nameTemplateMap[desc.type];
        if (template) {
            name = handlebars.compile( template )( desc.attributes ) || name;
        }
        return name;
    };

    CodeEditorWidget.prototype.createNode = function(desc) {
        // simple function to make a node; dependencies have been met
        var self = this;
        var parentNode = self._fancyTree.getRootNode();
        if (self.nodes[desc.parentId] && !self.isRootType(desc.type))
            parentNode = self._fancyTree.getNodeByKey(desc.parentId);
	if (!parentNode) // shouldn't happen!
	    return;
        var newChild = parentNode.addChildren({
            'title': self.getNodeName(desc),
            'tooltip': desc.type,
            'folder': true,
            'icon': desc.iconPath || 'glyphicon glyphicon-folder-open',
            'data': desc,
            'key': desc.id
        });
        self.nodes[desc.id] = desc;
	self.docs[desc.id] = {};
        self.waitingNodes[desc.id] = undefined;
        var attributeNames = Object.keys(desc.codeAttributes);
        if (attributeNames.length > 0) {
            attributeNames.map(function(attributeName) {
                // add the attributes to buffers
                var mode = self._config.syntaxToModeMap[desc.codeAttributes[attributeName].mode] ||
                    self._config.syntaxToModeMap[self._config.defaultSyntax];
                var doc = new CodeMirror.Doc(desc.codeAttributes[attributeName].value, mode);
                doc.__previous_value = desc.codeAttributes[attributeName].value;
		self.docs[desc.id][attributeName] = doc;
                // add the attribute to the new tree node
                var childKey = desc.id + '::' + attributeName;
                newChild.addChildren({
                    'title': attributeName,
                    'folder': false,
                    'key': childKey,
                    'icon': mode.icon || 'glyphicon glyphicon-edit'
                });
            });
            // select the first attribute
            if (desc.id == WebGMEGlobal.State.getActiveObject())
                self.setActiveSelection( desc.id );
            self.editor.refresh();
            self._fancyTree.getRootNode().sortChildren(
                function(a, b) {
                    var x = (a.isFolder() ? "1" : "0") + a.title.toLowerCase(),
                        y = (b.isFolder() ? "1" : "0") + b.title.toLowerCase();
                    return x === y ? 0 : x > y ? 1 : -1;
                },
                true); // true for sorting deeply
            self._fancyTree.render();
        }
        self.updateDependencies();
    };

    CodeEditorWidget.prototype.setActiveSelection = function(gmeId) {
        var self = this;
        if (self.nodes && self.nodes[ gmeId ]) {
            self._fancyTree.activateKey( gmeId );
        }
    };

    // Adding/Removing/Updating items
    CodeEditorWidget.prototype.addNode = function (desc) {
        var self = this;
        var self = this;
        if (desc) {
	    // save in case we're moving and haven't saved yet
            //self.saveChanges(); 
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
	// TODO: Handle non-code updates that affect tree, like name of node
        var self = this;
        if (desc) {
	    // update the node info in our database
            self.nodes[desc.id] = desc;
            var nodeInfo = self.getNodeInfo(desc.id);
	    if (nodeInfo.node) {
		// make sure the title is up to date
		nodeInfo.node.setTitle(self.getNodeName(desc));
	    }
            var attributeNames = Object.keys(desc.codeAttributes);
            if (attributeNames.length > 0) {
                if (nodeInfo.attributes) {
		    // make sure the code is up to date
                    attributeNames.map(function(attributeName) {
                        var doc = self.docs[desc.id][attributeName];
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
			    self.docs[desc.id][attributeName] = doc;
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

    CodeEditorWidget.prototype.shutdown = function() {
        this.saveChanges();

        this._activeInfo = {};

        if (this._el) {
            this._el.remove();
            delete this._el;
        }

        if (this._treeBrowser) {
            this._treeBrowser.remove();
            delete this._treeBrowser;
        }
        
        delete this.editor;
        this.nodes = {};
    };

    /* * * * * * * * Visualizer life cycle callbacks * * * * * * * */
    CodeEditorWidget.prototype.destroy = function () {
        console.log('CodeEditorWidget:: saving when being destroyed');
        this.shutdown();
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
        this.shutdown();
    };

    return CodeEditorWidget;
});
