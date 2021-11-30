$(function() {
	'use strict';

	var $firstTarget = $(".nav-persistent"),
		$fluidParent = $(".cont"),
		matchWidths = function($elem) {
			$elem.width($fluidParent.width());
		};

	$firstTarget.clingify({
		extraClass : "primaryClingifyElement",
		locked : function() {
			matchWidths($firstTarget);
		},
		resized : function() {
			matchWidths($firstTarget);
		}
	});
	
	
});
