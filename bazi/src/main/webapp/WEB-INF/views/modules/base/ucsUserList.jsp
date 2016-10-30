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
       	        <input type="text" name="filter_likes_username" class="easyui-textbox" data-options="width:150,prompt: '用户帐号'"/>
				<input type="text" name="filter_likes_name" class="easyui-textbox" data-options="width:150,prompt: '用户实名'"/>
				<shiro:hasPermission name="ucsUser:find">
				<a href="#" class="easyui-linkbutton" iconCls="icon-search" plain="true" id="searchFrom_find">查询</a>
				<a href="#" class="easyui-linkbutton" iconCls="icon-reload" plain="true" id="searchFrom_reset">重置</a>
				</shiro:hasPermission>
			</form>
			<table cellpadding="0" cellspacing="0">
				<tr>
					<shiro:hasPermission name="ucsUser:add">
						<td>
						<a href="javascript:void(0)" class="easyui-linkbutton add" iconCls="icon-add" plain="true">新增</a>
						</td>
						<td>
	       				<span class="toolbar-item dialog-tool-separator"></span>
	       				</td>
	       			</shiro:hasPermission>
	       			<shiro:hasPermission name="ucsUser:edit">
	       				<td>
						<a href="javascript:void(0)" class="easyui-linkbutton edit" iconCls="icon-edit" plain="true">编辑</a>
						</td>
						<td>
	       				<span class="toolbar-item dialog-tool-separator"></span>
	       				</td>
	       			</shiro:hasPermission>
	       			<shiro:hasPermission name="ucsUser:remove">
	       				<td>
						<a href="javascript:void(0)" class="easyui-linkbutton remove" iconCls="icon-remove" plain="true">删除</a>
						</td>
						<td>
	       				<span class="toolbar-item dialog-tool-separator"></span>
	       				</td>
	       			</shiro:hasPermission>
	       			<shiro:hasPermission name="ucsUser:import">
	       				<td>
						<a href="javascript:void(0)" class="easyui-linkbutton import" iconCls="icon-import" plain="true">导入</a>
						</td>
	       			</shiro:hasPermission>
				</tr>
			</table>
	       	
        </div> 
        
  </div>
<table id="dg"></table> 
<div id="dlg"></div>  
<script src="${ctxResources}/pages/modules/base/ucsUserList.js"></script>
</body>
</html>