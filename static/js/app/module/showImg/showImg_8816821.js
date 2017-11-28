define('js/app/module/showImg/showImg', ['js/lib/jquery-2.1.4'], function ($) {
    var tmpl = "<div class=\"module-show-img-mask\">\r\n\t<img id=\"J_ShowImg_Cont\" class=\"module-center-img\" src=\"\"/>\r\n</div>";
    var css = ".module-show-img-mask{\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-color: rgb(0,0,0);\r\n\tz-index: 9999;\r\n\tdisplay: none;\r\n}\r\n.module-show-img-mask .module-center-img{\r\n\tmax-width: 100%;\r\n\tmax-height: 100%;\r\n\tposition: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    -webkit-transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    -moz-transform: translate(-50%, -50%);\r\n}";

    $("head").append('<style>'+css+'</style>');
    function _hasShowImg() {
        return !!$(".module-show-img-mask").length;
    }
    return {
        createImg: function(pic){
        	pic = pic && pic.replace(/\?.*/gi, "") || "";
            if(_hasShowImg()){
                $("#J_ShowImg_Cont").attr("src", pic);
            }else{
                var cont = $(tmpl);
                cont.find("#J_ShowImg_Cont").attr("src", pic);
                $("body").append(cont);
                var that = this;
                $(".module-show-img-mask").on("click", function(){
                	that.hideImg();
                });
            }
            return this;
        },
        showImg: function(time){
            if(_hasShowImg()){
                $(".module-show-img-mask").fadeIn(time || 200);
            }
            return this;
        },
        hideImg: function(time){
        	if(_hasShowImg()){
        		$(".module-show-img-mask").fadeOut(time || 200);
        	}
            return this;
        }
    }
});