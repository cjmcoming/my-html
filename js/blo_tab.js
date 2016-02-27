;(function(){
	function blo_tab($aA,$aB) {
		$aA.each(function(i) {
			$aA.eq(i).on("click", function() {
				$aA.removeClass("cur");
				$aA.eq(i).addClass("cur");
				$aB.removeClass("show");
				$aB.eq(i).addClass("show");
			})
		});
	}
	var moduleName = blo_tab;
	if (typeof module !== 'undefined' && typeof exports === 'object' && define.cmd) {
		module.exports = moduleName;
	} else if (typeof define === 'function' && define.amd) {
		define(function() { return moduleName; });
	} else {
		this.blo_tab = moduleName;
	}
}).call(this || (typeof window !== 'undefined' ? window : global) );
