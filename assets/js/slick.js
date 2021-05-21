$(".category-slider").slick({
  dots: !1,
  infinite: !0,
  autoplay: !0,
  arrows: !0,
  speed: 1e3,
  prevArrow: '<i class="icofont-arrow-right dandik"></i>',
  nextArrow: '<i class="icofont-arrow-left bamdik"></i>',
  slidesToShow: 6,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1200,
      settings: { slidesToShow: 5, slidesToScroll: 2, variableWidth: !0 },
    },
    {
      breakpoint: 992,
      settings: { slidesToShow: 4, slidesToScroll: 2, variableWidth: !0 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 3, slidesToScroll: 2, variableWidth: !0 },
    },
    {
      breakpoint: 576,
      settings: { slidesToShow: 2, slidesToScroll: 2, variableWidth: !0 },
    },
  ],
}),
  $(".promo-slider").slick({
    dots: false,
    infinite: !0,
    autoplay: !0,
    arrows: !0,
    speed: 300,
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  }),
  $(".preview-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !0,
    fade: !0,
    asNavFor: ".thumb-slider",
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 576,
        settings: { slidesToShow: 1, slidesToScroll: 1, arrows: !0 },
      },
    ],
  }),
  $(".thumb-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".preview-slider",
    dots: !1,
    arrows: !1,
    centerMode: !4,
    focusOnSelect: !0,
    // responsive: [
    //   { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    //   { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    //   {
    //     breakpoint: 576,
    //     settings: { slidesToShow: 3, slidesToScroll: 1, arrows: !1 },
    //   },
    //   {
    //     breakpoint: 400,
    //     settings: { slidesToShow: 2, slidesToScroll: 1, arrows: !1 },
    //   },
    // ],
  }),
  $(".modal").on("shown.bs.modal", function (s) {
    $(".preview-slider, .thumb-slider").slick("setPosition"),
      $(".product-details-image").addClass("slider-opacity");
  });
