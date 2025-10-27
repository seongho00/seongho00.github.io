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

$(document).ready(function () {
    // Swiper 여러 개 초기화
    const tripSwiper = new Swiper(".tripTaleImg", {
        loop: true,
        autoHeight: true, // ✅ 슬라이드마다 높이 자동 조정,
        autoplay: {delay: 2500},
        pagination: {el: ".swiper-pagination", clickable: true},
        navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"},
    });

    const tmrSwiper = new Swiper(".tmrImg", {
        loop: true,
        autoHeight: true, // ✅ 슬라이드마다 높이 자동 조정
        autoWidth: true, // ✅ 슬라이드마다 높이 자동 조정
        autoplay: {delay: 2500},
        pagination: {el: ".swiper-pagination", clickable: true},
        navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"},
    });

    // 열기
    $(".tripTaleCard").on("click", () => {
        $("#tripTaleModal").removeClass("hidden").addClass("flex");
        tripSwiper.autoplay.start();
    });
    $(".tmrCard").on("click", () => {
        $("#TMRTeamProjectModal").removeClass("hidden").addClass("flex");
        tmrSwiper.autoplay.start();
    });

    // 닫기 (공통)
    $(".closeModal").on("click", function () {
        const modal = $(this).closest(".fixed"); // 자신이 속한 모달 찾기
        modal.removeClass("flex").addClass("hidden");

        // Swiper 멈추기 (선택)
        if (modal.find(".tripTaleImg").length) tripSwiper.autoplay.stop();
        if (modal.find(".tmrImg").length) tmrSwiper.autoplay.stop();
    });

    // 배경 클릭 시 닫기
    $(".fixed.bg-black\\/70").on("click", function (e) {
        if (e.target === this) {
            $(this).removeClass("flex").addClass("hidden");
            tripSwiper.autoplay.stop();
            tmrSwiper.autoplay.stop();
        }
    });
});
