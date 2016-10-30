/**
 * 初始加载
 */
$(function(){
	initActions();
	createDg();
});
/**
 * 变量区
 */
var dgList; // 列表
var dForm;// 对话框
var userTypeArray = new DataDictionary(DICTIONARY_FIELD.USER_TYPE);
/**
 * 初始化绑定事件
 */
function initActions(){
	$('#searchFrom_find').on('click',function(){find();});
	$('#searchFrom_reset').on('click',function(){reset();});
	$('.add').on('click',function(){add();});
	$('.edit').on('click',function(){edit();});
	$('.remove').on('click',function(){remove();});
	$('.import').on('click',function(){importFile();});
	userTypeArray.getFields();
}
/**
 * 查询
 */
function find(){
	var obj=$("#searchFrom").serializeObject();
	dgList.datagrid('load',obj); 
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
function createDg(){
	dgList=$('#dg').datagrid({    
	method: "post",url:ctx+'/ucsUser/find', idField : 'id',singleSelect:true,
    fit : true,fitColumns : true,
    border : false,striped:true,
	pagination:true,rownumbers:true,pageNumber:1,pageSize : 20,pageList : [ 20, 30, 50 ],
    columns:[[    
        {field:'id',title:'id',hidden:true},    
        {field:'username',title:'用户帐号',sortable:true,width:100},    
        {field:'name',title:'用户实名',sortable:true,width:100},
        {field:'email',title:'email',sortable:true,width:100},
        {field:'phone',title:'联系电话',sortable:true,width:100,formatter:DzmFrame.EasyUI.fmtMobile},
        {field:'userType',title:'用户类型',sortable:true,width:100,formatter:fmtUserType}
    ]],
    sortName:'username',sortOrder:'asc',
    enableHeaderClickMenu: false,
    enableHeaderContextMenu: false,
    toolbar:'#tb'
	});
}
function fmtUserType(val){
	return userTypeArray.showDisplayArray(val);
}
/**
 * 导入用户
 */
function importFile(){
	dForm=$('#dlg').dialog({title:'导入用户',width: 380, height: 120,modal:true
		,href:ctx+'/ucsUser/import',
		buttons:[
			{text:'提交',handler:function(){submitFile();}}
			,{text:'返回',handler:function(){dForm.panel('close');}}
		]
	});
}
/**
 * 新增用户
 */
function add(){
	dForm=$('#dlg').dialog({title:'新增用户',width: 380, height: 380, modal:true
		,href:ctx+'/ucsUser/add',
		buttons:[
			{text:'提交',handler:function(){submit();}}
			,{text:'返回',handler:function(){dForm.panel('close');}}
		]
	});
}
/**
 * 编辑用户
 */
function edit(){
	var row = dgList.datagrid('getSelected');
	if(rowIsNull(row)) return;
	dForm=$('#dlg').dialog({title:'编辑用户',width: 380, height: 380, modal:true
		,href:ctx+'/ucsUser/edit/'+row.id,
		buttons:[
			{text:'提交',handler:function(){submit();}}
			,{text:'返回',handler:function(){dForm.panel('close');}}
		]
	});
}
/**
 * 删除用户
 */
function remove(){
	var row = dgList.datagrid('getSelected');
	if(rowIsNull(row)) return;
	parent.$.messager.confirm('提示', '删除后无法恢复您确定要删除？', function(data){
		if (data){
			$.ajax({
				type:'get',
				url:ctx+"/ucsUser/remove/"+row.id,
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
function submitFile(){
	$('#fileForm').form('submit',{
		onSubmit:function(){
			var isValid = $(this).form('enableValidation').form('validate');
			return isValid;	// 返回false终止表单提交
		},
		success:function(result){
			var data = $.parseJSON(result);
			if (data.success){
				$.messager.alert('系统提示',data.msg,'info',function(){
					dForm.panel('close');
					find();
				});
			} else{
				$.messager.alert('系统提示',data.msg,'error');
			}
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
			if (isValid){
				var pwd = $('#plainPassword').val();
				if (pwd){
					var md5Pass = hex_md5(hex_md5(pwd));
					$("#plainPassword").textbox('setValue',md5Pass);
				}
			}
			return isValid;
		},
		success:function(result){
			var data = $.parseJSON(result);
			if (data.success){
				$.messager.alert('系统提示',data.msg,'info',function(){
					dForm.panel('close');
					find();
				});
			} else{
				$.messager.alert('系统提示',data.msg,'error');
			}
		}
	});
}
