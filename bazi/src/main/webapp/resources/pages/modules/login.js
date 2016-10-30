/**
 * 初始加载
 */
$(function(){
	formValidate();
	initActions();
});
/**
 * 绑定事件
 */
function initActions(){
	// 回车事件
	$("#loginForm input").each(function(){
		$(this).bind('keypress',function(event){
	        if(event.keyCode == "13") {
	        	if ($("#loginForm").validate().form()){
	        		$("#loginForm").submit();
	        	}
	        	return false;
	        }
	    });
	});
}
/**
 * 登录校验
 */
function formValidate(){
	$("#loginForm").validate({
		focusInvalid: false,onkeyup: false,
		submitHandler:function(form){
			var md5Pass = hex_md5(hex_md5($("#password").val()));
			$("#password").val(md5Pass);
			form.submit();
		},
		errorPlacement: function(error, element) {
        	error.appendTo( element.parent() );
        },
        rules:{
        	username:{required:true,minlength:5,maxlength:16}
        	,password:{required:true,minlength:6,maxlength:32}
        	,captcha:{required:true,rangelength:[4,4]}
        },
        messages:{
        	username:{required:"帐号不能为空",minlength : $.validator.format("帐号不能少于{0}位"),maxlength : $.validator.format("帐号不能超过{0}位")}
        	,password:{required: "密码不能为空",minlength : $.validator.format("密码不能少于{0}位"),maxlength : $.validator.format("密码不能超过{0}位")}
        	,captcha:{required: "验证码不能为空",rangelength: $.validator.format("验证码长度必须为{0}位")}
        }
	});
}