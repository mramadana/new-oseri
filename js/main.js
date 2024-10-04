$(window).on("load", function () {
    $(".loader")
      .delay(200)
      .fadeOut(2000, function () {
        $("body").css("overflow", "auto");
      });
  });
  
  $(document).ready(function () {
      "use strict";
      let isRtl = $('html[lang="ar"]').length > 0;
  
      const select = (el, all = false) => {
        el = el.trim()
        if (all) {
          return [...document.querySelectorAll(el)]
        } else {
          return document.querySelector(el)
        }
      };
      const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
      }

      aos_init();
  
      function aos_init() {
        AOS.init({
          duration: 1000,
          easing: "ease-in-out",
          once: true,
          mirror: false
        });
      }
      
    // start to our-work-slid
  $('.our-work-slid').owlCarousel({
      items: 3,
      loop: true,
      rtl: isRtl,
      center: true,
      margin: 30,
      autoplay: true,
      autoplaySpeed: 1000,
      autoplayTimeout: 4000,
      smartSpeed: 1000,
      dragEndSpeed: 1500,
      animateOut: 'fadeOut', // تأثير الخفاء عند الخروج
      animateIn: 'fadeIn',
      nav: false,
      dots: true,
      responsive:{
          0:{
              items:1,
              nav: false,
              autoplay: true,
              autoplaySpeed: 3000,
              autoplayTimeout: 5000,
              smartSpeed: 2000,
              dots: false,
              autoplay: false,
              center: false
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  })

  // start to client slider

  $(".client-slider").owlCarousel({
    items: 4,
    loop: true,
    rtl: isRtl,
    margin: 20,
    nav: false,
    stagePadding: 0,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    dots: false,
    nav: false,
    responsive: {
      320: {
        items: 2,
      },

      576: {
        items: 3,
      },

      1440: {
        items: 4,
      },
    },
  });
  
  
      // animation aos init
  
      
  
  // when click to responsive btn show ul and overlay
      $(".nav-btn").click(function() {
        $(this).addClass('active');
        $(".nav-links").addClass('active');
        $(".nav-overlay").addClass('show')
      })
  
      // when i click on overlay remove class show and remove ul
  
      $(".nav-overlay, .header-m-line-start").click(function() {
        $(".nav-btn").removeClass('active');
        $(".nav-links").removeClass('active');
        $(".nav-overlay").removeClass('show')
      })
  
      //   start to back-to-top button
      $(window).scroll(function() {
          if($(window).scrollTop() > 50) {
              $(".back-to-top").addClass('show')
          } else {
              $(".back-to-top").removeClass('show')
          }
      });
    
      // when i click back-to-top
      $(".back-to-top").click(function() {
          $("html").scrollTop(0);
      });
  
    $(':input[type="number"]').on("input", function() {
      var nonNumReg = /[^0-9]/g
      $(this).val($(this).val().replace(nonNumReg, ''));
    })
  
  
    let isFixed = function () {
  
      if ($(window).scrollTop() > 50) {
        $(".header").addClass("fixed");
        $(".top-header").addClass("unactive");
  
      } else {
        $(".header").removeClass("fixed");
        $(".top-header").removeClass("unactive");
  
      }
    };
  
    isFixed();
  
    $(window).on("scroll", function () {
      isFixed();
    });
  
    let navbarlinks = select('#navbar .link', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)
  
    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let header = select('#header')
      let offset = header.offsetHeight
  
      if (!header.classList.contains('header-scrolled')) {
        offset -= 10
      }
  
      let elementPos = select(el).offsetTop
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      })
    }    
  });