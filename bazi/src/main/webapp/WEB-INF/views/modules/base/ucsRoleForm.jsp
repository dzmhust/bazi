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
	<form id="mainform" action="${ctx }/ucsRole/${action}" method="post">
		<table class="formTable" width="100%" border="0" cellspacing="0" cellpadding="5" >
			<tr>
				<td style="width:25%;text-align:right">角色名称：</td>
				<td width="75%">
					<input type="hidden" name="id" value="${ucsRole.id }"/>
					<input name="name" class="easyui-textbox" data-options="required:true" value="${ucsRole.name }" style="width:90%"> 
				</td>
			</tr>
			<tr>
				<td style="width:25%;text-align:right">描述：</td>
				<td width="75%">
					<textarea id="description" name="description" style="width:90%;height:100px;">${ucsRole.description}</textarea>
				</td>
			</tr>
		</table>
	</form>
</body>
</html>	