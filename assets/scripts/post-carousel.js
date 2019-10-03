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

function set_as_first(seat, list) {
  seats = list.querySelectorAll('li.post-carousel__item');

  existing_minus_one = list.querySelector('.is-previous');
  if (existing_minus_one) {
    existing_minus_one.classList.remove('is-previous');
  }

  new_minus_one = previous(seat, seats);

  load_element = seat;
  for (let i = 0; i < 3; i += 1) {
    load_image(load_element);
    load_element = next(load_element, seats);
  }

  new_minus_one.classList.add('is-previous');
  new_minus_one.style.order = 1;

  next_seat = new_minus_one;
  for (let i = 2; i <= seats.length; i += 1) {
    next_seat = next(next_seat, seats)
    next_seat.style.order = i;
  }
}

function load_image(seat) {
  let image = seat.querySelector('img.post-carousel__item__image');
  image.src = image.dataset.src;
}

function scrollCarouselLeft(carousel) {
  let carousel_list = carousel.querySelector('ul.post-carousel__list');
  let seats = carousel.querySelectorAll('li.post-carousel__item');
  let off_left = carousel.querySelector('.is-previous');

  let new_first = off_left;

  carousel_list.classList.add('is-reversing');

  set_as_first(new_first, carousel_list);

  carousel_list.classList.remove('is-set');
  setTimeout(() => carousel_list.classList.add('is-set'), 50);
}

function scrollCarouselRight(carousel) {
  let carousel_list = carousel.querySelector('ul.post-carousel__list');
  let seats = carousel.querySelectorAll('li.post-carousel__item');
  let off_left = carousel.querySelector('.is-previous');

  let new_off_left = next(off_left, seats);
  let new_first = next(new_off_left, seats);

  carousel_list.classList.remove('is-reversing');

  set_as_first(new_first, carousel_list);

  carousel_list.classList.remove('is-set');
  setTimeout(() => carousel_list.classList.add('is-set'), 50);
}

function check_for_tab_press(event) {
    "use strict";
    if (event.keyCode == 9) {
      let link = event.target;
      let list_item = link.parentNode;
      let carousel_list = list_item.parentNode;

      set_as_first(list_item, carousel_list);
    }
}

carousels.forEach( carousel => {
  console.log("carousel found");

  let left_button = carousel.querySelector("a.post-carousel-nav--left");
  let right_button = carousel.querySelector("a.post-carousel-nav--right");

  let carousel_list = carousel.querySelector("ul.post-carousel__list");
  let first_seat = carousel_list.querySelector("li.post-carousel__item");
  first_seat.classList.add("post-carousel__item--first");

  set_as_first(first_seat, carousel_list);

  left_button.addEventListener('click', ele => {
    let carousel = ele.target.parentNode;
    scrollCarouselLeft(carousel);
  });

  right_button.addEventListener('click', ele => {
    let carousel = ele.target.parentNode;
    scrollCarouselRight(carousel);
  });

  carousel_list.addEventListener('keyup', check_for_tab_press);
});
