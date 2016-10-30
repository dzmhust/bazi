<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title></title>
<%@ include file="/WEB-INF/views/include/meta.jsp"%>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<%@ include file="/WEB-INF/views/include/easyui.jsp"%>
</head>
<body>
<div id="tb" style="padding:5px;height:auto">
        <div>
        	<form id="searchFrom" action="">
				<input type="text" name="filter_likes_userType" id="filter_likes_userType" data-options="width:150,prompt: '用户类型'"/>
				<shiro:hasPermission name="ucsUserTypeRole:find">
				<a href="#" class="easyui-linkbutton" iconCls="icon-search" plain="true" id="searchFrom_find">查询</a>
				<a href="#" class="easyui-linkbutton" iconCls="icon-reload" plain="true" id="searchFrom_reset">重置</a>
				</shiro:hasPermission>
			</form>
			<table cellpadding="0" cellspacing="0">
				<tr>
					<shiro:hasPermission name="ucsUserTypeRole:add">
						<td>
						<a href="javascript:void(0)" class="easyui-linkbutton add" iconCls="icon-add" plain="true">新增</a>
						</td>
						<td>
	       				<span class="toolbar-item dialog-tool-separator"></span>
	       				</td>
	       			</shiro:hasPermission>
	       			<shiro:hasPermission name="ucsUserTypeRole:edit">
	       				<td>
						<a href="javascript:void(0)" class="easyui-linkbutton edit" iconCls="icon-edit" plain="true">编辑</a>
						</td>
						<td>
	       				<span class="toolbar-item dialog-tool-separator"></span>
	       				</td>
	       			</shiro:hasPermission>
	       			<shiro:hasPermission name="ucsUserTypeRole:remove">
	       				<td>
						<a href="javascript:void(0)" class="easyui-linkbutton remove" iconCls="icon-remove" plain="true">删除</a>
						</td>
						<td>
	       				<span class="toolbar-item dialog-tool-separator"></span>
	       				</td>
	       			</shiro:hasPermission>
				</tr>
			</table>
        </div> 
        
  </div>
<table id="dg"></table> 
<div id="dlg"></div>  
<script src="${ctxResources}/pages/modules/base/ucsUserTypeRoleList.js"></script>
</body>
</html>