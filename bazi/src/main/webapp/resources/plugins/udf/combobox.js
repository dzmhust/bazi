function inheritPrototype(subType, superType) {
      var prototype = object(superType.prototype);
      prototype.constructor = subType;
      subType.prototype = prototype;
 }
function object(o) {
      function F () {}
      F.prototype = o;
      return new F();
 }
/**
 * combobox下拉添值
 */
var ComboBoxBean = function(url,field,params,method,dataType){
	this.url = url;
	this.params = params;
	this.method = $.isEmptyObject(method)?'GET':method;
	this.dataType = $.isEmptyObject(dataType)?'json':dataType;
	this.data = [];
	this.field = $.isEmptyObject(field)?{valueField:'valueField',textField:'textField'}:field;
}
ComboBoxBean.prototype = {
	constructor: ComboBoxBean,
	getFields:function(){
		var temp = [];
		$.ajax({
    		type : this.method,
    		async: false,
    		url : this.url,
    		data: this.params,
    		dataType : this.dataType,
    		success : function(result){
     			temp = result;
    		}
   		});
   		this.data = temp;
	},
	/**
   * 初始化<select>
   * array fields数组
   * control <select>对象
   */
	initSelect : function(control){
		var field = this.field;
   		$.each(this.data, function(i, data){
    		control.append("<option value='" + data[field.valueField] + "'>" + data[field.textField] + "</option>");
   		});
  	},
  	/**
   * 初始化combobox
   * array fields数组
   * control combobox对象
   */
  	initCombobox: function(control){
   		control.combobox({valueField:this.field.valueField,textField:this.field.textField,editable:false});
   		control.combobox("loadData", this.data);
  	},
  	/**
   * 获取显示值
   * array fields数组
   * val 比较值
   */
  	showDisplay : function(val){
   		var temp = '';
   		var field = this.field;
   		$.each(this.data, function(i, data){
    		if(data[field.valueField] == val){
     			temp = data[field.textField];
     			return false
    		}
   		});
   		return temp;
  	},
  	showDisplayArray:function(val){
  		if ($.string.isNullOrEmpty(val)){
  			return val;
  		}
  		var vals = val.split(',');
  		var temp = '';
   		var field = this.field;
   		for (var i=0; i<vals.length; i++){
   			if (i < (vals.length-1)){
   				temp += this.showDisplay(vals[i]) + ',';
   			} else{
   				temp += this.showDisplay(vals[i]);
   			}
   		}
   		return temp==''?val:temp;
  	}
}
/**
 * 数据字典
 * 使用方法
 * 1.实例化，var statusArray = new DataDictionary(DICTIONARY_FIELD.STATUS);
 * 2.填充数据：statusArray.getFields();
 * 3.填充下拉：statusArray。initSelect($('#fieldSearch'));
 * 4.在列表中显示
 *   columns中{field:'type',title:'类型',sortable:true,width:100,formatter:fmtType}
 *   定义方法：
 *   function fmtStatus(val){
 *	 	return statusArray.showDisplay(val);
 *	 }
 * @param {} type 数据字典类型
 */
var DataDictionary = function(type){
	ComboBoxBean.call(this);
	this.url = ccs_ctx + 'ccs03/' + type;
	this.field = {valueField:'valueField',textField:'textField'};
	
}
inheritPrototype(DataDictionary, ComboBoxBean);
/**
 * 属性为id和name的combox
 */
var ComboBoxIdNameBean = function(url){
	ComboBoxBean.call(this);
	this.url = url;
	this.field = {valueField:'id',textField:'name'};
}
inheritPrototype(ComboBoxIdNameBean, ComboBoxBean);

var DataDictionaryTreeCombobox = function(type,params){
	ComboBoxBean.call(this);
	this.url = ccs_ctx + 'ccs04/' + type;
	this.params = params;
	this.field = {valueField:'id',textField:'name'};
}
inheritPrototype(DataDictionaryTreeCombobox, ComboBoxBean);
/**
 * ComboBoxTree
 */
var ComboBoxTreeBean = function(url,field,params,method,dataType){
	this.url = url;
	this.params = params;
	this.method = $.isEmptyObject(method)?'GET':method;
	this.dataType = $.isEmptyObject(dataType)?'json':dataType;
	this.data = [];
	this.field = $.isEmptyObject(field)?{idField:'id',textField:'name',parentField:'pid'}:field;
}
ComboBoxTreeBean.prototype = {
	constructor: ComboBoxTreeBean,
	getFields:function(){
		var temp = [];
		$.ajax({
    		type : this.method,
    		async: false,
    		url : this.url,
    		data: this.params,
    		dataType : this.dataType,
    		success : function(result){
     			temp = result;
    		}
   		});
   		this.data = temp;
	},
	/**
   * 初始化combobox
   * array fields数组
   * control combobox对象
   */
  	initCombobox: function(control){
   		control.combotree({idField:this.field.idField, textField:this.field.textField, parentField:this.field.parentField,iconCls: 'icon',animate:true});
   		control.combotree("loadData", this.data);
  	}
}
var DataDictionaryTree = function(type,level){
	ComboBoxTreeBean.call(this);
	this.url = ccs_ctx + 'ccs05/' + type;
	if (!$.isEmptyObject(level)){
		this.url = this.url + '/' + level;
	}
	
}
inheritPrototype(DataDictionaryTree, ComboBoxTreeBean);