define(['jquery'], function ($){
	var tab = function ($aA,$aB){
		$aA.each(function(i) {
			$aA.eq(i).on("click", function() {
				$aA.removeClass("cur");
				$aA.eq(i).addClass("cur");
				$aB.removeClass("show");
				$aB.eq(i).addClass("show");
			})
		});
	};
	return {
		init: tab
	};
});