/**
 * @author William Emfinger  https://github.com/finger563
 */

define(['text!./Dialog.html',
	'css!./Dialog.css'],
       function(DialogTemplate){
           'use strict';
	   
           var Dialog;

           /**
            * Dialog Constructor
            * Insert dialog modal into body and initialize editor with
            * customized options
            */
           Dialog = function () {
               // Get Modal Template node for Editor Dialog and append it to body
               this._dialog = $(DialogTemplate);
               this._dialog.appendTo($(document.body))

               // Get element nodes
               this._el = this._dialog.find('.modal-body').first();

	       // information
	       this._information = this._dialog.find('#information').first();

	       // buttons
               this._btnClose = this._dialog.find('.close').first();
               this._btnCancel = this._dialog.find('.btn-cancel').first();
           };

           /**
            * Initialize Dialog
            * @param  {string}     htmlText       The text of the HTML that is the rendered info.
            * @return {void}
            */
           Dialog.prototype.initialize = function (htmlText) {
               var self = this;

               // Initialize Modal and append it to main DOM
               this._dialog.modal({ show: false});

               $(self._information).append($(htmlText));
	       // add children types to selector

               // Event listener on click for CLOSE button
               this._btnClose.on('click', function (event) {
                   // Close dialog
		   self._dialog.modal({ show: false});
                   self._dialog.modal('hide');
                   event.stopPropagation();
                   event.preventDefault();
               });

               // Event listener on click for CANCEL button
               this._btnCancel.on('click', function (event) {
                   // Close dialog
		   self._dialog.modal({ show: false});
                   self._dialog.modal('hide');
                   event.stopPropagation();
                   event.preventDefault();
               });

               // Listener on event when dialog is shown
               // Use callback to show editor after Modal window is shown.
               this._dialog.on('shown.bs.modal', function () {
                   // Render text from params into Editor and store it in local storage
               });

               // Listener on event when dialog is hidden
               this._dialog.on('hidden.bs.modal', function () {
                   self._dialog.empty();
                   self._dialog.remove();
               });
           };

           /**
            * Show actual text editor in its container by loading EpicEditor, this method
            * must be put into listener's callback function because its container is not appended
            * into DOM at this point and load() cannot access other DOM elements.
            * @return {void}
            */
           Dialog.prototype.show = function () {
               var self = this;
               self._dialog.modal('show');
           };

           return Dialog;
       });
