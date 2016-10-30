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
	<form id="mainform" action="${ctx }/ucsPermission/${action}" method="post">
		<table class="formTable" width="100%" border="0" cellspacing="0" cellpadding="5" >
			<tr>
				<td style="width:25%;text-align:right">所属系统：</td>
				<td width="75%">
					<input id="domain" name="domain" style="width:90%" data-options="required:true" value="${ucsPermission.domain }"> 
				</td>
			</tr>
			<tr>
				<td style="width:25%;text-align:right">权限名称：</td>
				<td width="75%">
					<input type="hidden" name="id" value="${ucsPermission.id }"/>
					<input name="name" class="easyui-textbox" data-options="required:true" value="${ucsPermission.name }" style="width:90%"> 
				</td>
			</tr>
			<tr>
				<td style="width:25%;text-align:right">访问路径：</td>
				<td width="75%">
					<input name="url" style="width:90%" class="easyui-textbox" data-options="" value="${ucsPermission.url }"> 
				</td>
			</tr>
			<tr>
				<td style="width:25%;text-align:right">类型：</td>
				<td width="75%">
					<input id="type" name="type" style="width:90%" data-options="required:true" value="${ucsPermission.type }"> 
				</td>
			</tr>
			<tr>
				<td style="width:25%;text-align:right">上级权限：</td>
				<td width="75%">
					<input id="pid" name="pid" style="width:90%"  value="${ucsPermission.pid }"> 
				</td>
			</tr>
			<tr>
				<td style="width:25%;text-align:right">排序：</td>
				<td width="75%">
					<input name="sort" style="width:90%" class="easyui-numberbox" data-options="precision:0" value="${ucsPermission.sort }"> 
				</td>
			</tr>
			<tr>
				<td style="width:25%;text-align:right">图标：</td>
				<td width="75%">
					<input  name="icon" style="width:90%" class="easyui-textbox" value="${ucsPermission.icon }">
				</td>
			</tr>
			<tr>
				<td style="width:25%;text-align:right">描述：</td>
				<td width="75%">
					<textarea id="description" name="description" style="width:90%;height:100px;">${ucsPermission.description}</textarea> 
				</td>
			</tr>
		</table>
	</form>
	<script type="text/javascript">
	$(function(){
		var domain = $('#domain').val();
		genMenus(domain);
		getDomains();
		getTypes();
	});
	/**
	 * 获取功能菜单
	 */
	function genMenus(domain){
		var menus = new ComboBoxTreeBean(ctx+'/ucsPermission/selectMenus/'+domain);
		menus.getFields();
		menus.initCombobox($('#pid'));
	}
	/**
	 *获取所属系统
	 */
	function getDomains(){
		$('#domain').combobox({
			method:'GET',
			url: ctx+'/ucsDomain/getDomains',
			valueField : 'id',
			textField : 'name',
			editable:false,
		    animate:true,
		    onSelect:function(record){
		    	var url = ctx+'/ucsPermission/selectMenus/'+record.id;
		    	$('#pid').combotree('reload',url);
		    }
		}); 
	}
	/**
	 *获取类型
	 */
	function getTypes(){
		var typeArray = new DataDictionary(DICTIONARY_FIELD.MENU_TYPE); 
		typeArray.getFields();
		typeArray.initCombobox($('#type'));
	}
	</script>
</body>
</html>	