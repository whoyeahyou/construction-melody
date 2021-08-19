$(document).ready(function () {
     var currentFloor = 2;
     var floorPath = $('.main__image-svg path');
     var counterUp = $('.main_info-counter_group-btn--up');
     var counterDown = $('.main_info-counter_group-btn--down');
     floorPath.on('mouseover', function () {
          floorPath.removeClass('current-floors');
          currentFloor = $(this).attr('data-floor');
          $('.main__info-counter').text(currentFloor);
     });

     counterUp.on('click', function () {
          if (currentFloor < 18) {
               currentFloor++;
               usCurrentFloor = currentFloor.toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGroupping: false
               });
               $('.main__info-counter').text(usCurrentFloor);
               floorPath.removeClass('current-floors');
               $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floors');
          }
     });

     counterDown.on('click', function () {
          if (currentFloor > 2) {
               currentFloor--;
               usCurrentFloor = currentFloor.toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGroupping: false
               });
               $('.main__info-counter').text(usCurrentFloor);
               floorPath.removeClass('current-floors');
               $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floors');
          }
     });
});