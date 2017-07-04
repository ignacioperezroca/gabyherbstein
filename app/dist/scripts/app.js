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
      }
    }, stepTime);
  }
  
  $('.sk-folding-cube').css('top' , ((winHeight / 2) - 40));
    // $(window).on("load", function() {
    //   console.log("imgs loaded");
    //   $(".loader").fadeOut(600);
    //   $('#page-content-wrapper').fadeIn(600);
    // })
    // Fading Out Loadbar on Finised
  setTimeout(function(){
    $('.loader').fadeOut(300);
  }, time);


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

  $(document).keyup(function(e) {
    if (e.keyCode == 27) { // escape key maps to keycode `27`
      $('.video-livebox--container').fadeOut();
      data_media = $('.video-livebox--container').attr('data-video');
      console.log('pause video number' + ' ' + data_media);
      setTimeout(function(){
        console.log(video[data_media]);
        video[data_media].pause();
      }, 600);
    }
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
        $('.play-stop').fadeIn();
        $('.play-stop .fa-play').fadeIn();
        setTimeout(function() {
          $('.play-stop').fadeOut();
          $('.play-stop .fa-play').fadeOut();
        }, 300);
      } else if (video[data_media].paused == false){
        console.log('video number ' + data_media + ' pause');
        video[data_media].pause();
        $('.play-stop').fadeIn();
        $('.play-stop .fa-pause').fadeIn();
        setTimeout(function() {
          $('.play-stop').fadeOut();
          $('.play-stop .fa-pause').fadeOut();
        }, 300);
      }
    })();
  });















 // $('#video').on('loadstart', function (event) {
 //    console.log('loading added');
 //    $(this).addClass('loading');
 //  });

  // $('.modal-video').on('shown.bs.modal', function (e) {
  //   video_number = $(this).attr('data-video');
  //   console.log('play video number' + ' ' + video_number);
  //   video[video_number].play();
  // });

  // $('.modal-video').on('hidden.bs.modal', function (e) {
  //   video_number = $(this).attr('data-video');
  //   console.log('stop video number' + ' ' + video_number);
  //   video[video_number].pause();
  // });


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
    // anchors:['firstPage', 'secondPage'],
    // navigation: true,
    navigationPosition: 'right',
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
    fixedElements: '.arrow-container , .pipo',
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
      if(index == 2){
        $('.section-02').addClass('cest-active');
      }
      if(index == 3){
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

