$(function(){
    $(".photo").hover(function(){
        let $slides = $(this).find(".slide");
        let index = 0;

        // 첫 번째 이미지만 보이게
        $slides.hide().eq(index).show().addClass("active");

        // ✅ interval 설정
        let interval = setInterval(() => {
            $slides.eq(index).removeClass("active").fadeOut(500);
            index = (index + 1) % $slides.length;
            $slides.eq(index).addClass("active").fadeIn(500);
        }, 1500);

        // interval 저장
        $(this).data("interval", interval);

    }, function(){
        // 마우스 벗어나면 멈추고 첫 번째 이미지 복귀
        clearInterval($(this).data("interval"));
        let $slides = $(this).find(".slide");
        $slides.hide().removeClass("active").first().show().addClass("active");
    });
});
