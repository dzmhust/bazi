$(function(){
	initActions();
	createDomainDg();
});
var ucsDomainDialogList;
/**
 * 初始化绑定事件
 */
function initActions(){
	$('#ucsDomainDialog_find').on('click',function(){find();});
	$('#ucsDomainDialog_reset').on('click',function(){reset();});
}
/**
 * 查询
 */
function find(){
	var obj=$("#ucsDomainDialog_searchFrom").serializeObject();
	ucsDomainDialogList.datagrid('load',obj); 
}
/**
 * 重置
 */
function reset(){
	$('#ucsDomainDialog_searchFrom').form('clear');
	find();
}
/**
 * 创建系统表格
 */
function createDomainDg(){
	$('#ucsDomainDialog_dg').datagrid({    
		method: "post",url:ctx+'/ucsDomain/find', idField : 'id',singleSelect:true,
	    fit : true,
	    fitColumns : true,border : false,striped:true,
		pagination:true,rownumbers:true,pageNumber:1,pageSize : 20,pageList : [ 20, 30, 50 ],toolbar:'#ucsDomainDialog_tb',
	    columns:[[    
	        {field:'id',title:'系统编码',width:30},    
	        {field:'name',title:'系统名称',sortable:false,width:100}
	    ]],
	    onDblClickRow:function(index,row){
	    	window.closeDomainDialog(row.id);
	    }
	});
}
