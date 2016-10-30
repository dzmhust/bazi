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
	<form id="mainform" action="${ctx}/ucsDomain/${action}" method="post">
		<table class="formTable" width="100%" border="0" cellspacing="0" cellpadding="5" >
			<td style="width:25%;text-align:right">系统编号：</td>
				<td width="75%">
					<input id="id" name="id" style="width:90%" class=" easyui-textbox " data-options="required:true ,validType:'length[3,3]',prompt:'保存后不可编辑'" value="${ucsDomain.id}" <c:if test="${action=='edit' }">readonly</c:if> /> 
				</td>
			</tr>
												<tr>
				<td style="width:25%;text-align:right">系统名称：</td>
				<td width="75%">
					<input id="name" name="name" style="width:90%" class=" easyui-textbox " data-options="required:true ,validType:'length[1,20]'" value="${ucsDomain.name}"> 
				</td>
			</tr>
												<tr>
				<td style="width:25%;text-align:right">排序：</td>
				<td width="75%">
					<input id="sort" name="sort" style="width:90%" class=" easyui-textbox " data-options="" value="${ucsDomain.sort}"> 
				</td>
			<tr>
				<td style="width:25%;text-align:right">AppId：</td>
				<td width="75%">
					<input id="appId" name="appId" style="width:90%" class=" easyui-textbox " data-options="" value="${ucsDomain.appId}" disabled> 
				</td>
				<tr>
				<td style="width:25%;text-align:right">AppKey：</td>
				<td width="75%">
					<input id="appKey" name="appKey" style="width:90%" class=" easyui-textbox " data-options="" value="${ucsDomain.appKey}" disabled> 
				</td>
			</tr>
												<tr>
				<td style="width:25%;text-align:right">描述：</td>
				<td width="75%">
					<textarea id="description" name="description" style="width:90%;height:100px;">${ucsDomain.description}</textarea>
				</td>
			</tr>
								</table>
	</form>
	<script type="text/javascript">
	$(function(){
		
	});
	</script>
</body>
</html>	