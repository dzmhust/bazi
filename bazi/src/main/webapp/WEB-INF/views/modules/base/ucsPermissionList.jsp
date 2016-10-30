<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title></title>
<%@ include file="/WEB-INF/views/include/meta.jsp"%>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<%@ include file="/WEB-INF/views/include/easyui.jsp"%>
</head>
<body class="easyui-layout">
	<div data-options="region:'west',split:true,title:'系统列表'" style="width:320px;">
		<table id="domainDg"></table>
	</div>
	<div data-options="region:'center', title:'权限列表'" id="permissionListPanel">
		<shiro:hasRole name="00000000000000000000000000000000">
		<div id="permissionDg_tb" style="padding:5px;height:auto">
		    <table cellpadding="0" cellspacing="0">
		    	<tr>
		    	<shiro:hasPermission name="ucsPermission:add">
		    	<td>
		    	<a href="#" class="easyui-linkbutton add" plain="true" iconCls="icon-add">新增</a>
		    	</td>
		    	<td>
		    	<span class="toolbar-item dialog-tool-separator"></span>
		    	</td>
		    	</shiro:hasPermission>
		        <shiro:hasPermission name="ucsPermission:edit">
		        <td>
		        <a href="#" class="easyui-linkbutton edit" plain="true" iconCls="icon-edit" >编辑</a>
		        </td>
		        <td>
		        <span class="toolbar-item dialog-tool-separator"></span>
		        </td>
		        </shiro:hasPermission>
		        <shiro:hasPermission name="ucsPermission:remove">
		        <td>
		        <a href="#" class="easyui-linkbutton remove" plain="true" iconCls="icon-remove" >删除</a>
		        </td>
		        </shiro:hasPermission>
		        </tr>
		    </table>
		</div>
		</shiro:hasRole>
		<table id="permissionDg"></table>
	</div>
	<div id="dlg"></div>
<script src="${ctxResources}/pages/modules/base/ucsPermissionList.js"></script>
</body>
</html>