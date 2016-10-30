/**
 * 初始加载
 */
$(function(){
	getMenus();
});
/**
 * 变量区
 */
var dForm;// 对话框
/**
 * 打开修改密码页面
 */
function updatePwd(){
	dForm=$('#dlg').dialog({title:'修改密码',width: 380, height: 220,modal:true
		,href:ctx+'/ucsUser/updatePwd',
		buttons:[
			{text:'提交',handler:function(){updatePwdSubmit();}}
			,{text:'返回',handler:function(){dForm.panel('close');}}
		]
	});
}
/**
 * 提交
 */
function updatePwdSubmit(){
	$('#updatePwdform').form('submit',{
		onSubmit:function(){
			var isValid = $(this).form('enableValidation').form('validate');
			if (isValid){
				var pwd = $('#plainPassword').val();
				if (pwd){
					var md5Pass = hex_md5(hex_md5(pwd));
					$("#plainPassword").textbox('setValue',md5Pass);
				}
			}
			return isValid;	// 返回false终止表单提交
		},
		success:function(result){
			var data = $.parseJSON(result);
			if (data.success){
				$.messager.alert('系统提示',data.msg,'info',function(){
					dForm.panel('close');
				});
			} else{
				$.messager.alert('系统提示',data.msg,'error');
			}
		}
	});
}
/**
 * 获取菜单信息
 */
function getMenus(){
	$.ajax({
		async:false,
		type:'get',
		url:ctx+"/ucsPermission/getMenus",
		success: function(data){
			var menuData={data:data};
			var html = template('menu', menuData);
			$('#myMenu').html(html); 
			$.parser.parse($('#myMenu').parent());
			$('#myMenu').accordion({border:false,fit:true});
		}
	});
}
/**
 * 退出登录
 */
function logout(){
	 $.messager.confirm("操作提醒", "您确定要退出当前程序并关闭该网页？", function (c) {
         if (c) {
             window.onbeforeunload = null;
             location.href= ctx+ '/logout';
         }
     });
}
/**
 * 新增页签
 * @param title
 * @param url
 * @param icon
 */
function addTab(title,url,icon){
	var tt = $('#mainTabs');
	if (tt.tabs('exists', title)){
		tt.tabs('select',title);
		refreshTab({tabTitle:title,url:url});
	} else{
		if (url){
			var content = '<iframe scrolling="auto" frameborder="0"  src="'+url+'" style="width:100%;height:100%;"></iframe>';
		} else{
			var content = '待开发';  
		}
		tt.tabs('add',{
			title:title,
			closable:true,
			content:content,
			iconCls:icon||'icon-default' 
		});
		$('#mainTabs').tabs('getSelected').css('overflow', 'hidden'); 
	}
}
/**
 * 刷新页签
 * @param cfg
 */
function refreshTab(cfg){
	var refresh_tab = cfg.tabTitle?$('#mainTabs').tabs('getTab',cfg.tabTitle):$('#mainTabs').tabs('getSelected');  
    if(refresh_tab && refresh_tab.find('iframe').length > 0){  
    	var _refresh_ifram = refresh_tab.find('iframe')[0];  
    	var refresh_url = cfg.url?cfg.url:_refresh_ifram.src;  
    	_refresh_ifram.contentWindow.location.href=refresh_url; 
    }
}