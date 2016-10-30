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

	<form id="mainform" action="${ctx}/ucsUserTypeRole/${action}"
		method="post">
		<table class="formTable" width="100%" border="0" cellspacing="0"
			cellpadding="5">
			<tr>
				<td><input type="hidden" name="id"
					value="${ucsUserTypeRole.id}" /></td>
			</tr>
			<tr>
				<td width="25%" style="text-align: right">用户类型：</td>
				<td width="75%"><input id="userType" name="userType"
					style="width: 90%" 
					data-options="required:true"
					value="${ucsUserTypeRole.userType}"></td>
			</tr>
			<tr>
				<td width="25%" style="text-align: right">角色：</td>
				<td width="75%"><input id="roleId" name="roleId"
					style="width: 90%"
					data-options="required:true"
					value="${ucsUserTypeRole.roleId}"></td>
			</tr>
		</table>
	</form>
	<script type="text/javascript">
		$(function() {
			initActions();
		});
		function initActions() {
			getUserTypes();
			getRoles();
		}
		function getUserTypes(){
			var userTypesArray = new DataDictionary(DICTIONARY_FIELD.USER_TYPE);
			userTypesArray.getFields();
			userTypesArray.initCombobox($('#userType'));
		}
		function getRoles(){
			var roleArray = new ComboBoxIdNameBean(ctx+'/ucsRole/find');
			roleArray.getFields();
			roleArray.initCombobox($('#roleId'));
		}
	</script>
</body>
</html>
