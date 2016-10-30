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
	<div data-options="region:'west',split:true,title:'角色列表'" style="width:320px;">
		<div id="tb" style="padding:5px;height:auto">
	        <div>
	        	<form id="searchFrom" action="">
					<input type="text" name="filter_likes_name" class="easyui-textbox" data-options="width:150,prompt: '角色名称'"/>
					<a href="#" class="easyui-linkbutton" iconCls="icon-search" plain="true" id="searchFrom_find">查询</a>
					<a href="#" class="easyui-linkbutton" iconCls="icon-reload" plain="true" id="searchFrom_reset">重置</a>
				</form>
				<table cellpadding="0" cellspacing="0">
					<tr>
						<shiro:hasPermission name="ucsRole:add">
							<td>
							<a href="javascript:void(0)" class="easyui-linkbutton add" iconCls="icon-add" plain="true">新增</a>
							</td>
							<td>
		       				<span class="toolbar-item dialog-tool-separator"></span>
		       				</td>
		       			</shiro:hasPermission>
		       			<shiro:hasPermission name="ucsRole:edit">
		       				<td>
							<a href="javascript:void(0)" class="easyui-linkbutton edit" iconCls="icon-edit" plain="true">编辑</a>
							</td>
							<td>
		       				<span class="toolbar-item dialog-tool-separator"></span>
		       				</td>
		       			</shiro:hasPermission>
		       			<shiro:hasPermission name="ucsRole:remove">
		       				<td>
							<a href="javascript:void(0)" class="easyui-linkbutton remove" iconCls="icon-remove" plain="true">删除</a>
							</td>
		       			</shiro:hasPermission>
					</tr>
				</table>
	        </div> 
  		</div>
		<table id="roleDg"></table> 
	</div>
	<div id="tt" data-options="region:'center'" class="easyui-tabs">
		<div class="easyui-layout" data-options="title:'分配权限',fit:true">
			<div data-options="region:'west',split:true,title:'系统列表',width:320" >
				<div id="domainDg_tb" style="padding:5px;height:auto">
				    <table cellpadding="0" cellspacing="0">
				    	<tr>
				    	<shiro:hasPermission name="ucsRole:ucsDomain:add">
				    	<td>
				    	<a href="#" class="easyui-linkbutton addDomain" plain="true" iconCls="icon-add">新增</a>
				    	</td>
				    	<td>
				    	<span class="toolbar-item dialog-tool-separator"></span>
				    	</td>
				    	</shiro:hasPermission>
				        <shiro:hasPermission name="ucsRole:ucsDomain:remove">
				        <td>
				        <a href="#" class="easyui-linkbutton removeDomain" plain="true" iconCls="icon-remove" >删除</a>
				        </td>
				        </shiro:hasPermission>
				        </tr>
				    </table>
				</div>
				<table id="domainDg"></table>
			</div>
			<div data-options="region:'center',title:'权限列表'">
				<div id="permissionDg_tb" style="padding:5px;height:auto">
				    <table cellpadding="0" cellspacing="0">
				    	<tr>
				    	<shiro:hasRole name="00000000000000000000000000000000">
				    	<td>
				    	<a href="#" class="easyui-linkbutton savePermission" plain="true" iconCls="icon-save">保存</a>
				    	</td>
				        </shiro:hasRole>
				        </tr>
				    </table>
				</div>
				<table id="permissionDg"></table>
			</div>	
		</div>
		<div data-options="title:'分配用户'">
			<div id="userDg_tb" style="padding:5px;height:auto">
				    <table cellpadding="0" cellspacing="0">
				    	<tr>
				    	<shiro:hasPermission name="ucsUserRole:add">
				    	<td>
				    	<a href="#" class="easyui-linkbutton addUser" plain="true" iconCls="icon-add">新增</a>
				    	</td>
				    	<td>
				    	<span class="toolbar-item dialog-tool-separator"></span>
				    	</td>
				    	</shiro:hasPermission>
				        <shiro:hasPermission name="ucsUserRole:remove">
				        <td>
				        <a href="#" class="easyui-linkbutton removeUser" plain="true" iconCls="icon-remove" >删除</a>
				        </td>
				        </shiro:hasPermission>
				        </tr>
				    </table>
				</div>
			<table id="userDg"></table>
		</div>
	</div>
<div id="dlg"></div>  
<script src="${ctxResources}/pages/modules/base/ucsRoleList.js"></script>
</body>
</html>