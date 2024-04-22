// aos
AOS.init({
  duration: 1200,
})

// aos end
// usefull links icon change
const usefullItems = document.querySelectorAll('.usefull-item');
usefullItems.forEach(function(usefullItem) {
    usefullItem.addEventListener('mouseover', function() {
        const logoImage = usefullItem.querySelector('.sq-logo');
        logoImage.src = './src/img/flhover.png';
    });

    usefullItem.addEventListener('mouseout', function() {
        const logoImage = usefullItem.querySelector('.sq-logo');
        logoImage.src = './src/img/fl.png';
    });
});


$(document).ready(() => {
  
  const backToTop = $('#backToTop')
  const amountScrolled = 300
  
  $(window).scroll(() => {
    $(window).scrollTop() >= amountScrolled 
      ? backToTop.fadeIn('fast') 
      : backToTop.fadeOut('fast')
  })
  
  backToTop.click(() => {
    $('body, html').animate({
      scrollTop: 0
    }, 600)
    return false
  })
})
//back to top/
document.addEventListener("DOMContentLoaded", function () {
  function initPikaday() {
    var picker = new Pikaday({
      field: document.getElementById('datepicker'),
      format: 'DD.MM.YYYY',
      i18n: {
        previousMonth: 'Əvvəlki Ay',
        nextMonth: 'Növbəti Ay',
        months: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'İyun', 'İyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'],
        weekdays: ['Bazar', 'Bazar ertəsi', 'Çərşənbə axşamı', 'Çərşənbə', 'Cümə axşamı', 'Cümə', 'Şənbə'],
        weekdaysShort: ['Bz', 'Be', 'Ça', 'Çə', 'Ca', 'Cü', 'Şə']
      },
      onSelect: function (date) {
        console.log('Tarix seçildi: ', date);
      }
    });

    var calendarShape = document.getElementById('calendar-shape');

    calendarShape.addEventListener('click', function () {
      picker.show();
    });
  }

  initPikaday();
});

// current

$(document).ready(function () {
  $("#news-slider").owlCarousel({
    items: 4,
    itemsDesktop: [1220, 3],
    itemsMiddle: [1199, 3],
    itemsDesktopSmall: [980, 2],
    itemsMobile: [600, 1],
    navigation: true,
    navigationText: ["", ""],
    pagination: true,
    autoPlay: true
    
  });
});

// news-slider2
$(document).ready(function () {
  $("#news-slider2").owlCarousel({
    items: 4,
    itemsDesktop: [1220, 3],
    itemsMiddle: [1199, 3],
    itemsDesktopSmall: [980, 2],
    itemsMobile: [600, 1],
    navigation: true,
    navigationText: ["", ""],
    pagination: true,
    autoPlay: true
    
  });
});
// news-slider2 -end
// news-slider-nmr
$(document).ready(function () {
  $("#news-slider-nmr").owlCarousel({
    navigation: true,
    items: 3,
    itemsDesktop: [1199, 1],
    itemsDesktop2: [992, 1],
    itemsDesktopSmall: [980, 1],
    itemsMiddle: [768, 1],
    itemsMobile: [600, 1],
    navigation: true,
    navigationText: ["", ""],
    pagination: true,
    autoPlay: true
  });
});

// news-slider-2-end

// owl2
var Lowl = $("#owl-demo");
Lowl.owlCarousel({
  items: 6, //10 items above 1000px browser width
  itemsDesktop: [1000, 2], //5 items between 1000px and 901px
  itemsDesktopSmall: [991, 2], // 3 items betweem 900px and 601px
  itemsTablet: [600, 2], //2 items between 600 and 0;
  //  itemsMobile : false , // itemsMobile disabled - inherit from itemsTablet option
  dots: true, stagePadding: Number, //stagePadding: 50,
  loop: true, margin: 30, rtl: true, pagination: true,
  navigationText: ["", ""],
  pagination: true,
  autoPlay: true
})

$(".next").click(function () {
  Lowl.trigger('owl.next');
});

$(".prev").click(function () {
  Lowl.trigger('owl.prev');
});

Lowl.trigger('owl.play', false);

$(() => {


  function fixMenu() {
    let imgHeight = $(".header-img").height() + $(".header-info").height();
    if ($(window).scrollTop() > imgHeight) {
      $(".menu-section").css({ position: "fixed", top: "0" });
      $(".navbar").css({ "background-color": "rgba(225, 225, 225, 1)" });
      $(".dropdown-menu").css({ "background-color": "rgba(25, 106, 180, 1)" });
      $(".form-section").css({ "background-color": "rgba(20, 52, 99, .7)" });
    } else {
      $(".menu-section").css({ position: "sticky", top: "0" });
      $(".navbar").css({ "background-color": "rgba(225, 225, 225, 1)" }); //deyisdim
      $(".dropdown-menu").css({ "background-color": "rgba(25, 106, 180, 1)" });
      $(".form-section").css({ "background-color": "#375074" });
    }
  }

  fixMenu();

  $(window).scroll(function () {
    fixMenu();
  })

  $(window).resize(function () {
    fixMenu();
  })

  $(document).on("click", ".menu-btn", () => {
    $("#menuContainer").css({ "margin-left": "0px", "margin-right": "0px", "min-width": "100vw", "max-width": "100vw" });
    $(".dropdown-menu").css({ "border-top-right-radius": "8px", "border-top-left-radius": "8px" });
    $(".navbar-toggler").removeClass("menu-btn");
    $(".navbar-toggler").addClass("menu-open");
    $(".menu-section").css({ "position": "sticky" });
    fixMenu();
  })

  $(document).on("click", ".menu-open", () => {
    $("#menuContainer").css({ "margin-left": "auto", "margin-right": "auto", "min-width": "auto", "max-width": "auto" });
    $(".dropdown-menu").css({ "border-top-right-radius": "0px", "border-top-left-radius": "0px" });
    $(".navbar-toggler").removeClass("menu-open");
    $(".navbar-toggler").addClass("menu-btn");
    $(".menu-section").css({ "position": "static" });
    fixMenu();
  })
})

// nav media
// JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // dropdown-toggle elementlərinin hamısı
  var dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  // Hər bir dropdown-toggle-ı 
  dropdownToggles.forEach(function (toggle) {
      // Click eventini 
      toggle.addEventListener('click', function () {
          // toggleParent dəyişənində dropdown parent
          var toggleParent = this.parentElement;
          // Dropdown-menu-nu tap
          var dropdownMenu = toggleParent.querySelector('.dropdown-menu');
          
          // Dropdown-menu-nun display atribut
          var displayStyle = window.getComputedStyle(dropdownMenu).getPropertyValue('display');
          
          // Dropdown-menu-nun display atribut toggle 
          if (displayStyle === 'block') {
              dropdownMenu.style.display = 'none';
          } else {
              dropdownMenu.style.display = 'block';
          }
      });
  });
});


// like

document.addEventListener("DOMContentLoaded", function () {
  $('.like').on("click", function () {
    $(this).addClass("liked");
    $(this).siblings('.dislike').removeClass("disliked");
  });

  $('.dislike').on("click", function () {
    $(this).addClass("disliked");
    $(this).siblings('.like').removeClass("liked");
  });
});



// video
$("#owl-example").owlCarousel({
  navigation: true,
  items: 1,
  itemsDesktop: [1199, 1],
  itemsDesktop2: [992, 1],
  itemsDesktopSmall: [980, 1],
  itemsMiddle: [768, 1],
  itemsMobile: [600, 1],
  navigation: true,
  navigationText: ["", ""],
  pagination: true,
  autoPlay: true
});

// faydali link
var Lowl = $("#owl-demos");
Lowl.owlCarousel({
  items: 4, 
  itemsDesktop: [1000, 2], //5 items between 1000px and 901px
  itemsDesktopSmall: [991, 2], // 3 items betweem 900px and 601px
  itemsTablet: [600, 2], //2 items between 600 and 0;
  dots: true, stagePadding: Number, 
  loop: true, margin: 30, rtl: true, pagination: true,
  navigationText: ["", ""],
  pagination: true,
  autoPlay: true
});

// loader
var loader = document.querySelector('.loader');

var scrollPosition = [
    self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
];
var html = jQuery('html');
html.data('scroll-position', scrollPosition);
html.data('previous-overflow', html.css('overflow'));
html.css('overflow', 'hidden');
window.scrollTo(scrollPosition[0], scrollPosition[1]);

$(document).ready(function() {
    setTimeout(function() {
        var html = jQuery('html');
        var scrollPosition = html.data('scroll-position');
        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1]);
        loader.style.display = "none";
    }, 3000);

});
// faydali link
