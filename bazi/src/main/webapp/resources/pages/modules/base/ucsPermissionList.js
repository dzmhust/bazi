/**
 * 初始加载
 */
$(function(){
	initActions();
	createDomainDg();
});
/**
 * 变量区
 */
var permissionList; // 列表
var permissionForm;// 对话框
var curDomain;// 当前domain
function initActions(){
	$('.add').on('click',function(){add();});
	$('.edit').on('click',function(){edit();});
	$('.remove').on('click',function(){remove();});
}
function reloadPermission(){
	permissionList.treegrid('reload');
}
/**
 * 新增权限
 */
function add(){
	var href = ctx+'/ucsPermission/add';
	if (!$.isEmptyObject(curDomain)){
		href += '/'+curDomain;
	}
	permissionForm=$('#dlg').dialog({title:'新增权限',width: 380, height: 420, modal:true
		,href:href,
		buttons:[
			{text:'提交',handler:function(){submit();}}
			,{text:'返回',handler:function(){permissionForm.panel('close');}}
		]
	});
}
/**
 * 编辑权限
 */
function edit(){
	var row = permissionList.treegrid('getSelected');
	if(rowIsNull(row)) return;
	permissionForm=$('#dlg').dialog({title:'编辑权限',width: 380, height: 420, modal:true
		,href:ctx+'/ucsPermission/edit/'+row.id,
		buttons:[
			{text:'提交',handler:function(){submit();}}
			,{text:'返回',handler:function(){permissionForm.panel('close');}}
		]
	});
}
/**
 * 删除权限
 */
function remove(){
	var row = permissionList.treegrid('getSelected');
	if(rowIsNull(row)) return;
	parent.$.messager.confirm('提示', '删除后无法恢复您确定要删除？', function(data){
		if (data){
			$.ajax({
				type:'get',
				url:ctx+"/ucsPermission/remove/"+row.id,
				success: function(data){
					if (data.success){
						$.messager.alert('系统提示',data.msg,'info',function(){
							reloadPermission();
						});
					} else{
						$.messager.alert('系统提示',data.msg,'error');
					}
				}
			});
		} 
	});
}
/**
 * 创建接入系统
 */
function createDomainDg(){
	$('#domainDg').datagrid({    
		method: "post",url:ctx+'/ucsDomain/find', idField : 'id',singleSelect:true,
	    fit : true,
	    fitColumns : true,border : false,striped:true,
		pagination:true,rownumbers:true,pageNumber:1,pageSize : 20,pageList : [ 20, 30, 50 ],
		sortName:'id',sortOrder:'asc',
		enableHeaderClickMenu: false,
	    enableHeaderContextMenu: false,
	    columns:[[    
	        {field:'id',title:'系统编码',sortable:true,width:50},    
	        {field:'name',title:'系统名称',sortable:false,width:80}
	    ]],
	    onDblClickRow:function(index,row){
	    	curDomain = row.id;
	    	permissionList.treegrid('reload',{filter_EQS_domain:curDomain}); 
	    	$('#permissionListPanel').panel({title:row.name});
	    },
	    onLoadSuccess:function(data){
	    	if (data && data.total>0){
	    		// 默认选中第一行
	    		$('#domainDg').datagrid('selectRow',0);
	    		var row = $('#domainDg').datagrid('getSelected');
	    		curDomain = row.id;
	    		createPermissionDg(curDomain);
	    		$('#permissionListPanel').panel({title:row.name});
	    	}
	    }
	});
}
/**
 * 创建权限列表
 */
function createPermissionDg(domain){
	permissionList=$('#permissionDg').treegrid({    
		method: "post",url:ctx+'/ucsPermission/find',queryParams:{filter_EQS_domain:domain}, idField : 'id',treeField:'name',parentField : 'pid',dataPlain:true,singleSelect:true,fit : true,fitColumns : true,border : false,striped:true,
		rownumbers:true,toolbar:'#permissionDg_tb',
		sortName:'name',sortOrder:'asc',
		enableHeaderClickMenu: false,
	    enableHeaderContextMenu: false,
	    columns:[[    
	        {field:'id',title:'id',hidden:true}
	        ,{field:'pid',title:'pid',hidden:true}
	        ,{field:'name',title:'权限名称',sortable:true,width:100}
	        ,{field:'url',title:'url',sortable:true,width:100}
	        ,{field:'sort',title:'排序',sortable:true,width:100}
	        ,{field:'domain',title:'系统编码',sortable:true,width:100}
	    ]]
	});
}
/**
 * 提交
 */
function submit(){
	$('#mainform').form('submit',{
		onSubmit:function(){
			return $(this).form('enableValidation').form('validate');
		},
		success:function(result){
			var data = $.parseJSON(result);
			if (data.success){
				$.messager.alert('系统提示',data.msg,'info',function(){
					permissionForm.panel('close');
					reloadPermission();
				});
			} else{
				$.messager.alert('系统提示',data.msg,'error');
			}
		}
	});
}
