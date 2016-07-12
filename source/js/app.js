

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
var map;
function initialize() {
 var Options = {
  center: new google.maps.LatLng(56, 37),
  zoom: 8,
  mapTypeId: google.maps.MapTypeId.ROADMAP
 };
 map = new google.maps.Map(document.getElementById("map_canvas"), Options);
}
google.maps.event.addDomListener(window, 'load', initialize);








