$(function(){
	initActions();
	createUcsUserDg();
});
var ucsUserDialogList;
/**
 * 初始化绑定事件
 */
function initActions(){
	$('#ucsUserDialog_find').on('click',function(){find();});
	$('#ucsUserDialog_reset').on('click',function(){reset();});
}
/**
 * 查询
 */
function find(){
	var obj=$("#ucsUserDialog_searchFrom").serializeObject();
	ucsUserDialogList.datagrid('load',obj); 
}
/**
 * 重置
 */
function reset(){
	$('#ucsUserDialog_searchFrom').form('clear');
	find();
}
/**
 * 创建系统表格
 */
function createUcsUserDg(){
	$('#ucsUserDialog_dg').datagrid({    
		method: "post",url:ctx+'/ucsUser/find', idField : 'id',singleSelect:true,
	    fit : true,fitColumns : true,border : false,striped:true,
		pagination:true,rownumbers:true,pageNumber:1,pageSize : 20,pageList : [ 20, 30, 50 ],
	    columns:[[    
	            		    		    			{field:'id',title:'ID',hidden:true}
    		    		    		    			,{field:'username',title:'用户账号',sortable:true,width:100}
    		    		    		    			,{field:'name',title:'用户实名',sortable:true,width:100}
    		    		    		    			,{field:'phone',title:'联系电话',sortable:true,width:100}
    		    		    		    			,{field:'email',title:'邮箱',sortable:true,width:100}
    		    			    ]],
	    sortName:'username',sortOrder:'asc',
    	enableHeaderClickMenu: false,
    	enableHeaderContextMenu: false,
    	toolbar:'#ucsUserDialog_tb',
	    onDblClickRow:function(index,row){
	    	window.closeUcsUserDg(row.id);
	    }
	});
}
