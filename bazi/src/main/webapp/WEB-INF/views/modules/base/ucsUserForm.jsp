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
	<form id="mainform" action="${ctx }/ucsUser/${action}" method="post">
		<table class="formTable" width="100%" border="0" cellspacing="0" cellpadding="5" >
			<tr>
				<td style="width:25%;text-align:right">用户帐号：</td>
				<td width="75%">
					<input type="hidden" name="id" value="${ucsUser.id }"/>
					<input name="username" class="easyui-textbox" data-options="required:true" value="${ucsUser.username }" style="width:90%"> 
				</td>
			</tr>
			<c:if test="${action == 'add'}">
			<tr >
				<td style="width:25%;text-align:right">密码：</td>
				<td width="75%"><input style="width:90%" id="plainPassword" name="password" type="password" autocomplete="off" class="easyui-textbox" data-options="required:true,validType:'length[6,20]'"/></td>
			</tr>
			<tr>
				<td style="width:25%;text-align:right">确认密码：</td>
				<td width="75%"><input style="width:90%" type="password" autocomplete="off" class="easyui-textbox" data-options="required:true,validType:'equals[$(\'#plainPassword\').val()]'"/></td>
			</tr>	
			</c:if>
			<tr>
				<td style="width:25%;text-align:right">用户实名：</td>
				<td width="75%">
					<input name="name" style="width:90%" class="easyui-textbox" data-options="required:true" value="${ucsUser.name }"> 
				</td>
			</tr>
			<tr>
				<td style="width:25%;text-align:right">联系电话：</td>
				<td width="75%">
					<input name="phone" style="width:90%" class="easyui-textbox" data-options="required:true,validType:'mobile'" value="${ucsUser.phone }"> 
				</td>
			</tr>
			<tr>
				<td style="width:25%;text-align:right">电子邮箱：</td>
				<td width="75%">
					<input type="text" name="email" style="width:90%" class="easyui-textbox" data-options="required:true,validType:'email'" value="${ucsUser.email }"> 
				</td>
			</tr>
			<tr>
				<td style="width:25%;text-align:right">描述：</td>
				<td width="75%">
					<textarea id="description" name="description" style="width:90%;height:100px;">${ucsUser.description}</textarea>
				</td>
			</tr>
		</table>
	</form>
</body>
</html>	