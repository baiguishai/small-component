var supefn = {
    togglefn: function (option, target) {
        $(option).click(function () {
            $(target).toggle();
        });
    },
    togfn2: function (option, target) {
        $(option).click(function () {
            $(target).toggleClass("active");
        });
    },
    togfn: function (option) {
        $(option).click(function () {
            $(this).toggleClass("active");
        });
    },
    togglefnBrother: function (option, target) {
        $(option).click(function () {
            $(this).siblings(target).toggle();
        });
    },
    tabfn: function (option, target) {
        $(option).click(function () {
            var idx = $(this).index();
            $(this).addClass("active").siblings(option).removeClass("active");
            $(target).eq(idx).addClass("active").siblings(target).removeClass("active");
        });
    },
	tabfn2: function (option, target) {
        $(option).click(function () {
            var idx = $(this).index();
            $(this).addClass("active").siblings(option).removeClass("active");
            $(target).eq(idx).addClass("active").siblings(target).removeClass("active");
            setTimeout(function(){
                $(option).removeClass("active");
                $(target).removeClass("active")
            },2000);
        });

    }
};
/*oa-增-提示信息组件 start*/
supefn.tabfn2(".component-btn",".component-tip-msg");
/*oa-增-提示信息组件 end*/










