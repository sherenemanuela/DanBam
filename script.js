//Preloader
$(window).on("load", function () {
  $(".loader-wrapper").fadeOut();
  $("body").addClass("loaded");
});

mobileNav();

// Button Click
$(".buttonorder").click(function () {
  $("this").addClass("btn__click");
});

// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".back-to-top").fadeIn();
  } else {
    $(".back-to-top").fadeOut();
  }
});

$(".red").clone().addClass("blue").appendTo("body");

// Mobile navigation
function mobileNav() {
  var body = $("body");
  $(".nav-menu").clone().prop({ class: "mobile-nav" }).prependTo(body);
  body.prepend(
    '<button type="button" class="mobile-nav-toggle display-lg-none"><i class="ri-menu-fill"></i></button>'
  );
  body.prepend('<div class="mobile-nav-overly"></div>');

  // OPEN HAMBURGER MENU
  $(".mobile-nav-toggle").on("click", function () {
    $(".drop-down > a").next().hide();
    body.toggleClass("mobile-nav-active");
    $(".mobile-nav-toggle i").toggleClass("ri-menu-unfold-fill");
    $(".mobile-nav-overly").toggle();
  });

  // OPEN DROPDOWN MENU
  $(".drop-down > a").on("click", function (e) {
    e.preventDefault();
    $(this).next().slideToggle();
    $(this).parent().toggleClass("active");
  });
}

// Slider functions
setInterval(function () {
  moveRight();
}, 3000);

var slideCount = $("#slider ul li").length;
var slideWidth = $("#slider ul li").width();
var slideHeight = $("#slider ul li").height();
var sliderUlWidth = slideCount * slideWidth;

$("#slider").css({ width: slideWidth, height: slideHeight });
$("#slider ul").css({ width: sliderUlWidth });

function moveLeft() {
  $("#slider ul").animate(
    {
      left: slideWidth,
    },
    200,
    function () {
      $("#slider ul li:last-child").prependTo("#slider ul");
      $("#slider ul").css("left", "");
    }
  );
}

function moveRight() {
  $("#slider ul").animate(
    {
      left: -slideWidth,
    },
    200,
    function () {
      $("#slider ul li:first-child").appendTo("#slider ul");
      $("#slider ul").css("left", "");
    }
  );
}

$("a.control_prev").click(function () {
  moveLeft();
});

$("a.control_next").click(function () {
  moveRight();
});

// Validation
function validate() {
  resetlabel();
  let username = document.getElementById("input-name").value;
  let useremail = document.getElementById("input-email").value;
  let Gender = document.querySelector('input[name="Gender"]:checked');
  let Branch = document.querySelector("select");
  let Message = document.getElementById("input-message").value;
  let checkbox = document.querySelector('input[name="agreements"]:checked');

  // Validation For Email
  var cari2 = useremail.indexOf("@");
  var listendemail = [".com", ".id", ".ac.id"];
  var listlength = listendemail.length;
  var cari3;
  for (var i = 0; i < listlength; i++) {
    cari3 = useremail.indexOf(listendemail[i]);
    if (cari3 != -1) {
      break;
    }
  }
  var domain = useremail.slice(cari2 + 1, cari3);
  var cekdomain = domain.search("@");

  let passall = 1;
  if (username.length < 3 || username.length > 20) {
    document.getElementById("error-name").innerHTML =
      "Please Insert Name with length 3-20";
    passall = 0;
  }
  if (useremail.length < 1) {
    document.getElementById("error-email").innerHTML = " Enter Your Email";
    passall = 0;
  }
  if (cari2 == -1 || cari3 == -1 || cekdomain != -1 || domain.length < 2) {
    document.getElementById("error-email").innerHTML = " Invalid Email";
    passall = 0;
  }

  if (Gender == null) {
    document.getElementById("error-gender").innerHTML = "Choose Your Gender";
    passall = 0;
  }

  if (Branch.value == "none") {
    document.getElementById("error-branch").innerHTML =
      "Please Select One Branch";
    passall = 0;
  }
  if (Message.length <= 0) {
    document.getElementById("error-message").innerHTML =
      "Message must be filled";
    passall = 0;
  }
  if (checkbox == null) {
    document.getElementById("error-checkbox").innerHTML =
      "Please Checkout The Box";
    passall = 0;
  }
  if (passall == 1) {
    alert("Thank you for Contacting Us");
    return true;
  }
  return false;
}

function resetlabel() {
  document.getElementById("error-name").innerHTML = "";
  document.getElementById("error-email").innerHTML = "";
  document.getElementById("error-email").innerHTML = "";
  document.getElementById("error-gender").innerHTML = "";
  document.getElementById("error-branch").innerHTML = "";
  document.getElementById("error-message").innerHTML = "";
  document.getElementById("error-checkbox").innerHTML = "";
}
