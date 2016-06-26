(function() {
  'use strict';

  setTimeout(function() {
    document.querySelector('.greating_picture').classList.add('m--show');
  }, 1000);
})();

/*прячет placeholder при фокусе */

 $(document).ready(function () {
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });

/* Загрузка карты */
function initialize()
{
  var mapOptions = {
    center: new google.maps.LatLng(54.83863299999999,83.09406190000004),
    // center: new google.maps.LatLng(51.508742,-0.120850),
    zoom:17,
    panControl:true,
    zoomControl:true,
    mapTypeControl:true,
    scaleControl:false,
    streetViewControl:true,
    overviewMapControl:true,
    rotateControl:true,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP

  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);