// -------------------------
// ANIMATIONS
// -------------------------

// Variables
// Calc Window Height
var winHeight = $(window).height();
var winWidth = $(window).width();
var docHeight = $(document).height();
var mq = window.matchMedia("(max-width: 768px)").matches;
var currentGallery = {
  'location': ['' , 'Nueva Delhi' , 'Uttar Pradesh']
};

var video = [
  document.getElementById("video00"),
  document.getElementById("video01"),
  document.getElementById("video02"),
];

$(document).ready(function(){
  // Loader
  // Loader progressBar
  var width = 100, // width of a progress bar in percentage
    perfData = window.performance.timing, // The PerformanceTiming interface
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart), // Calculated Estimated Time of Page Load which returns negative value.
    time = parseInt((EstimatedTime/1000)%60)*100; //Converting EstimatedTime from miliseconds to seconds.

  // Loadbar Animation
  $(".loadbar").animate({
    width: width + "%"
  }, time);
  // Loadbar Glow Animation
  $(".glow").animate({
    width: width + "%"
  }, time);

  // Percentage Increment Animation
  var PercentageID = $("#precent"),
      start = 0,
      end = 100,
      durataion = time;
      animateValue(PercentageID, start, end, durataion);

  function animateValue(id, start, end, duration) {
    var range = end - start,
      current = start,
      increment = end > start? 1 : -1,
      stepTime = Math.abs(Math.floor(duration / range)),
      obj = $(id);
    var timer = setInterval(function() {
      current += increment;
      $(obj).text(current + "%");
      //obj.innerHTML = current;
      if (current == end) {
        clearInterval(timer);

        // Fading In DOM on Finised
        $(".loader").fadeOut(600);
        $('#page-content-wrapper').fadeIn(600);
        console.log("timer ended");

      }
    }, stepTime);
  }

  $(window).on("load", function() {
    console.log("window loaded");
  })

  // Sidebar Wrapper TOGGLE
  $(".navbar-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("sidebar-toggle");
      $('.navbar-right').fadeToggle();
  });
  $("#sidebar-closebox").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("sidebar-toggle");
      $('.navbar-right').fadeToggle();
  });
  
  // Go to SIDEBAR
  function scrollToAnchor(aid){
     var aTag = $("#"+ aid);
     $('html,body').animate({scrollTop: aTag.offset().top-100},'slow');
  }

  $('.gotop').click(function(){
    scrollToAnchor('wrapper');
  });

  // Dropdown
  $('.project-logo').click(function(){
    $('body').toggleClass('project-dropdown--active');
    $('.dropdown-hover').fadeToggle();
  });
  $('.fullpage').click(function(){
    $('body').removeClass('project-dropdown--active');
    $('.dropdown-hover').fadeOut(300);
  });

  // Dropper
  $('.dropper').click(function(){
    $('.drop').slideToggle();
    $('.dropper i').toggleClass('rotate180');
  });



  // Scroll transition
  $(function(){
    var hasBeenTrigged = false;
    $(window).scroll(function() {
      if(mq){
        if ($(this).scrollTop() >= 230 && !hasBeenTrigged) {
          $('#navbar').addClass('navbar-shrink');
          hasBeenTrigged = true;
        }else if(($(this).scrollTop() <= 230)){
          $('#navbar').removeClass('navbar-shrink');
          hasBeenTrigged = false;
        }
      }else{
        if ($(this).scrollTop() >= 530 && !hasBeenTrigged) {
          $('#navbar').addClass('navbar-shrink');
          hasBeenTrigged = true;
        }else if(($(this).scrollTop() <= 530)){
          $('#navbar').removeClass('navbar-shrink');
          hasBeenTrigged = false;
        }
      }
    });
  });

  // Slick Slider
  var activeSlick =  function(){
    console.log('initiated');
    $('.slick-slider--01').slick({
      dots: false,
      lazyLoad: 'ondemand',
      fade: false,
      cssEase: 'ease-in-out',
      infinite: true,
      autoplay: false,
      speed: 500,
      arrows: true,
      accessibility: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  }();

  $('.modal-img').on('shown.bs.modal', function (e) {
    $('.slick-slider--01').slick("refresh");
  });

  $('.slick-slider--01').on('afterChange', function(event, slick, currentSlide, nextSlide){
    var slickCurrentSlide = parseInt($('.slick-slider--01').slick("slickCurrentSlide")) + 1;
    console.log(slickCurrentSlide + ' after add');
    $('.current').html(slickCurrentSlide);
    console.log(currentGallery.location[slickCurrentSlide]);
    $('.title').html(currentGallery.location[slickCurrentSlide]);
  });

  
  // video controls
  $('.media-content').click(function(){
    data_media = $(this).attr('data-media');
    video_number = $('.video-livebox--container').attr('data-video');
    $('.video-livebox--container[data-video = ' + data_media + ']').fadeIn();
    console.log('play data media number' + ' ' + data_media);
    

    setTimeout(function(){
      console.log(video[data_media]);
      video[data_media].play();
    }, 600);
  });

  $('.close-button').click(function(){
    data_close = $(this).attr('data-close');
    $('.video-livebox--container').fadeOut();
    console.log('pause video number' + ' ' + data_close);
    setTimeout(function(){
      console.log(video[data_close]);
      video[data_close].pause();
    }, 600);
  });

  // CirclePointer
  $(".go-top--section").mouseenter(
    function() {
      console.log("hasBeenTrigged");
      $('.circle-pointer').toggleClass("slideDown");
    }
  );  

  $('.moveSectionDown').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveSectionDown();
  });

  // Full Page
  $('#fullpage').fullpage({
    verticalCentered: false,

    // //Navigation
    // menu: '#menu',
    // lockAnchors: false,
    // anchors:['section-00', 'section-01'],
    // navigation: true,
    // navigationPosition: 'right',
    // navigationTooltips: ['firstSlide', 'secondSlide'],
    // showActiveTooltip: false,
    // slidesNavigation: false,
    // slidesNavPosition: 'bottom',

    // //Scrolling
    // css3: true,
    // scrollingSpeed: 700,

    // make the web flow by sections
    autoScrolling: true,

    // make the section scrollable
    scrollOverflow: true,

    // fitToSection: true,
    fitToSectionDelay: 100,
    // scrollBar: false,
    // easing: 'easeInOutCubic',
    // easingcss3: 'ease',

    // go top
    loopBottom: true,
    loopTop: true,
    // loopHorizontal: true,
    // continuousVertical: false,
    // continuousHorizontal: false,
    // scrollHorizontally: false,
    // interlockedSlides: false,
    // dragAndMove: false,
    // offsetSections: false,
    // resetSliders: false,
    // fadingEffect: true,
    // normalScrollElements: '.slide , .element2',
    scrollOverflow: true,
    scrollOverflowReset: true,
    // scrollOverflowOptions: null,
    // touchSensitivity: 15,
    // normalScrollElementTouchThreshold: 5,
    // bigSectionsDestination: null,

    // //Accessibility
    // keyboardScrolling: true,
    // animateAnchor: true,
    // recordHistory: true,

    // //Design
    controlArrows: true,
    verticalCentered: true,
    sectionsColor : ['', ''],
    // paddingTop: '3em',
    // paddingBottom: '3em',
    fixedElements: '.arrow-container , .cest-shadow , .main-button--container',
    // responsiveWidth: 0,
    // responsiveHeight: 0,
    // responsiveSlides: false,
    parallax: true,
    parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

    // //Custom selectors
    // sectionSelector: '.section',
    slideSelector: '.slide',

    // lazyLoading: true,

    // //events
    // onLeave: function(index, nextIndex, direction){},
    afterLoad: function(anchorLink, index){
      if(index == 1){
        data_media = 0;
        video_number = 0;
        video[data_media].play();
        $('.main-button--container .play-stop .fa-pause').fadeToggle();
        $('.main-button--container .play-stop .fa-play').fadeToggle();
      }
      if(index == 2){
        data_media = 1;
        video_number = 1;

        $('.section-02').addClass('cest-active');
      }
      if(index == 3){
        data_media = 2;
        video_number = 2;

        $('.section-03').addClass('cest-active');
      }
    },

    // easingcss3: 'cubic-bezier(0.575, 0.885, 0.520, 1.275)',

    // afterRender: function(){},
    // afterResize: function(){},
    // afterResponsive: function(isResponsive){},
    // afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
    // onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
  });
  
});


// Video Controller
var videoController = (function(){
   
  var replayVideo = function(){
    if(video[video_number].ended){
      video[video_number].play();
      console.log('The has been replayed');
    }
  }

  // Pause video when scape is touch on keyboard
  $(document).keyup(function(e) {
    if (e.keyCode == 27) { // escape key maps to keycode `27`
      // video[data_media].pause();
    }
  });

  $('.seek-10').click(function(){
    video[video_number].currentTime = video[video_number].currentTime - 10;
    console.log(video[video_number].currentTime);
    console.log('Video number' + video[video_number] + ' Seeked -10 secs!');
  });

  $('.volume').click(function(){
    $('.volume i').toggle();
    var clickVol = (function clickVolume() { 
      if (video[video_number].muted == true) {
        console.log('audio unmute');
        video[video_number].muted = false;
      } else if (video[video_number].muted == false){
        console.log('audio muted');
        video[video_number].muted = true;
      }
    })();
  });

  $('.video').click(function(){
    var clickPlay = (function clickVolume() { 
      if (video[data_media].paused == true) {
        console.log('video number ' + data_media + ' play');
        video[data_media].play();
        $('.video-container .play-stop').fadeToggle();
        $('.video-container .play-stop .fa-play , .main-button--container .play-stop .fa-play').fadeToggle();
        $('.main-button--container .play-stop .fa-pause').fadeToggle();
        setTimeout(function() {
          $('.video-container .play-stop').fadeToggle();
          $('.video-container .play-stop .fa-play').fadeToggle();
        }, 300);
      } else if (video[data_media].paused == false){
        console.log('video number ' + data_media + ' pause');
        video[data_media].pause();
        $('.video-container .play-stop').fadeToggle();
        $('.video-container .play-stop .fa-pause , .main-button--container .play-stop .fa-pause').fadeToggle();
        $('.main-button--container .play-stop .fa-play').fadeToggle();
        setTimeout(function() {
          $('.video-container .play-stop').fadeToggle();
          $('.video-container .play-stop .fa-pause').fadeToggle();
        }, 300);
      }
    })();
  });

  $('.main-button--container .play-stop').click(function(){
    var clickPlay = (function clickVolume() {   
      if (video[data_media].paused == true) {
        console.log('video number ' + data_media + ' play');
        video[data_media].play();
        $('.main-button--container .play-stop .fa-play').fadeToggle();
        $('.main-button--container .play-stop .fa-pause').fadeToggle();
      } else if (video[data_media].paused == false){
        console.log('video number ' + data_media + ' pause');
        video[data_media].pause();
        $('.main-button--container .play-stop .fa-pause').fadeToggle();
        $('.main-button--container .play-stop .fa-play').fadeToggle();
      }
    })();
  });

})();


// // Add your code below this line!
// var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
// var xhr = new XMLHttpRequest();
// xhr.open("GET", requestURL, false);

// // xhr.responseType = 'json';
// xhr.send();

// // Add your code above this line!

// console.log(xhr.status);
// console.log(xhr.statusText);


function callAjax(){
  var url = "http://localhost:1337/search/";
  $.ajax({
    url: url,
    success: function(data) {
      $('.tfclear').append(data); 
    },
    error: function(err){
      // throw error
    }
  });
}

$('.tfbutton').on('click', function(){
   callAjax();
});


