$(function () {
    $(".blog-card").hover(function () {
        let $slides = $(this).find(".slide");
        let index = 0;


        // 첫 번째 이미지만 보이게
        $slides.hide();
        $($slides[0]).show();

        // interval 설정
        let interval = setInterval(() => {

            $($slides[index]).fadeOut(500);
            index = (index + 1) % $slides.length;
            $($slides[index]).fadeIn(500);
        }, 1500);

        $(this).data("interval", interval);

    }, function () {

        clearInterval($(this).data("interval"));
        let $slides = $(this).find(".slide");
        $slides.hide();
        $($slides[0]).show();
    });
});
