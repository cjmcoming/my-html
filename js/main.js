require.config({
	paths: {
		"jquery": "jquery-1.10.2.min",
		"tab": "tab"
	}
});

require(['jquery'], function ($) {

	if($("#bPicA") ) {
		if($(window).width() > 413) {
			document.body.scrollTop = 300;
			$(window).on("scroll touchmove", function() {
				var nScrollTop = Math.max(document.documentElement.scrollTop,document.body.scrollTop);
				if(nScrollTop < 600) {
					$("#bPicA_bg").css("bottom", -nScrollTop/2);
				}else{
					return;
				}
			});
		}
	}

	if($(".bTabA") ) {
		require(['tab'], function (tab) {
			$(".bTabA").each(function(i) {
				tab.init($(".bTabA").eq(i).find(".bTabA_tit span"), $(".bTabA").eq(i).find(".bTabA_bod .bTabA_con"));
			});
		});
	}

});