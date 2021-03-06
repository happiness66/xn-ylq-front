define('js/app/util/cookie', ['require'], function(require) {
	var ret;
	
	ret.set = function(name, value) {
		var Days = 30;
		var exp = new Date();
		exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
		document.cookie = name + "=" + escape(value) + ";expires="
				+ exp.toGMTString() + ";";
	};
	
	ret.get = function(name) {
		var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

		if (arr = document.cookie.match(reg))

			return unescape(arr[2]);
		else
			return null;
	};
	
	ret.del = function(name) {
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval = $.getCookie(name);
		if (cval != null)
			document.cookie = name + "=" + cval + ";expires="
					+ exp.toGMTString();
	}
	
	return ret;
});