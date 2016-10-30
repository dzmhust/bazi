/**
 * 数据字典中的类型
 */
var DzmFrame = function(){
	/**
	 * 文件处理
	 */
	var File = function(){
		var file = {};
		/**
		 * 图片预览
		 */
		file.previewImage = function(file){
			var browserVersion = window.navigator.userAgent.toUpperCase();
	      var MAXWIDTH  = file.parentNode.children[0].children[0].offsetWidth; 
	      var MAXHEIGHT = file.parentNode.children[0].children[0].offsetHeight;
	      var div = file.parentNode.children[0];
	      if (file.files && file.files[0])
	      {
	          div.innerHTML ='<img class=imghead>';
	          var img = div.children[0];
			  
	          img.onload = function(){
	            img.width  =  MAXWIDTH;
	            img.height =  MAXHEIGHT;
	          }
	          var reader = new FileReader();
	          reader.onload = function(evt){img.src = evt.target.result;}
	          reader.readAsDataURL(file.files[0]);
	      }
	      else //兼容IE   IE是用了滤镜
	      {
	        var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
	        file.select();
	        if (browserVersion.indexOf("MSIE 9") > -1) {
	            file.blur(); //不加上document.selection.createRange().text在ie9会拒绝访问
	         }
	        var src = document.selection.createRange().text;
	        
	        if (browserVersion.indexOf("MSIE 9") > -1 && src.indexOf("'") > -1) {
	       		alert("上传文件的路径不能包含特殊字符如：'，\n请修改文件路径后重新上传。");
				file = $(file);
				file.after(file.clone(true).val(""));
				file.remove();
	       		return
	       	} 
	        div.innerHTML ='<img class=imghead>';
	        var img = div.children[0];
	        img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
	        div.innerHTML = "<div style='width:"+MAXWIDTH+"px;height:"+MAXHEIGHT+"px;"+sFilter+src+"\"'></div>";
	      }
		}
		//
		return file;
	}();
	/**
	 * EasyUI框架使用工具类
	 */
	var EasyUI = function(){
		var easyui = {};
		var _dataGridLoadFilter = function(data,row,pre){
			 if(pre)  
		            pre = pre+".";  
		     for (var att in data) {  
		           var r = data[att];  
		           if(typeof(r) == "object"){  
		        	   _dataGridLoadFilter(r,row,pre+att);  
		           }else{  
		                        row[pre+att] = r;                    
		                    }  
		          
		       } 
		}
		easyui.dataGridLoadFilter = function(data){
			var value = {total:data.total,rows:[]};
			if (!$.isEmptyObject(data.rows) && $.isArray(data.rows)){
				for (var i=0; i<data.rows.length; i++){
					var row = {};
					_dataGridLoadFilter(data.rows[i],row,"");
					value.rows.push(row);
				}
			}
			return value;
		}
		easyui.lazyTreeLoadFilter = function(data,parent){
			var state = $.data(this, 'tree');
			function setData(){
				var serno = 1;
                var todo = [];
                for(var i=0; i<data.length; i++){
                    todo.push(data[i]);
                }
                while(todo.length){
                    var node = todo.shift();
                    if (node.id == undefined){
                        node.id = '_node_' + (serno++);
                    }
                    if (node.children){
                        node.state = 'closed';
                        node.children1 = node.children;
                        node.children = undefined;
                        todo = todo.concat(node.children1);
                    }
                }
                state.tdata = data;
			}
			function find(id){
				var data = state.tdata;
                var cc = [data];
                while(cc.length){
                    var c = cc.shift();
                    for(var i=0; i<c.length; i++){
                        var node = c[i];
                        if (node.id == id){
                            return node;
                        } else if (node.children1){
                            cc.push(node.children1);
                        }
                    }
                }
                return null;
			}
			setData();
			var t = $(this);
			opts.onBeforeExpand = function(node){
                var n = find(node.id);
                if (n.children && n.children.length){return}
                if (n.children1){
                    var filter = opts.loadFilter;
                    opts.loadFilter = function(data){return data;};
                    t.tree('append',{
                        parent:node.target,
                        data:n.children1
                    });
                    opts.loadFilter = filter;
                    n.children = n.children1;
                }
            };
            return data;
		}
		/**
		 * 列表格式化图片显示
		 */
		easyui.fmtImage = function(val){
			if (!$.isEmptyObject(val)){
				var abbr = '<img src="' + ctx + '/upload/'+val + '" width="25" height="25" />';
				return abbr;
			}
			return '';
		}
		/**
		 * 列表格式化日期
		 */
		easyui.fmtYyyyMMdd= function(val){
			if ($.isEmptyObject(val)){
				return '';
			}
			return $.date.format(val,'yyyy-MM-dd');
		}
		var _abbr = function(val,begin,end){
			if ($.isEmptyObject(val)){
				return '';
			}
			var diff = end - begin;
			var star = "";
			for (var i=0; i<diff; i++){
				star = star + "*";
			}
			val = val.replace(val.substring(begin,end),star);
			return val;
		}
		/**
		 * 列表格式化身份证号
		 */
		easyui.fmtIdCard=function(val){
			return _abbr(val,10,14);			
		}
		/**
		 * 列表格式化手机号
		 */
		easyui.fmtMobile = function(val){
			return _abbr(val,3,7);
		}
		return easyui;
	}();
	//
	var dzmFrame = {};
	dzmFrame.File = File;
	dzmFrame.EasyUI = EasyUI;
	return dzmFrame;
}();
/**
 * 全局的AJAX访问，处理AJAX清求时SESSION超时
 */
$(document).ajaxComplete( function(event, jqXHR, options){
	var status=jqXHR.status; 
	if (status == HTTP_STATUS.SC_UNAUTHORIZED){
		$.messager.progress('close');
		$.messager.alert('',"会话超时，请重新登录",'error',function(){
    		window.top.location.href= ctx + '/login';
		});
	} else if (status == HTTP_STATUS.ERR_CONNECTION_REFUSED){
		$.messager.progress('close');
		$.messager.alert('系统提示',"与服务器断开了连接");
	}
});