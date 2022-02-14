function scrollHandler() {
  // console.log($(window).scrollTop());
  // console.log($('.about').position().top);

  if ($(window).scrollTop() >= $(".about").position().top) {
    $("#about-btn").css("color", "#4A4A4A");
    $("#works-btn").css("color", "#4A4A4A");
    $("#contact-btn").css("color", "#4A4A4A");

    $(".skill").each(function () {
      var skill = $(this);
      var percentage = skill.find(".percentage").text();
      skill.find(".inner-bar").animate({ width: percentage }, 1000);
    });
  } else {
    $("#about-btn").css("color", "#4A4A4A");
    $("#works-btn").css("color", "#4A4A4A");
    $("#contact-btn").css("color", "#4A4A4A");
  }
  $("section").each(function () {
    if ($(window).scrollTop() >= $(this).position().top) {
      $(this)
        .find(".vertical-center")
        .animate({ top: "0", opacity: "1" }, 1000);
    }
  });
}

function clickWarp() {
  var id = $(this).attr("id");
  if (id == "about-btn") {
    $("html, body").animate({ scrollTop: $(".about").position().top }, 1000);
  } else if (id == "works-btn") {
    $("html, body").animate({ scrollTop: $(".works").position().top }, 1000);
  } else if (id == "contact-btn") {
    $("html, body").animate({ scrollTop: $(".footer").position().top }, 1000);
  }
}

scrollHandler();
$(window).on("scroll", scrollHandler);
$(".menu-right button").on("click", clickWarp);
