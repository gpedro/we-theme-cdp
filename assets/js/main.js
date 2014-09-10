/* main scripts */

// tootip configs
$('#tooltip').tooltip('hide');

// Ember breadcrumbs configs
window.BreadCrumbs.BreadCrumbsComponent.reopen({
  tagName: 'ol',
  classNames: ['breadcrumb'],
  // use application/templates/components/bread-crumbs.hbs template
  layout: null
});

/**
 * Home page slideshow
 */
$(document).ready(function(){
  var percent = 0,
    bar = $('.transition-timer-carousel-progress-bar'),
    crsl = $('#home-carousel');

  function progressBarCarousel() {
    bar.css({width:percent+'%'});
    percent = percent +0.5;
    if (percent>100) {
        percent=0;
        crsl.carousel('next');
    }
  }

  crsl.carousel({
    interval: false,
    pause: false
  }).on('slid.bs.carousel', function () {});

  var barInterval = setInterval(progressBarCarousel, 30);
});