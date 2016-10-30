(function ($, undefined) {

    $.fn.combotree.extensions = {};


    var methods = $.fn.combotree.extensions.methods = {};
    var defaults = $.fn.combotree.extensions.defaults = $.extend({}, $.fn.tree.extensions.defaults, {
        //  更改继承于 easyui-tree 的自定义属性 toggleOnClick 的默认值，使得 easyui-combotree 中 tree 组件的页节点在点击后不自动展开/折叠子节点；
        //  Boolean 类型，默认为 false。
        toggleOnClick: false,

        //  更改继承于 easyui-tree 的自定义属性 autoBindDblClick 的默认值，使得 easyui-combotree 中 tree 组件的页节点在双击后不触发第一个右键菜单项的事件；
        //  Boolean 类型，默认为 false。
        autoBindDblClick: false

       /* onExpand: function () {
            $.fn.tree.extensions.defaults.onExpand.apply($(this).combotree("tree")[0], arguments);
        }*/
    });

    $.extend($.fn.combotree.defaults, defaults);
    $.extend($.fn.combotree.methods, methods);

})(jQuery);