/**
 * Created by niya on 2016-02-23.
 */
$(document).ready(function(){
    $("#nav-mobile").html($("#nav-main").html());
    $("#nav-trigger span").click(function(){
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
            $("#nav-trigger").removeClass("back");
        } else {
            $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
            $("#nav-trigger").addClass("back");
        }
    });

    $('.fancybox').fancybox({
        padding: 0,
        openEffect: 'elastic',
        fitToView: true,
        closeBtn: false,
        aspectRatio: true,
        minHeight: "60%"
    });
});
