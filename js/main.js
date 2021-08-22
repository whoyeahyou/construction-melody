$(document).ready(function () {
     var currentFloor = 2;
     var floorPath = $('.main__image-svg path'); // отдельный этаж в svg
     var counterUp = $('.main_info-counter_group-btn--up');
     var counterDown = $('.main_info-counter_group-btn--down');
     var modal = $('.modal');
     var modalCloseButton = $('.modal-close-button')
     var viewFlatsButton = $('.view-flats');

     floorPath.on('mouseover', function () {
          floorPath.removeClass('current-floor'); // удалить активный класс
          currentFloor = $(this).attr('data-floor'); // значение текущего этажа
          $('.counter__js').text(currentFloor); // значение этажа в счетчик
     });

     floorPath.on('click', toggleModal); // при клике на этаж - открывается модалка
     modalCloseButton.on('click', toggleModal); // закрывается
     viewFlatsButton.on('click', toggleModal);

     counterUp.on('click', function () { // отслеживаем клик
          if (currentFloor < 18) {
               currentFloor++;
               usCurrentFloor = currentFloor.toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGroupping: false // формат переменной
               });
               $('.counter__js').text(usCurrentFloor); // запись в счётчик
               floorPath.removeClass('current-floor');
               $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
          }
     });

     counterDown.on('click', function () {
          if (currentFloor > 2) {
               currentFloor--;
               usCurrentFloor = currentFloor.toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGroupping: false
               });
               $('.counter__js').text(usCurrentFloor);
               floorPath.removeClass('current-floor');
               $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
          }
     });

     function toggleModal() { // функция открыть и закрыть окно
          modal.toggleClass('is-open');
     }
});