function checkScroll() {
  var startY = $(".navbar").height() * 2; //The point where the navbar changes in px

  if ($(window).scrollTop() > startY) {
    $(".navbar").addClass("scrolled");
  } else {
    $(".navbar").removeClass("scrolled");
  }
}

if ($(".navbar").length > 0) {
  $(window).on("scroll load resize", function () {
    checkScroll();
  });
}

function onSubmit() {
  let city = document.getElementById("city");
  let province = document.getElementById("province");
  let country = document.getElementById("country");

  console.log(city);
  console.log(province);
  console.log(country);
}
