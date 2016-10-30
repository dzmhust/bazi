(function($){
	$.fn.validatebox.extensions = {};
    var rules = {
        //  只允许输入英文字母或数字
        engNum: {
            validator: function (value) {
                return /^[0-9a-zA-Z]*$/.test(value);
            },
            message: '请输入英文字母或数字'
        },
        //  只允许汉字、英文字母或数字
        chsEngNum: {
            validator: function (value, param) {
                return /^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9])*$/.test(value);
            },
            message: '只允许汉字、英文字母或数字。'
        },
        //  只允许汉字、英文字母、数字及下划线
        code: {
            validator: function (value, param) {
                return /^[\u0391-\uFFE5\w]+$/.test(value);
            },
            message: '只允许汉字、英文字母、数字及下划线.'
        },
        //  验证是否为合法的用户名
        name: {
            validator: function (value) { return value.isUserName(); },
            message: "用户名不合法(字母开头，允许6-16字节，允许字母数字下划线)"
        },
        //  指定字符最小长度
        minLength: {
            validator: function (value, param) { return $.string.trim(value).length >= param[0]; },
            message: "最少输入 {0} 个字符."
        },
        //  指定字符最大长度
        maxLength: {
            validator: function (value, param) { return $.string.trim(value).length <= param[0]; },
            message: "最多输入 {0} 个字符."
        },
        //  必须包含指定的内容
        contains: {
            validator: function (value, param) { return $.string.contains(value, param[0]); },
            message: "输入的内容必须包含 {0}."
        },
        //  以指定的字符开头
        startsWith: {
            validator: function (value, param) { return $.string.startsWith(value, param[0]); },
            message: "输入的内容必须以 {0} 作为起始字符."
        },
        //  以指定的字符结束
        endsWith: {
            validator: function (value, param) { return $.string.endsWith(value, param[0]); },
            message: "输入的内容必须以 {0} 作为起始字符."
        },
        //  长日期时间(yyyy-MM-dd hh:mm:ss)格式
        longDate: {
            validator: function (value) { return $.string.isLongDate(value); },
            message: "输入的内容必须是长日期时间(yyyy-MM-dd hh:mm:ss)格式."
        },
        //  短日期(yyyy-MM-dd)格式
        shortDate: {
            validator: function (value) { return $.string.isShortDate(value); },
            message: "输入的内容必须是短日期(yyyy-MM-dd)格式."
        },
        //  长日期时间(yyyy-MM-dd hh:mm:ss)或短日期(yyyy-MM-dd)格式
        date: {
            validator: function (value) { return $.string.isDate(value); },
            message: "输入的内容必须是长日期时间(yyyy-MM-dd hh:mm:ss)或短日期(yyyy-MM-dd)格式."
        },
        //  电话号码(中国)格式
        tel: {
            validator: function (value) { return $.string.isTel(value); },
            message: "输入的内容必须是电话号码(中国)格式."
        },
        //  移动电话号码(中国)格式
        mobile: {
            validator: function (value) { return $.string.isMobile(value); },
            message: "输入的内容必须是移动电话号码(中国)格式."
        },
        //  电话号码(中国)或移动电话号码(中国)格式
        telOrMobile: {
            validator: function (value) { return $.string.isTelOrMobile(value); },
            message: "输入的内容必须是电话号码(中国)或移动电话号码(中国)格式."
        },
        //  传真号码(中国)格式
        fax: {
            validator: function (value) { return $.string.isFax(value); },
            message: "输入的内容必须是传真号码(中国)格式."
        },
        //  邮政编码(中国)格式
        zipCode: {
            validator: function (value) { return $.string.isZipCode(value); },
            message: "输入的内容必须是邮政编码(中国)格式."
        },
        //  必须包含中文汉字
        existChinese: {
            validator: function (value) { return $.string.existChinese(value); },
            message: "输入的内容必须是包含中文汉字."
        },
        //  必须是纯中文汉字
        chinese: {
            validator: function (value) { return $.string.isChinese(value); },
            message: "输入的内容必须是纯中文汉字."
        },
        //  必须是纯英文字母
        english: {
            validator: function (value) { return $.string.isEnglish(value); },
            message: "输入的内容必须是纯英文字母."
        },
        //  必须是合法的文件名(不能包含字符 \\/:*?\"<>|)
        fileName: {
            validator: function (value) { return $.string.isFileName(value); },
            message: "输入的内容必须是合法的文件名(不能包含字符 \\/:*?\"<>|)."
        },
        //  必须是正确的 IP地址v4 格式
        ip: {
            validator: function (value) { return $.string.isIPv4(value); },
            message: "输入的内容必须是正确的 IP地址v4 格式."
        },
        //  必须是正确的 url 格式
        url: {
            validator: function (value) { return $.string.isUrl(value); },
            message: "输入的内容必须是正确的 url 格式."
        },
        //  必须是正确的 IP地址v4 或 url 格式
        ipurl: {
            validator: function (value) { return $.string.isUrlOrIPv4(value); },
            message: "输入的内容必须是正确的 IP地址v4 或 url 格式."
        },
        //  必须是正确的货币金额(阿拉伯数字表示法)格式
        currency: {
            validator: function (value) { return $.string.isCurrency(value); },
            message: "输入的内容必须是正确的货币金额(阿拉伯数字表示法)格式."
        },
        //  必须是正确 QQ 号码格式
        qq: {
            validator: function (value) { return $.string.isQQ(value); },
            message: "输入的内容必须是正确 QQ 号码格式."
        },
        //  必须是正确 MSN 账户名格式
        msn: {
            validator: function (value) { return $.string.isMSN(value); },
            message: "输入的内容必须是正确 MSN 账户名格式."
        },
        unNormal: {
            validator: function (value) { return $.string.isUnNormal(value); },
            message: "输入的内容必须是不包含空格和非法字符Z."
        },
        //  必须是合法的汽车车牌号码格式
        carNo: {
            validator: function (value) { return $.string.isCarNo(value); },
            message: "输入的内容必须是合法的汽车车牌号码格式."
        },
        //  必须是合法的汽车发动机序列号格式
        carEngineNo: {
            validator: function (value) { return $.string.isCarEngineNo(value); },
            message: "输入的内容必须是合法的汽车发动机序列号格式."
        },
        //  必须是合法的身份证号码(中国)格式
        idCard: {
            validator: function (value) { return $.string.isIDCard(value); },
            message: "输入的内容必须是合法的身份证号码(中国)格式."
        },
        //  必须是合法的整数格式
        integer: {
            validator: function (value) { return $.string.isInteger(value); },
            message: "输入的内容必须是合法的整数格式."
        },
        //  必须是合法的整数格式且值介于 {0} 与 {1} 之间
        integerRange: {
            validator: function (value, param) {
                return $.string.isInteger(value) && ((param[0] || value >= param[0]) && (param[1] || value <= param[1]));
            },
            message: "输入的内容必须是合法的整数格式且值介于 {0} 与 {1} 之间."
        },
        //  必须是指定类型的数字格式
        numeric: {
            validator: function (value, param) { return $.string.isNumeric(value, param ? param[0] : undefined); },
            message: "输入的内容必须是指定类型的数字格式."
        },
        //  必须是指定类型的数字格式且介于 {0} 与 {1} 之间
        numericRange: {
            validator: function (value, param) {
                return $.string.isNumeric(value, param ? param[2] : undefined) && ((param[0] || value >= param[0]) && (param[1] || value <= param[1]));
            },
            message: "输入的内容必须是指定类型的数字格式且介于 {0} 与 {1} 之间."
        },
        //  必须是正确的 颜色(#FFFFFF形式) 格式
        color: {
            validator: function (value) { return $.string.isColor(value); },
            message: "输入的内容必须是正确的 颜色(#FFFFFF形式) 格式."
        },
        //  必须是安全的密码字符(由字符和数字组成，至少 6 位)格式
        password: {
            validator: function (value) { return $.string.isSafePassword(value); },
            message: "输入的内容必须是安全的密码字符(由字符和数字组成，至少 6 位)格式."
        },
        //  输入的字符必须是指定的内容相同
        equals: {
            validator: function (value, param) {
                var val = param[0], type = param[1];
                if (type) {
                    switch (String(type).toLowerCase()) {
                        case "jquery":
                        case "dom":
                            val = $(val).val();
                            break;
                        case "id":
                            val = $("#" + val).val();
                            break;
                        case "string":
                        default:
                            break;
                    }
                }
                return value === val;
            },
            message: "输入的内容不匹配."
        }
    };
    $.extend($.fn.validatebox.defaults.rules, rules);
})(jQuery);