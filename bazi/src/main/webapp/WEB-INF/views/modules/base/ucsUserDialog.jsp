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
	<div id="ucsUserDialog_tb" style="padding:5px;height:auto">
        <div>
			<form id="ucsUserDialog_searchFrom" action="">
       	        <input type="text" name="filter_likes_username" class="easyui-textbox" data-options="width:150,prompt: '用户账号'"/>
				<a href="#" class="easyui-linkbutton" iconCls="icon-search" plain="true" id="ucsUserDialog_find">查询</a>
				<a href="#" class="easyui-linkbutton" iconCls="icon-reload" plain="true" id="ucsUserDialog_reset">重置</a>
			</form>
        </div> 
  	</div>
  	
	<table id="ucsUserDialog_dg"></table> 
	<script src="${ctxResources}/pages/modules/base/ucsUserDialog.js"></script>
</body>
</html>	