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
	<form id="fileForm" action="${ctx }/${module }/${action}" method="post" enctype="multipart/form-data">
		<table class="formTable">
			<tr>
				<td>文件：</td>
				<td>
					<input name="file" class="easyui-filebox" data-options="prompt:'请选择文件',width:250" "> 
				</td>
			</tr>
		</table>
	</form>
</body>
</html>	