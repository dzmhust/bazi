<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
	<%@ include file="/WEB-INF/views/include/meta.jsp"%>
	<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
	<title>用户中心系统</title>
	<link rel="stylesheet" type="text/css" href="${ctxResources}/css/bglogin.css" />
	<script>
	var captcha;
	function refreshCaptcha(){  
	    document.getElementById("img_captcha").src="${ctx}/resources/images/kaptcha.jpg?t=" + Math.random();  
	}  
	</script>
</head>
<body>
	<div>
	<form id="loginForm" action="${ctx}/login" method="post">
		<div class="login_top">
			<div class="login_title">
				用户中心系统
			</div>
		</div>
		<div style="float:left;width:100%;">
			<div class="login_main">
				<div class="login_main_top"></div>
				<div class="login_main_errortip">&nbsp;${errorMsg }</div>
				<div class="login_main_ln">
					<input type="text" id="username" name="username" value="<shiro:principal/>"/>
				</div>
				<div class="login_main_pw">
					<input type="password" id="password" name="password" value="" autocomplete="off"/>
				</div>
				<div class="login_main_yzm">
					<div>
					<input type="text" id="captcha" name="captcha"/>
					<img alt="验证码" src="${ctx}/resources/images/kaptcha.jpg" title="点击更换" id="img_captcha" onclick="javascript:refreshCaptcha();" />
					</div>
				</div>
				<div class="login_main_remb">
					<input id="rm" name="rememberMe" type="hidden"/><!-- <label for="rm"><span>记住我</span></label> -->
				</div>
				<div class="login_main_submit">
					<input type="submit" id="btnLogin" value="" />
				</div>
			</div>
		</div>
	</form>
	</div>
	
	<!-- 加载js文件 -->
	<script src="${ctxResources}/plugins/jquery/jquery.min.js"></script>
	<script src="${ctxResources}/plugins/udf/md5.js"></script>
	<script src="${ctxResources}/plugins/jquery/jquery.validate.min.js"></script>
	<script src="${ctxResources}/pages/modules/login.js"></script>
</body>
</html>
