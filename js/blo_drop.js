;(function(){
	function blo_drop($aA) {
		$aA.each(function(i) {
			var $sel = $aA.eq(i), $tit = $sel.find(".bDropA_tit"), $con = $sel.find(".bDropA_pop");
			$sel.on("mouseover", function() {
				$sel.attr("mouse", "on");
				$con.css("display", "block");
				if($tit.attr("mouse") == "clicked") {$tit.attr("mouse", "");}
			});
			$sel.on("mouseout", function() {
				$sel.attr("mouse", "");
				setTimeout(function() {
					if($sel.attr("mouse") != "on") {
						$con.css("display", "none");
						if($tit.attr("mouse") == "clicked") {$tit.attr("mouse", "");}
					}
				}, 50);
			});
			$tit.on("click", function() {
				if($tit.attr("mouse") != "clicked") {
					$tit.attr("mouse", "clicked");
					$con.css("display", "block");
				}else{
					$tit.attr("mouse", "");
					$con.css("display", "none");
				}
			});
		});
	}
	var moduleName = blo_drop;
	if (typeof module !== 'undefined' && typeof exports === 'object' && define.cmd) {
		module.exports = moduleName;
	} else if (typeof define === 'function' && define.amd) {
		define(function() { return moduleName; });
	} else {
		this.blo_drop = moduleName;
	}
}).call(this || (typeof window !== 'undefined' ? window : global) );