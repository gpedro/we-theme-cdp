/* main scripts */

// tootip configs
$('#tooltip').tooltip('hide');

$( document ).ready(function() {
  setTimeout(function(){ 
	$('body').tooltip({
	   selector: "[data-toggle='tooltip']"
	});
  }, 2000);
});

// Ember breadcrumbs configs
window.BreadCrumbs.BreadCrumbsComponent.reopen({
  tagName: 'ol',
  classNames: ['breadcrumb'],
  // use application/templates/components/bread-crumbs.hbs template
  layout: null
});

/*! iFrame Resizer (iframeSizer.min.js ) - v2.8.6 - 2015-04-06
 *  Desc: Force cross domain iframes to size to content.
 *  Requires: iframeResizer.contentWindow.min.js to be loaded into the target frame.
 *  Copyright: (c) 2015 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

!function(){"use strict";function a(a,b,c){"addEventListener"in window?a.addEventListener(b,c,!1):"attachEvent"in window&&a.attachEvent("on"+b,c)}function b(){var a,b=["moz","webkit","o","ms"];for(a=0;a<b.length&&!A;a+=1)A=window[b[a]+"RequestAnimationFrame"];A||e(" RequestAnimationFrame not supported")}function c(){var a="Host page";return window.top!==window.self&&(a=window.parentIFrame?window.parentIFrame.getId():"Nested host page"),a}function d(a){return x+"["+c()+"]"+a}function e(a){u&&"object"==typeof window.console&&console.log(d(a))}function f(a){"object"==typeof window.console&&console.warn(d(a))}function g(a){function b(){function a(){k(F),i(),C[G].resizedCallback(F)}g("Height"),g("Width"),l(a,F,"resetPage")}function c(a){var b=a.id;e(" Removing iFrame: "+b),a.parentNode.removeChild(a),C[b].closedCallback(b),delete C[b],e(" --")}function d(){var a=E.substr(y).split(":");return{iframe:document.getElementById(a[0]),id:a[0],height:a[1],width:a[2],type:a[3]}}function g(a){var b=Number(C[G]["max"+a]),c=Number(C[G]["min"+a]),d=a.toLowerCase(),f=Number(F[d]);if(c>b)throw new Error("Value for min"+a+" can not be greater than max"+a);e(" Checking "+d+" is in range "+c+"-"+b),c>f&&(f=c,e(" Set "+d+" to min value")),f>b&&(f=b,e(" Set "+d+" to max value")),F[d]=""+f}function m(){var b=a.origin,c=F.iframe.src.split("/").slice(0,3).join("/");if(C[G].checkOrigin&&(e(" Checking connection is from: "+c),""+b!="null"&&b!==c))throw new Error("Unexpected message received from: "+b+" for "+F.iframe.id+". Message was: "+a.data+". This error can be disabled by adding the checkOrigin: false option.");return!0}function n(){return x===(""+E).substr(0,y)}function o(){var a=F.type in{"true":1,"false":1};return a&&e(" Ignoring init message from meta parent page"),a}function p(a){return E.substr(E.indexOf(":")+w+a)}function q(a){e(" MessageCallback passed: {iframe: "+F.iframe.id+", message: "+a+"}"),C[G].messageCallback({iframe:F.iframe,message:JSON.parse(a)}),e(" --")}function r(){return null===F.iframe?(f(" IFrame ("+F.id+") not found"),!1):!0}function s(a){var b=a.getBoundingClientRect();return h(),{x:parseInt(b.left,10)+parseInt(z.x,10),y:parseInt(b.top,10)+parseInt(z.y,10)}}function v(a){function b(){z=g,A(),e(" --")}function c(){return{x:Number(F.width)+d.x,y:Number(F.height)+d.y}}var d=a?s(F.iframe):{x:0,y:0},g=c();e(" Reposition requested from iFrame (offset x:"+d.x+" y:"+d.y+")"),window.top!==window.self?window.parentIFrame?a?parentIFrame.scrollToOffset(g.x,g.y):parentIFrame.scrollTo(F.width,F.height):f(" Unable to scroll to requested position, window.parentIFrame not found"):b()}function A(){!1!==C[G].scrollCallback(z)&&i()}function B(a){function b(a){var b=s(a);e(" Moving to in page link (#"+c+") at x: "+b.x+" y: "+b.y),z={x:b.x,y:b.y},A(),e(" --")}var c=a.split("#")[1]||"",d=decodeURIComponent(c),f=document.getElementById(d)||document.getElementsByName(d)[0];window.top!==window.self?window.parentIFrame?parentIFrame.moveToAnchor(c):e(" In page link #"+c+" not found and window.parentIFrame not found"):f?b(f):e(" In page link #"+c+" not found")}function D(){switch(F.type){case"close":c(F.iframe);break;case"message":q(p(6));break;case"scrollTo":v(!1);break;case"scrollToOffset":v(!0);break;case"inPageLink":B(p(9));break;case"reset":j(F);break;case"init":b(),C[G].initCallback(F.iframe);break;default:b()}}var E=a.data,F={},G=null;n()&&(F=d(),G=F.id,u=C[G].log,e(" Received: "+E),!o()&&r()&&m()&&(D(),t=!1))}function h(){null===z&&(z={x:void 0!==window.pageXOffset?window.pageXOffset:document.documentElement.scrollLeft,y:void 0!==window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop},e(" Get page position: "+z.x+","+z.y))}function i(){null!==z&&(window.scrollTo(z.x,z.y),e(" Set page position: "+z.x+","+z.y),z=null)}function j(a){function b(){k(a),m("reset","reset",a.iframe,a.id)}e(" Size reset requested by "+("init"===a.type?"host page":"iFrame")),h(),l(b,a,"init")}function k(a){function b(b){a.iframe.style[b]=a[b]+"px",e(" IFrame ("+c+") "+b+" set to "+a[b]+"px")}var c=a.iframe.id;C[c].sizeHeight&&b("height"),C[c].sizeWidth&&b("width")}function l(a,b,c){c!==b.type&&A?(e(" Requesting animation frame"),A(a)):a()}function m(a,b,c,d){c&&c.contentWindow?(e("["+a+"] Sending msg to iframe ("+b+")"),c.contentWindow.postMessage(x+b,"*")):(f("["+a+"] IFrame not found"),C[d]&&delete C[d])}function n(b){function c(){function a(a){1/0!==C[o][a]&&0!==C[o][a]&&(n.style[a]=C[o][a]+"px",e(" Set "+a+" = "+C[o][a]+"px"))}a("maxHeight"),a("minHeight"),a("maxWidth"),a("minWidth")}function d(a){return""===a&&(n.id=a="iFrameResizer"+s++,u=(b||{}).log,e(" Added missing iframe ID: "+a+" ("+n.src+")")),a}function f(){e(" IFrame scrolling "+(C[o].scrolling?"enabled":"disabled")+" for "+o),n.style.overflow=!1===C[o].scrolling?"hidden":"auto",n.scrolling=!1===C[o].scrolling?"no":"yes"}function g(){("number"==typeof C[o].bodyMargin||"0"===C[o].bodyMargin)&&(C[o].bodyMarginV1=C[o].bodyMargin,C[o].bodyMargin=""+C[o].bodyMargin+"px")}function h(){return o+":"+C[o].bodyMarginV1+":"+C[o].sizeWidth+":"+C[o].log+":"+C[o].interval+":"+C[o].enablePublicMethods+":"+C[o].autoResize+":"+C[o].bodyMargin+":"+C[o].heightCalculationMethod+":"+C[o].bodyBackground+":"+C[o].bodyPadding+":"+C[o].tolerance+":"+C[o].enableInPageLinks+":"+C[o].resizeFrom}function i(b){a(n,"load",function(){var a=t;m("iFrame.onload",b,n),!a&&C[o].heightCalculationMethod in B&&j({iframe:n,height:0,width:0,type:"init"})}),m("init",b,n)}function k(a){if("object"!=typeof a)throw new TypeError("Options is not an object.")}function l(a){a=a||{},C[o]={},k(a);for(var b in E)E.hasOwnProperty(b)&&(C[o][b]=a.hasOwnProperty(b)?a[b]:E[b]);u=C[o].log}var n=this,o=d(n.id);l(b),f(),c(),g(),i(h())}function o(a,b){null===D&&(D=setTimeout(function(){D=null,a()},b))}function p(){o(function(){for(var a in C)"parent"===C[a].resizeFrom&&m("Window resize","resize",document.getElementById(a),a)},66)}function q(){function a(a,b){if(!a.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==a.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+a.tagName+">.");n.call(a,b)}return function(b,c){switch(typeof c){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(c||"iframe"),function(c){a(c,b)});break;case"object":a(c,b);break;default:throw new TypeError("Unexpected data type ("+typeof c+").")}}}function r(a){a.fn.iFrameResize=function(a){return this.filter("iframe").each(function(b,c){n.call(c,a)}).end()}}var s=0,t=!0,u=!1,v="message",w=v.length,x="[iFrameSizer]",y=x.length,z=null,A=window.requestAnimationFrame,B={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},C={},D=null,E={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,enableInPageLinks:!1,enablePublicMethods:!1,heightCalculationMethod:"offset",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,tolerance:0,closedCallback:function(){},initCallback:function(){},messageCallback:function(){},resizedCallback:function(){},scrollCallback:function(){return!0}};b(),a(window,"message",g),a(window,"resize",p),window.jQuery&&r(jQuery),"function"==typeof define&&define.amd?define([],q):"object"==typeof module&&"object"==typeof module.exports?module.exports=q():window.iFrameResize=q()}();
//# sourceMappingURL=iframeResizer.map

/**
 * Home page slideshow
 */
 // $('.carousel').carousel({
 //   interval: 9000,
 //   pause: 'none'
 // })




/*
 * File: jquery.flexisel.js
 * Version: 1.0.2
 * Description: Responsive carousel jQuery plugin
 * Author: 9bit Studios
 * Copyright 2012, 9bit Studios
 * http://www.9bitstudios.com
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function ($) {
    $.fn.flexisel = function(options) {
	
        var defaults = $.extend({
            visibleItems : 4,
            animationSpeed : 200,
            autoPlay : false,
            autoPlaySpeed : 3000,
            pauseOnHover : true,
            setMaxWidthAndHeight : false,
            enableResponsiveBreakpoints : true,
            flipPage: false,
            clone : true,
            responsiveBreakpoints : {
                portrait: { 
                    changePoint:480,
                    visibleItems: 1
                }, 
                landscape: { 
                    changePoint:640,
                    visibleItems: 2
                },
                tablet: { 
                    changePoint:768,
                    visibleItems: 3
                }
            }
        }, options);
        
        /******************************
        Private Variables
         *******************************/
         
        var object = $(this);
        var settings = $.extend(defaults, options);
        var itemsWidth; // Declare the global width of each item in carousel
        var canNavigate = true;
        var itemsVisible = settings.visibleItems; // Get visible items
        var totalItems = object.children().length; // Get number of elements
        var responsivePoints = [];
        
        /******************************
        Public Methods
        *******************************/
        var methods = {
            init : function() {
                return this.each(function() {
                    methods.appendHTML();
                    methods.setEventHandlers();
                    methods.initializeItems();
                });
            },
		    
            /******************************
            Initialize Items
            Fully initialize everything. Plugin is loaded and ready after finishing execution
	    *******************************/
            initializeItems : function() {

                var listParent = object.parent();
                var innerHeight = listParent.height();
                var childSet = object.children();
                methods.sortResponsiveObject(settings.responsiveBreakpoints);
                
                var innerWidth = listParent.width(); // Set widths
                itemsWidth = (innerWidth) / itemsVisible;
                childSet.width(itemsWidth);        
                if (settings.clone) {
                    childSet.last().insertBefore(childSet.first());
                    childSet.last().insertBefore(childSet.first());
                    object.css({
                        'left' : -itemsWidth
                    });
                }

                object.fadeIn();
                $(window).trigger("resize"); // needed to position arrows correctly

            },
            
	    /******************************
            Append HTML
            Add additional markup needed by plugin to the DOM
	    *******************************/
            appendHTML : function() {
                object.addClass("nbs-flexisel-ul");
                object.wrap("<div class='nbs-flexisel-container'><div class='nbs-flexisel-inner'></div></div>");
                object.find("li").addClass("nbs-flexisel-item");

                var flexiselInner = object.parent(); // flexisel-inner

                if (settings.setMaxWidthAndHeight) {
                    var baseWidth = $(".nbs-flexisel-item img").width();
                    var baseHeight = $(".nbs-flexisel-item img").height();
                    $(".nbs-flexisel-item img").css("max-width", baseWidth);
                    $(".nbs-flexisel-item img").css("max-height", baseHeight);
                }
                $("<div class='nbs-flexisel-nav-left'></div><div class='nbs-flexisel-nav-right'></div>").insertAfter(flexiselInner);
                if (settings.clone) {
                    var cloneContent = object.children().clone();
                    object.append(cloneContent);
                }
            },
            /******************************
            Set Event Handlers
	    Set events: click, resize, etc
            *******************************/
            setEventHandlers : function() {

                var listParent = object.parent();
                var flexiselInner = listParent.parent();
                var childSet = object.children();
                var leftArrow = flexiselInner.find(".nbs-flexisel-nav-left");
                var rightArrow = flexiselInner.find(".nbs-flexisel-nav-right");

                $(window).on("resize", function(event) {

                    methods.setResponsiveEvents();

                    var innerWidth = $(listParent).width();
                    var innerHeight = $(listParent).height();

                    itemsWidth = (innerWidth) / itemsVisible;

                    childSet.width(itemsWidth);
                    if (settings.clone) {
                        object.css({
                            'left' : -itemsWidth                            
                        });
                    }else {
                        object.css({
                            'left' : 0
                        });
                    }

                    // Hide the arrows if the elements are the same of the visible
                    if (!settings.clone && totalItems <= itemsVisible) {
                      leftArrow.add(rightArrow).css('visibility', 'hidden');
                    }
                    else {
                      leftArrow.add(rightArrow).css('visibility', 'visible');

                      var halfArrowHeight = (leftArrow.height()) / 2;
                      var arrowMargin = (innerHeight / 2) - halfArrowHeight;
                      leftArrow.css("top", arrowMargin + "px");
                      rightArrow.css("top", arrowMargin + "px");
                    }

                });
                $(leftArrow).on("click", function(event) {
                    methods.scrollLeft();
                });
                $(rightArrow).on("click", function(event) {
                    methods.scrollRight();
                });
                if (settings.pauseOnHover == true) {
                    $(".nbs-flexisel-item").on({
                        mouseenter : function() {
                            canNavigate = false;
                        },
                        mouseleave : function() {
                            canNavigate = true;
                        }
                    });
                }
                if (settings.autoPlay == true) {

                    setInterval(function() {
                        if (canNavigate == true)
                            methods.scrollRight();
                    }, settings.autoPlaySpeed);
                }

            },
            /******************************
            Set Responsive Events
            Set breakpoints depending on responsiveBreakpoints
            *******************************/            
            
            setResponsiveEvents: function() {
                var contentWidth = $('html').width();
                
                if(settings.enableResponsiveBreakpoints) {
                    
                    var largestCustom = responsivePoints[responsivePoints.length-1].changePoint; // sorted array 
                    
                    for(var i in responsivePoints) {
                        
                        if(contentWidth >= largestCustom) { // set to default if width greater than largest custom responsiveBreakpoint 
                            itemsVisible = settings.visibleItems;
                            break;
                        }
                        else { // determine custom responsiveBreakpoint to use
                        
                            if(contentWidth < responsivePoints[i].changePoint) {
                                itemsVisible = responsivePoints[i].visibleItems;
                                break;
                            }
                            else
                                continue;
                        }
                    }
                }
            },

            /******************************
            Sort Responsive Object
            Gets all the settings in resposiveBreakpoints and sorts them into an array
            *******************************/            
            
            sortResponsiveObject: function(obj) {
                
                var responsiveObjects = [];
                
                for(var i in obj) {
                    responsiveObjects.push(obj[i]);
                }
                
                responsiveObjects.sort(function(a, b) {
                    return a.changePoint - b.changePoint;
                });
            
                responsivePoints = responsiveObjects;
            },
            
            /******************************
            Scroll Left
            *******************************/
            scrollLeft : function() {
                if (object.position().left < 0) {
                    if (canNavigate == true) {
                        canNavigate = false;

                        var listParent = object.parent();
                        var innerWidth = listParent.width();

                        itemsWidth = (innerWidth) / itemsVisible;

                        var childSet = object.children();
			var increment = (settings.flipPage)? innerWidth: itemsWidth;
			
                        object.animate({
                            'left' : "+=" + increment
                        }, {
                            queue : false,
                            duration : settings.animationSpeed,
                            easing : "linear",
                            complete : function() {
                                if (settings.clone) {
                                    childSet.last().insertBefore(
                                            childSet.first()); // Get the first list item and put it after the last list item (that's how the infinite effects is made)                                   
                                }
                                methods.adjustScroll();
                                canNavigate = true;
                            }
                        });
                    }
                }
            },
            /******************************
            Scroll Right
            *******************************/            
            scrollRight : function() {
                var listParent = object.parent();
                var innerWidth = listParent.width();

                itemsWidth = (innerWidth) / itemsVisible;

                var difObject = (itemsWidth - innerWidth);
                var objPosition = (object.position().left + ((totalItems-itemsVisible)*itemsWidth)-innerWidth);    
                
                var increment = (settings.flipPage)? innerWidth: itemsWidth;
                
                if((difObject <= Math.ceil(objPosition)) && (!settings.clone)){
                    if (canNavigate == true) {
                        canNavigate = false;                    
    
                        object.animate({
                            'left' : "-=" + increment
                        }, {
                            queue : false,
                            duration : settings.animationSpeed,
                            easing : "linear",
                            complete : function() {                                
                                methods.adjustScroll();
                                canNavigate = true;
                            }
                        });
                    }
                } else if(settings.clone){
                    if (canNavigate == true) {
                        canNavigate = false;
    
                        var childSet = object.children();
    
                        object.animate({
                            'left' : "-=" + increment
                        }, {
                            queue : false,
                            duration : settings.animationSpeed,
                            easing : "linear",
                            complete : function() {                                
                                    childSet.first().insertAfter(childSet.last()); // Get the first list item and put it after the last list item (that's how the infinite effects is made)                                
                                methods.adjustScroll();
                                canNavigate = true;
                            }
                        });
                    }
                };                
            },
            /******************************
            Adjust Scroll 
             *******************************/
            adjustScroll : function() {
                var listParent = object.parent();
                var childSet = object.children();

                var innerWidth = listParent.width();
                itemsWidth = (innerWidth) / itemsVisible;
                childSet.width(itemsWidth);
                
                var increment = (settings.flipPage)? innerWidth: itemsWidth;
                
                if (settings.clone) {
                    object.css({
                        'left' : -increment
                    });
                }
            }
        };
        if (methods[options]) { // $("#element").pluginName('methodName', 'arg1', 'arg2');
            return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof options === 'object' || !options) { // $("#element").pluginName({ option: 1, option:2 });
            return methods.init.apply(this);
        } else {
            $.error('Method "' + method + '" does not exist in flexisel plugin!');
        }
    };

})(jQuery);


