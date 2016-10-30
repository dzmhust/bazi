(function ($, undefined) {

    $.util.namespace("$.easyui");
    
    //  基于当前页面 document 触发，当前页面嵌套的所有子级和父级页面均执行一个签名为 function (win, e) 事件触发函数；该方法提供如下参数：
    //      eventName:
    //      eventNamespace:
    //      plugin:
    //      callback: 一个签名为 function (win, e) 的函数，其中 win 表示所在 iframe 执行函数传入的 window 对象，e 表示最初触发该循环函数调用的事件对象。
    $.easyui.bindPageNestedFunc = function (eventName, eventNamespace, plugin, callback) {
        if (arguments.length == 3) { callback = plugin; plugin = "jquery"; }
        if (arguments.length == 4 && !plugin) { plugin = "jquery"; }
        $(document).unbind("." + eventNamespace).bind(eventName + "." + eventNamespace, function (e) {
            var doCall = function (win) { callback.call(win, win, e); },
                doCallUp = function (win) {
                    var p = win.parent;
                    try {
                        if (win != p && p.jQuery && p.jQuery.parser && p.jQuery.parser.plugins && p.jQuery.fn && p.jQuery.fn[plugin]) {
                            doCall(p);
                            doCallUp(p);
                        }
                    } catch (ex) { }
                },
                doCallDown = function (win) {
                    var jq = win.jQuery;
                    jq("iframe,iframe").each(function () {
                        try {
                            if (this.contentWindow && jq.util.isObject(this.contentWindow.document) && this.contentWindow.jQuery && this.contentWindow.jQuery.parser && this.contentWindow.jQuery.parser.plugins && this.contentWindow.jQuery.fn && this.contentWindow.jQuery.fn[plugin]) {
                                doCall(this.contentWindow);
                                doCallDown(this.contentWindow);
                            }
                        } catch (ex) { }
                    });
                },
                doCallAll = function (win) {
                    doCall(win);
                    doCallUp(win);
                    doCallDown(win);
                };
            doCallAll(window);
        });
    };

})(jQuery);
/**
 * 是否选择行数据
 */
function rowIsNull(row){
	if(row){
		return false;
	}else{
		parent.$.messager.show({ title : "提示",msg: "请选择行数据！"});
		return true;
	}
}
/**
 * 日期格式化
 * @param val
 * @returns
 */
function fmtDatetime(val){
	if ($.isEmptyObject(val)){
		return '';
	}
	return $.date.format(val,'yyyy-MM-dd HH:mm');
}
/**
 * 起止时间
 * jsp
 * <input id="start" name="start" type="text" class="easyui-textbox">
 * <input id="end" name="end" type="text" class="easyui-textbox">
 * 初始化：DateRange.initDateBox($('#start'), $('#end'));
 * 表单重置时需要加入代码重置
 * DateRange.resetDateBox($('#start'), $('#end'));
 */
var DateRange = function() {
	var option = {
		'editable':false
	};
	return {
		initDateBox : function(startCtr, endCtr){
			startCtr.datebox(option);
			endCtr.datebox(option);
			startCtr.datebox({
				onSelect: function(start){
					var endtemp = moment(endCtr.datebox('getValue'));
					if(start > endtemp){
						endCtr.datebox('setValue', '');
					}
					endCtr.datebox('calendar').calendar({
						validator : function(end) {
							return start < end;
						}
					});
				}
			});
			endCtr.datebox({
				onSelect: function(end){
					var starttemp = moment(startCtr.datebox('getValue'));
					if(starttemp > end){
						startCtr.datebox('setValue', '');
					}
					startCtr.datebox('calendar').calendar({
						validator : function(start) {
							return start < end;
						}
					});
				}
			});
		},
		resetDateBox : function(startCtr, endCtr){
			startCtr.datebox({});
			endCtr.datebox({});
			startCtr.datebox('calendar').calendar({
				validator : function(date) {
					return true;
				}
			});
			endCtr.datebox('calendar').calendar({
				validator : function(date) {
					return true;
				}
			});
		}
	};
}();
/**
 * 根据浏览器动态加载js，css
 */
var userAgent = navigator.userAgent.toLowerCase(); 
jQuery.browser = { 
	version: (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [])[1], 
	safari: /webkit/.test( userAgent ), 
	opera: /opera/.test( userAgent ), 
	msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ), 
	mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent ),
	chrome:/chrome/.test( userAgent ),
	firefox:/firefox/.test( userAgent )
};

$.extend({
    includePath: '',
    include: function(file) {
       var files = typeof file == "string" ? [file]:file;
       for (var i = 0; i < files.length; i++) {
           var name = files[i].replace(/^\s|\s$/g, "");
           var att = name.split('.');
           var ext = att[att.length - 1].toLowerCase();
           var isCSS = ext == "css";
           var tag = isCSS ? "link" : "script";
           var attr = isCSS ? " type='text/css' rel='stylesheet' " : " language='javascript' type='text/javascript' ";
           var link = (isCSS ? "href" : "src") + "='" + $.includePath + name + "'";
           if ($(tag + "[" + link + "]").length == 0) document.write("<" + tag + attr + link + "></" + tag + ">");
       }
  }
});
