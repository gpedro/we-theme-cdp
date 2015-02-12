/* main scripts */

// tootip configs
$('#tooltip').tooltip('hide');

$( document ).ready(function() {
  setTimeout(function(){ 
	$("[data-toggle='tooltip']").tooltip();
  }, 2000);
});

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
 // $('.carousel').carousel({
 //   interval: 9000,
 //   pause: 'none'
 // })
