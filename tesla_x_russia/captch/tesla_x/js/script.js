//slick_slider
$(".slick_slider").slick({
  dots: false,
  focusOnSelect: true,
  mobileFirst: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 280,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
});

//range_slider
$("#slider-range").slider({
  min: 0,
  max: 8,
  step: 1,
  tooltip: "hide",
  slide: function (event, ui) {
    console.log(event);
    console.log(ui.value);
    $(".slick_slider").slick("slickGoTo", parseInt(ui.value));
  },
});
document.getElementById("poster-image").onclick = function() { fadeImage() };

function fadeImage() {
  document.getElementById("poster-image").style.opacity = "0";
}
