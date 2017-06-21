//jQuery is required to run this code
// $( document ).ready(function() {
//
//     scaleVideoContainer();
//
//     initBannerVideoSize('.video-container .poster img');
//     initBannerVideoSize('.video-container .filter');
//     initBannerVideoSize('.video-container video');
//
//     $(window).on('resize', function() {
//         scaleVideoContainer();
//         scaleBannerVideoSize('.video-container .poster img');
//         scaleBannerVideoSize('.video-container .filter');
//         scaleBannerVideoSize('.video-container video');
//     });
//
// });
//
// function scaleVideoContainer() {
//
//     var height = $(window).height() + 5;
//     var unitHeight = parseInt(height) + 'px';
//     $('.homepage-hero-module').css('height',unitHeight);
//
// }
//
// function initBannerVideoSize(element){
//
//     $(element).each(function(){
//         $(this).data('height', $(this).height());
//         $(this).data('width', $(this).width());
//     });
//
//     scaleBannerVideoSize(element);
//
// }
//
// function scaleBannerVideoSize(element){
//
//     var windowWidth = $(window).width(),
//     windowHeight = $(window).height() + 5,
//     videoWidth,
//     videoHeight;
//
//     // console.log(windowHeight);
//
//     $(element).each(function(){
//         var videoAspectRatio = $(this).data('height')/$(this).data('width');
//
//         $(this).width(windowWidth);
//
//         if(windowWidth < 1000){
//             videoHeight = windowHeight;
//             videoWidth = videoHeight / videoAspectRatio;
//             $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
//
//             $(this).width(videoWidth).height(videoHeight);
//         }
//
//         $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
//
//     });
// }
// $(document).ready(function() {
//   $(".animsition").animsition({
//     inClass: 'fade-in-down-sm',
//     outClass: 'fade-out-down-sm',
//     inDuration: 1500,
//     outDuration: 800,
//     linkElement: '.animsition-link',
//     // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
//     loading: true,
//     loadingParentElement: 'body', //animsition wrapper element
//     loadingClass: 'animsition-loading',
//     loadingInner: '', // e.g '<img src="loading.svg" />'
//     timeout: false,
//     timeoutCountdown: 5000,
//     onLoadEvent: true,
//     browser: [ 'animation-duration', '-webkit-animation-duration'],
//     // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
//     // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
//     overlay : false,
//     overlayClass : 'animsition-overlay-slide',
//     overlayParentElement : 'body',
//     transition: function(url){ window.location.href = url; }
//   });
// });
$(function() {
  $('#main').smoothState();
});
