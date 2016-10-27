/**
 * Created by Rene on 9/26/2016.
 */



function stp(n){//switchToPane

    if(n > 0){
        $("#paneSlider").css("right", (n-1)*100 + "%");
        $(".nav.masthead-nav li").removeClass("active");
        $($(".nav.masthead-nav li")[n-1]).addClass("active")

    }

}
