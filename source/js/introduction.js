$(document).ready(function() {
  // FULLPAGE
  $('#fullpage').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors: ["section1","section2","section3","section4","section5","section6", "section7", "section8", "designing", "framework", "learn-more"],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ["Section 1","Section 2","Section 3","Section 4","Section 5","Section 6", "Section 7", "Section 8", "Designing", "Framework", "Learn More"],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',

    //Scrolling
    css3: true,
    scrollingSpeed: 1000,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: true,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: true,
    scrollHorizontally: true,
    scrollHorizontallyKey: 'ZGF0YWNvbGxhYm9yYXRpdmVzLm9yZ19NeFdjMk55YjJ4c1NHOXlhWHB2Ym5SaGJHeDVyMTU=',
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: 'nav',
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    bigSectionsDestination: null,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    // sectionsColor : ['#ccc', '#fff'],
    // paddingTop: '3em',
    // paddingBottom: '50px',
    // fixedElements: '.top-bar',
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true,

    //events
    onLeave: function(index, nextIndex, direction){},
    afterLoad: function(anchorLink, index){},
    afterRender: function(){},
    afterResize: function(){},
    afterResponsive: function(isResponsive){},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
  }); //END FULL PAGE

  // Fix nav menu when using fullpage
  $('#fullpage').click(function () {
      $('.js-active').removeClass('js-active');
      $('.js-active-menu').removeClass('js-active-menu');
  });
});