/* main scripts */

// tootip configs
$('#tooltip').tooltip('hide');

$( document ).ready(function() {
  setTimeout(function(){ 
	$("[data-toggle='tooltip']").tooltip();
	console.warn('rodou');
  }, 2000);
});

console.warn('no javascript do tema');
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
