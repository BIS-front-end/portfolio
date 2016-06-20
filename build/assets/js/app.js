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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWF0aW5nX3BpY3R1cmUnKS5jbGFzc0xpc3QuYWRkKCdtLS1zaG93Jyk7XHJcbiAgfSwgMTAwMCk7XHJcbn0pKCk7XHJcblxyXG4vKtC/0YDRj9GH0LXRgiBwbGFjZWhvbGRlciDQv9GA0Lgg0YTQvtC60YPRgdC1ICovXHJcblxyXG4gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gJCgnaW5wdXQsdGV4dGFyZWEnKS5mb2N1cyhmdW5jdGlvbigpe1xyXG4gICAkKHRoaXMpLmRhdGEoJ3BsYWNlaG9sZGVyJywkKHRoaXMpLmF0dHIoJ3BsYWNlaG9sZGVyJykpXHJcbiAgICQodGhpcykuYXR0cigncGxhY2Vob2xkZXInLCcnKTtcclxuIH0pO1xyXG4gJCgnaW5wdXQsdGV4dGFyZWEnKS5ibHVyKGZ1bmN0aW9uKCl7XHJcbiAgICQodGhpcykuYXR0cigncGxhY2Vob2xkZXInLCQodGhpcykuZGF0YSgncGxhY2Vob2xkZXInKSk7XHJcbiB9KTtcclxuIH0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
