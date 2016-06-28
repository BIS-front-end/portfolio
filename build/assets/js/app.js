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
/*function initialize() {     
  var myLatlng = new google.maps.LatLng(-34.397, 150.644);
  var myOptions = {
    zoom: 8,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 
}*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmVhdGluZ19waWN0dXJlJykuY2xhc3NMaXN0LmFkZCgnbS0tc2hvdycpO1xyXG4gIH0sIDEwMDApO1xyXG59KSgpO1xyXG5cclxuLyrQv9GA0Y/Rh9C10YIgcGxhY2Vob2xkZXIg0L/RgNC4INGE0L7QutGD0YHQtSAqL1xyXG5cclxuICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICQoJ2lucHV0LHRleHRhcmVhJykuZm9jdXMoZnVuY3Rpb24oKXtcclxuICAgJCh0aGlzKS5kYXRhKCdwbGFjZWhvbGRlcicsJCh0aGlzKS5hdHRyKCdwbGFjZWhvbGRlcicpKVxyXG4gICAkKHRoaXMpLmF0dHIoJ3BsYWNlaG9sZGVyJywnJyk7XHJcbiB9KTtcclxuICQoJ2lucHV0LHRleHRhcmVhJykuYmx1cihmdW5jdGlvbigpe1xyXG4gICAkKHRoaXMpLmF0dHIoJ3BsYWNlaG9sZGVyJywkKHRoaXMpLmRhdGEoJ3BsYWNlaG9sZGVyJykpO1xyXG4gfSk7XHJcbiB9KTtcclxuXHJcbi8qINCX0LDQs9GA0YPQt9C60LAg0LrQsNGA0YLRiyAqL1xyXG4vKmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7ICAgICBcclxuICB2YXIgbXlMYXRsbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKC0zNC4zOTcsIDE1MC42NDQpO1xyXG4gIHZhciBteU9wdGlvbnMgPSB7XHJcbiAgICB6b29tOiA4LFxyXG4gICAgY2VudGVyOiBteUxhdGxuZyxcclxuICAgIG1hcFR5cGVJZDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVBcclxuICB9XHJcbiAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBfY2FudmFzXCIpLCBteU9wdGlvbnMpOyBcclxufSovIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
