
/* Hook : list.browse*/
(function($) {

	$.jdomAjax.list_browse = $.extend({}, $.jdomAjax.list,
	{

		// Default function : Define all div as ajax wrapper, then send the request
		initialize: function(object)
		{
			
// TODO : Create the HTML structure of the node : Toolbar, Contents, List 			
			
			
			var wrapper = object;
			this.request(wrapper);
		},
		
		
		
		

	});;
 
}(jQuery));