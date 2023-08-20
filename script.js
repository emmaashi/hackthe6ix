// let div = document.createElement('div');
div.classList.add("donation-wrapper");

var div = document.getElementById("main");

// Function to show the donation wrapper and hide the form-box
function hide() {
  console.log("hi");
  const wrapper = document.getElementById("wrapper");
  const donationWrapper = document.getElementById("donation-wrapper");

  wrapper.style.display = "none";
  donationWrapper.style.display = "block";
}

// Add event listener to the "Create Account" button
const createAccountButton = document.querySelector(".btn.create-account");
createAccountButton.addEventListener("click", showDonationWrapper);

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
  let amount = document.getElementById("donation");

  console.log(city);
  console.log(province);
  console.log(country);
  console.log(amount);
}

// Get a reference to the "Confirm" button
const confirmButton = document.getElementById("confirmButton");

// Add an event listener to handle navigation when the button is clicked
confirmButton.addEventListener("click", function () {
  window.location.href = "submission.html";
});
