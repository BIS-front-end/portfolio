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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JlYXRpbmdfcGljdHVyZScpLmNsYXNzTGlzdC5hZGQoJ20tLXNob3cnKTtcclxuICB9LCAxMDAwKTtcclxufSkoKTtcclxuXHJcbi8q0L/RgNGP0YfQtdGCIHBsYWNlaG9sZGVyINC/0YDQuCDRhNC+0LrRg9GB0LUgKi9cclxuXHJcbiAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAkKCdpbnB1dCx0ZXh0YXJlYScpLmZvY3VzKGZ1bmN0aW9uKCl7XHJcbiAgICQodGhpcykuZGF0YSgncGxhY2Vob2xkZXInLCQodGhpcykuYXR0cigncGxhY2Vob2xkZXInKSlcclxuICAgJCh0aGlzKS5hdHRyKCdwbGFjZWhvbGRlcicsJycpO1xyXG4gfSk7XHJcbiAkKCdpbnB1dCx0ZXh0YXJlYScpLmJsdXIoZnVuY3Rpb24oKXtcclxuICAgJCh0aGlzKS5hdHRyKCdwbGFjZWhvbGRlcicsJCh0aGlzKS5kYXRhKCdwbGFjZWhvbGRlcicpKTtcclxuIH0pO1xyXG4gfSk7XHJcblxyXG4vKiDQl9Cw0LPRgNGD0LfQutCwINC60LDRgNGC0YsgKi9cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpXHJcbntcclxuICB2YXIgbWFwT3B0aW9ucyA9IHtcclxuICAgIGNlbnRlcjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1NC44Mzg2MzI5OTk5OTk5OSw4My4wOTQwNjE5MDAwMDAwNCksXHJcbiAgICAvLyBjZW50ZXI6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNTEuNTA4NzQyLC0wLjEyMDg1MCksXHJcbiAgICB6b29tOjE3LFxyXG4gICAgcGFuQ29udHJvbDp0cnVlLFxyXG4gICAgem9vbUNvbnRyb2w6dHJ1ZSxcclxuICAgIG1hcFR5cGVDb250cm9sOnRydWUsXHJcbiAgICBzY2FsZUNvbnRyb2w6ZmFsc2UsXHJcbiAgICBzdHJlZXRWaWV3Q29udHJvbDp0cnVlLFxyXG4gICAgb3ZlcnZpZXdNYXBDb250cm9sOnRydWUsXHJcbiAgICByb3RhdGVDb250cm9sOnRydWUsXHJcbiAgICBzY3JvbGx3aGVlbDogZmFsc2UsXHJcbiAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQXHJcblxyXG4gIH07XHJcbiAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnb29nbGVNYXBcIiksbWFwUHJvcCk7XHJcbn1cclxuZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIod2luZG93LCAnbG9hZCcsIGluaXRpYWxpemUpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
