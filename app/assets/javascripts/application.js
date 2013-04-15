// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require twitter/bootstrap/bootstrap-transition
//= require twitter/bootstrap/bootstrap-alert
//= require twitter/bootstrap/bootstrap-modal
//= require twitter/bootstrap/bootstrap-dropdown
//= require twitter/bootstrap/bootstrap-scrollspy
//= require twitter/bootstrap/bootstrap-tab
//= require twitter/bootstrap/bootstrap-tooltip
//= require twitter/bootstrap/bootstrap-popover
//= require twitter/bootstrap/bootstrap-button
//= require twitter/bootstrap/bootstrap-collapse
//= require twitter/bootstrap/bootstrap-carousel
//= require twitter/bootstrap/bootstrap-typeahead
$(document).ready(function() {
		$('.secondary li').hide();

		$(".main-options input").change(function() {
   		$('.modal-body input[value="' + $(this).val() + '"]').prop("checked", this.checked);
	});
		
	$(".modal-body input").change(function() {
		if( $('.main-options input[value="' + $(this).val() + '"]').is(':visible')) 

		{
   		$('.main-options input[value="' + $(this).val() + '"]').prop("checked", this.checked);
		}
		else
		{	
		
		$('.secondary input[value="' + $(this).val() + '"]').parent().show();
		$('.secondary input[value="' + $(this).val() + '"]').prop("checked", this.checked);

		}
    	
	});

});