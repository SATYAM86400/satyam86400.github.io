var typed = new Typed('.typed', {
    strings: ["Learner", "Leader", "A good human being!"],
    showCursor: false,
    typeSpeed: 30,
    loop: true
  });

  $("#navigation li a").click(function (e) {
    e.preventDefault();

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 80 }, "slow");

});

const nav = $("#navigation");
const navTop = nav.offset().top;

$(window).on("scroll", stickyNavigation);

function stickyNavigation() {

    var body = $("body");

    if ($(window).scrollTop() >= navTop) {
        body.css("padding-top", nav.outerHeight() + "px");
        body.addClass("fixedNav");
    }
    else {
        body.css("padding-top", 0);
        body.removeClass("fixedNav");
    }

}

