(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

})(jQuery); // End of use strict

// Modal Javascript

$(document).ready(function () {
  $.getJSON("https://freerestapi.herokuapp.com/api/v1/5122", function(result){
      $.each(result, function(i, field){
        $("#BanyakPengunjung").html(field);
      });
  	});
  $("#myBtn").click(function () {
    $('.modal').modal('show');
  });

  $("#modalLong").click(function () {
    $('.modal').modal('show');
  });

  $("#modalScroll").click(function () {
    $('.modal').modal('show');
  });

  $('#modalCenter').click(function () {
    $('.modal').modal('show');
  });
  showTime();
});

//Jam Digital
function showTime(){
  // to get current time/ date.
  var date = new Date();
  // to get the current hour
  var h = date.getHours();
    // to get the current minutes
  var m = date.getMinutes();
  //to get the current second
  var s = date.getSeconds();
  // AM, PM setting
  var session = "AM"; 
  
 //conditions for times behavior 
  if ( h == 0 ) {
    h = 12;
  }
  if( h >= 12 ){
     session = "PM";
     }
  
  m = ( m < 10 ) ? m = "0" + m : m;
  s = ( s < 10 ) ? s = "0" + s : s;
  
  //putting time in one variable
  var time = h + ":" + m + ":" + s + " " + session;
  //putting time in our div
  $('#Jam').html(time); 
  //to change time in every seconds
  setTimeout( showTime, 1000 );
}

startTime();

var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

var newDate = new Date();

var DateString = '';
for (var i = 0; i < 7; i++) {
  if (i == newDate.getDay()) {
    DateString += "<span class='clock__date--curr'>" + dayNames[i] + "</span> ";
  } else {
    DateString += "<span>" + dayNames[i] + "</span> ";
  }
}
$('.clock__date').html(DateString);

function startTime() {
  var today = new Date();
  var h = checkTime(today.getHours());
  var m = checkTime(today.getMinutes());
  var s = checkTime(today.getSeconds());

  var TimeString = h + ':' + m + ':' + s;
  TimeString = '<span>' + TimeString.split('').join('</span><span>') + '</span>';
  $('.clock__time').html(TimeString);

  var t = setTimeout(function() {
    startTime()
  }, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = '0' + i
  };
  return i;
}

// Popover Javascript

$(function () {
  $('[data-toggle="popover"]').popover()
});
$('.popover-dismiss').popover({
  trigger: 'focus'
});

// Version in Sidebar

var version = document.getElementById('version-ruangadmin');

version.innerHTML = "Version 1.0.1";