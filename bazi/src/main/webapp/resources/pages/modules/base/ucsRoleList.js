/**
 * 初始加载
 */
$(function(){
	initActions();
	createRoleDg();
});
/**
 * 变量区
 */
var roleList; // 角色列表
var domainList;// 系统列表
var permissionList;// 权限列表
var userList;// 用户列表
var roleForm;// 对话框
var domainDialog;// 系统对话框
var userDialog;
var curRole;
var curDomain;
var statusArray = new DataDictionary(DICTIONARY_FIELD.STATUS); 
/**
 * 初始化绑定事件
 */
function initActions(){
	$('#searchFrom_find').on('click',function(){find();});
	$('#searchFrom_reset').on('click',function(){reset();});
	$('.add').linkbutton({'onClick':function(){add();}});
	$('.edit').linkbutton({'onClick':function(){edit();}});
	$('.remove').linkbutton({'onClick':function(){remove();}});
	$('.addDomain').linkbutton({'onClick':function(){addDomain();}});
	$('.removeDomain').linkbutton({'onClick':function(){removeDomain();}});
	$('.savePermission').linkbutton({'onClick':function(){savePermission();}});
	$('.addUser').linkbutton({'onClick':function(){addUser();}});
	$('.removeUser').linkbutton({'onClick':function(){removeUser();}});
	$('#tt').tabs({onSelect:function(title,index){
		if (index == 1){
			// 分配用户
			if ($.isEmptyObject(userList)){
				createUserDg(curRole);
			} else{
				userList.datagrid('reload',{roleId:curRole}); 
			}
		}
	}});
	statusArray.getFields();
}
/**
 * 查询
 */
function find(){
	var obj=$("#searchFrom").serializeObject();
	roleList.datagrid('load',obj); 
}
/**
 * 重置
 */
function reset(){
	$('#searchFrom').form('clear');
	find();
}
/*
 * 创建表格
 */
function createRoleDg(){
	roleList=$('#roleDg').datagrid({    
	method: "post",url:ctx+'/ucsRole/find', idField : 'id',singleSelect:true,
    fit : true,
    fitColumns : true,border : false,striped:true,
	pagination:true,rownumbers:true,pageNumber:1,pageSize : 20,pageList : [ 20, 30, 50 ],
    columns:[[    
    	    	    		    			{field:'id',title:'ID',hidden:true}
    		    	    		    			,{field:'name',title:'角色名称',sortable:true,width:100}
    		    	    		    			,{field:'status',title:'状态',sortable:true,width:100,formatter:fmtStatus}
    		    	    		    			,{field:'description',title:'描述',sortable:true,width:100}
    		    	    		    			
    		    	    ]],
    sortName:'name',sortOrder:'asc',
    enableHeaderClickMenu: false,
    enableHeaderContextMenu: false,
    toolbar:'#tb',
    onDblClickRow:function(index,row){
    	curRole = row.id
    	setTabTitle(row.name);
    	domainList.datagrid('reload',{roleId:curRole}); 
    },
    onLoadSuccess:function(data){
    	if (data && data.total>0){
    		// 加载第一个角色 对应的 系统权限信息
    		$('#roleDg').datagrid('selectRow',0);
    		var row = $('#roleDg').datagrid('getSelected');
    		curRole = row.id;
    		setTabTitle(row.name);
    		createDomainDg(curRole);
    	}
    }
	});
}
/**
 * 格式化状态
 * @param val
 * @returns
 */
function fmtStatus(val){
	return statusArray.showDisplay(val);
}
/**
 * 设置tab标题
 * @param title
 */
function setTabTitle(title){
	var permissionTab = $('#tt').tabs('getTab',0);
	var userTab = $('#tt').tabs('getTab',1);
	$('#tt').tabs('update',{tab:permissionTab,options:{title:'分配权限('+title+')'}});
	$('#tt').tabs('update',{tab:userTab,options:{title:'分配用户('+title+')'}});
}
/**
 * 创建系统列表
 */
function createDomainDg(roleId){
	domainList=$('#domainDg').datagrid({    
		method: "get",url:ctx+'/ucsDomain/getDomainsByRole',queryParams:{roleId:roleId}, idField : 'id',singleSelect:true,
	    fit : true,
	    fitColumns : true,border : false,striped:true,
		pagination:true,rownumbers:true,pageNumber:1,pageSize : 20,pageList : [ 20, 30, 50 ],toolbar:'#domainDg_tb',
	    columns:[[    
	        {field:'id',title:'系统编码',width:30},    
	        {field:'name',title:'系统名称',sortable:false,width:100}
	    ]],
	    sortName:'name',sortOrder:'asc',
	    enableHeaderClickMenu: false,
        enableHeaderContextMenu: false,
	    onDblClickRow:function(index,row){
	    	curDomain = row.id;
	    	permissionList.treegrid('unselectAll').treegrid("uncheckAll");
	    	permissionList.treegrid('load',{domain:curDomain,roleId:curRole}); 
	    },
	    onLoadSuccess:function(data){
	    	if (data && data.total>0){
	    		// 加载第一角色对应第一个系统的 权限信息
	    		$('#domainDg').datagrid('selectRow',0);
	    		var row = $('#domainDg').datagrid('getSelected');
	    		curDomain = row.id;
	    		createPermissionDg(curDomain);
	    	} else{
	    		createPermissionDg(-1);
	    	}
	    }
	});
}
/**
 * 创建用户列表
 */
function createUserDg(roleId){
	userList=$('#userDg').datagrid({    
		method: "get",url:ctx+'/ucsUser/selectByRole',queryParams:{roleId:roleId}, idField : 'id',singleSelect:true,
	    fit : true,fitColumns : true,border : false,striped:true,
		pagination:true,rownumbers:true,pageNumber:1,pageSize : 20,pageList : [ 20, 30, 50 ],toolbar:'#userDg_tb',
	    columns:[[    
	        {field:'id',title:'id',hidden:true},    
        {field:'username',title:'用户帐号',sortable:true,width:100},    
        {field:'name',title:'用户实名',sortable:true,width:100}
	    ]],
	    sortName:'username',sortOrder:'asc'
	});
}
function addUser(){
	userDialog=$('#dlg').dialog({title:'新增用户',width: 380, height: 500, modal:true
		,href:ctx+'/ucsUser/openDialog'
	});
}
function closeUcsUserDg(userId){
	userDialog.panel('close');
	$.ajax({
		type:'post',
		url:ctx+"/ucsUserRole/add",
		data:{roleId:curRole,userId:userId},
		success: function(result){
			if (result.success){
				userList.datagrid('reload',{roleId:curRole}); 
			} else{
				$.messager.alert('系统提示',result.msg,'error');
			}
		}
	});
}
function removeUser(){
	var row = userList.datagrid('getSelected');
	if(rowIsNull(row)) return;
	parent.$.messager.confirm('系统提示', '删除后无法恢复,您确定要删除？', function(data){
		if (data){
			$.ajax({
				type:'get',
				url:ctx+"/ucsUserRole/remove/"+curRole+"/"+row.id,
				success: function(data){
					if (data.success){
						$.messager.alert('系统提示',data.msg,'info',function(){
							userList.datagrid('reload',{roleId:curRole}); 
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
 * 保存赋予角色的权限清单
 */
function savePermission(){
	var row = domainList.datagrid('getSelected');
	if(rowIsNull(row)) return;
	parent.$.messager.confirm('系统提示', '您确定要保存修改的权限吗？', function(data){
		if (data){
			var newPermissionList=[];
			var data=permissionList.treegrid('getSelections');
			for(var i=0,j=data.length;i<j;i++){
				newPermissionList.push(data[i].id);
			}
			
			if(curRole==null) {
				parent.$.messager.show({ title : "提示",msg: "请选择角色！", position: "bottomRight" });
				return;
			}
			$.messager.progress();
			$.ajax({
				async:false,
				type:'POST',
				data:JSON.stringify(newPermissionList),
				contentType:'application/json;charset=utf-8',
				url:ctx+'/ucsRolePermission/savePermissions/'+curRole+'/'+curDomain,
				success: function(result){
					$.messager.progress('close');
					if (result.success){
						$.messager.alert('系统提示',result.msg,'info');
					} 
				}
			});
		} 
	});
}
/**
 * 选中有权限的记录
 * @param roleId
 * @param domain
 */
function selectPermissions(roleId, domain){
	domain = domain || '-1';
	$.ajax({
		async:false,
		type:'get',
		url:ctx+'/ucsPermission/selectByRole',
		data:{roleId:roleId,domain:domain},
		success: function(data){
			if(typeof data=='object'){
				for(var i=0,j=data.length;i<j;i++){
					permissionList.treegrid('select',data[i]);
				}
			}else{
				$.easyui.messager.alert(data);
			} 
		}
	});
}
/**
 * 创建权限列表
 */
function createPermissionDg(domain){
	permissionList=$('#permissionDg').treegrid({    
		method: "get",url:ctx+'/ucsPermission/selectByDomain',queryParams:{domain:domain}, idField : 'id',treeField:'name',parentField : 'pid',dataPlain:true,singleSelect:false,fit : true,fitColumns : true,border : false,striped:true,
		rownumbers:true,toolbar:'#permissionDg_tb',
		onClickRow:function(row){  
            //级联选择  
            $(this).treegrid('cascadeCheck',{  
                id:row.id, //节点ID  
                deepCascade:true //深度级联  
            });  
        },
	    columns:[[    
	        {field:'id',title:'id',hidden:true}
	        ,{field:'pid',title:'pid',hidden:true}
	        ,{field:'name',title:'权限名称',sortable:true,width:100}
	        ,{field:'url',title:'url',sortable:true,width:100}
	        ,{field:'sort',title:'排序',sortable:true,width:100}
	        ,{field:'domain',title:'系统编码',sortable:true,width:100}
	    ]],
	    onLoadSuccess:function(data){
	    	permissionList.treegrid('unselectAll').treegrid("uncheckAll");
	    	selectPermissions(curRole,curDomain);
	    }
	});
}
/**
 * 新增系统权限
 */
function addDomain(){
	domainDialog=$('#dlg').dialog({title:'新增系统权限',width: 380, height: 500, modal:true
		,href:ctx+'/ucsDomain/addDomain'
	});
}
/**
 * 关闭新增权限对话框
 */
function closeDomainDialog(domain){
	domainDialog.panel('close');
	$.ajax({
		type:'post',
		url:ctx+"/ucsRoleDomain/addDomain",
		data:{roleId:curRole,domainId:domain},
		success: function(result){
			if (result.success){
				domainList.datagrid('reload',{roleId:curRole}); 
			} else{
				$.messager.alert('系统提示',result.msg,'error');
			}
		}
	});
}
/**
 * 删除系统权限
 */
function removeDomain(){
	var row = domainList.datagrid('getSelected');
	if(rowIsNull(row)) return;
	parent.$.messager.confirm('系统提示', '删除后无法恢复,您确定要删除？', function(data){
		if (data){
			$.ajax({
				type:'get',
				url:ctx+"/ucsRoleDomain/removeDomain/"+curRole+"/"+row.id,
				success: function(data){
					if (data.success){
						$.messager.alert('系统提示',data.msg,'info',function(){
							domainList.datagrid('reload',{roleId:curRole}); 
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
 * 新增用户
 */
function add(){
	roleForm=$('#dlg').dialog({title:'新增角色',width: 380, height: 250, modal:true
		,href:ctx+'/ucsRole/add',
		buttons:[
			{text:'提交',handler:function(){submit();}}
			,{text:'返回',handler:function(){roleForm.panel('close');}}
		]
	});
}
/**
 * 编辑
 */
function edit(){
	var row = roleList.datagrid('getSelected');
	if(rowIsNull(row)) return;
	roleForm=$('#dlg').dialog({title:'编辑角色',width: 380, height: 250, modal:true
		,href:ctx+'/ucsRole/edit/'+row.id,
		buttons:[
			{text:'提交',handler:function(){submit();}}
			,{text:'返回',handler:function(){roleForm.panel('close');}}
		]
	});
}
/**
 * 删除
 */
function remove(){
	var row = roleList.datagrid('getSelected');
	if(rowIsNull(row)) return;
	parent.$.messager.confirm('提示', '删除后无法恢复您确定要删除？', function(data){
		if (data){
			$.ajax({
				type:'get',
				url:ctx+"/ucsRole/remove/"+row.id,
				success: function(data){
					if (data.success){
						$.messager.alert('系统提示',data.msg,'info',function(){
							find();
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
 * 提交
 */
function submit(){
	$('#mainform').form('submit',{
		onSubmit:function(){
			var isValid = $(this).form('enableValidation').form('validate');
			return isValid;	// 返回false终止表单提交
		},
		success:function(result){
			var data = $.parseJSON(result);
			if (data.success){
				$.messager.alert('系统提示',data.msg,'info',function(){
					roleForm.panel('close');
					find();
				});
			} else{
				$.messager.alert('系统提示',data.msg,'error');
			}
		}
	});
}
