<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>用户中心系统</title>
<%@ include file="/WEB-INF/views/include/meta.jsp"%>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<%@ include file="/WEB-INF/views/include/easyui.jsp"%>
<script type="text/javascript" src="${ctxResources }/plugins/artTemplate/template.js"></script>
<link href="${ctxResources}/css/index.css" rel="stylesheet" type="text/css" />

</head>
<body class="easyui-layout">
	<div data-options="region:'north',border:false" style="height:52px;">
		<div id="topbar" class="top-bar">
        	<div class="top-bar-left">
               <h1 style="margin-left: 10px; margin-top: 10px;color: #fff">UCS<span style="color: #3F4752">用户中心系统</span></h1>
           	</div>
           	<div class="top-bar-right">
           		<div style="position:relative;float:right;padding:10px 10px;color:#FFFFFF;">
           			<shiro:principal property="name"/>，您好
           			<a href="javascript:void(0)" style="color:#FFFFFF;" onclick="updatePwd()">修改密码</a>
           			<a href="javascript:void(0)" style="color:#FFFFFF;" onclick="logout()">退出系统</a>
           		</div>
           	</div>
        </div>
	</div>
	
	<div data-options="region:'west',split:true,title:'菜单导航栏',minWidth:200,maxWidth:400", style="width:220px;padding:1px;">
		<div id="myMenu">
		<script id="menu" type="text/html">
			{{each data as p_permission}}
				{{if (p_permission.pid==='')}}
   				 <div title="{{p_permission.name }}" style="padding: 5px;" data-options="border:false,iconCls:'{{p_permission.icon }}'">
					<div>
					{{each data as c_permission}}	
						{{if (c_permission.pid==p_permission.id)}}
						<a id="btn" class="easyui-linkbutton" data-options="plain:true,iconCls:'{{c_permission.icon }}'" style="width:98%;margin-bottom:5px;text-align:center" onclick="addTab('{{c_permission.name}}','{{c_permission.url }}','{{c_permission.icon }}')">{{c_permission.name}}</a>
						{{/if}}	
					{{/each}}
					</div>
				</div>
				{{/if}}	
			{{/each}}
		</script>
		</div>
	</div>
	
	<div class="easyui-tabs" id="mainTabs" data-options="region:'center'">
	</div>
	<div id="dlg"></div>
	 <script type="text/javascript" src="${ctxResources }/pages/modules/index.js"></script>   
</body>
</html>
