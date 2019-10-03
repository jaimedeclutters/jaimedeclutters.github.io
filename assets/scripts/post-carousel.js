console.log("looking for carousels");

const carousels = document.querySelectorAll("div.post-carousel");

function previous(seat, seats) {
  let previous_seat = seat.previousElementSibling;
  if (!previous_seat) {
    previous_seat = seats[seats.length - 1];
  }
  return previous_seat;
}

function next(seat, seats) {
  let next_seat = seat.nextElementSibling;
  if (!next_seat) {
    next_seat = seats[0];
  }
  return next_seat;
}

function load_image(seat) {
  let image = seat.querySelector('img.post-carousel__item__image');
  image.src = image.dataset.src;
}

function scrollCarouselLeft(carousel) {
  let carousel_list = carousel.querySelector('ul.post-carousel__list');
  let seats = carousel.querySelectorAll('li.post-carousel__item');
  let off_left = carousel.querySelector('.is-previous');

  load_image(off_left);

  off_left.classList.remove('is-previous');

  let new_off_left = previous(off_left, seats)

  carousel_list.classList.add('is-reversing');
  new_off_left.classList.add('is-previous');
  new_off_left.style.order = 1;

  next_seat = new_off_left;
  let seat_count = seats.length;
  for (let i = 2; i <= seat_count; i += 1) {
    next_seat = next(next_seat, seats);
    next_seat.style.order = i;
  }

  carousel_list.classList.remove('is-set');
  setTimeout(() => carousel_list.classList.add('is-set'), 50);
}

function scrollCarouselRight(carousel) {
  let carousel_list = carousel.querySelector('ul.post-carousel__list');
  let seats = carousel.querySelectorAll('li.post-carousel__item');
  let off_left = carousel.querySelector('.is-previous');

  load_element = off_left;
  for (let i = 0; i < 4; i += 1) {
    load_element = next(load_element, seats);
    load_image(load_element);
  }

  off_left.classList.remove('is-previous');

  let new_off_left = next(off_left, seats);

  carousel_list.classList.remove('is-reversing');
  new_off_left.classList.add('is-previous');
  new_off_left.style.order = 1;

  next_seat = new_off_left;
  let seat_count = seats.length;
  for (let i = 2; i <= seat_count; i += 1) {
    next_seat = next(next_seat, seats)
    next_seat.style.order = i;
  }

  carousel_list.classList.remove('is-set');
  setTimeout(() => carousel_list.classList.add('is-set'), 50);
}

function check_for_tab_press(event) {
    "use strict";
    if (event.keyCode == 9) {
      let link = event.target;
      let list_item = link.parentNode;
      let carousel_list = list_item.parentNode;
      let carousel_wrapper = carousel_list.parentNode;
      let carousel = carousel_wrapper.parentNode;
      let is_previous = carousel_list.querySelector('.is-previous');

      let seats = carousel_list.querySelectorAll('li.post-carousel__item');
      if (event.shiftKey) {
        // Scroll if previous of current "is-previous"
        let prev = previous(list_item, seats)

        if (prev === is_previous) {
          scrollCarouselLeft(carousel);
        }
      } else {
        // Scroll if current is not the first item (aka next of is-previous
        let first_in_list = next(is_previous, seats);

        if (list_item !== first_in_list) {
          scrollCarouselRight(carousel);
        }
      }
    }
}

carousels.forEach( carousel => {
  console.log("carousel found");

  let left_button = carousel.querySelector("a.post-carousel-nav--left");
  let right_button = carousel.querySelector("a.post-carousel-nav--right");

  left_button.addEventListener('click', ele => {
    let carousel = ele.target.parentNode;
    scrollCarouselLeft(carousel);
  });

  right_button.addEventListener('click', ele => {
    let carousel = ele.target.parentNode;
    scrollCarouselRight(carousel);
  });

  let seats = carousel.querySelectorAll("li.post-carousel__item");
  for (let i = 0; i < 3; i += 1) {
    load_image(seats[i]);
  };
  seats[0].classList.add("post-carousel__item--first");
  seats[seats.length - 1].classList.add("is-previous");

  let carousel_list = carousel.querySelector("ul.post-carousel__list");

  carousel_list.addEventListener('keyup', check_for_tab_press);
});
