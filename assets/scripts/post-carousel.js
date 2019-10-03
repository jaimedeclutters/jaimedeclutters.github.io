console.log("looking for carousels");

const carousels = document.querySelectorAll("div.post-carousel");

function enable_left_button(carousel) {
  let left_button = carousel.querySelector("a.post-carousel-nav--left");
  left_button.classList.remove("disabled");
}

function enable_right_button(carousel) {
  let left_button = carousel.querySelector("a.post-carousel-nav--right");
  left_button.classList.remove("disabled");
}

function disable_left_button(carousel) {
  let left_button = carousel.querySelector("a.post-carousel-nav--left");
  left_button.classList.add("disabled");
}

function disable_right_button(carousel) {
  let left_button = carousel.querySelector("a.post-carousel-nav--right");
  left_button.classList.add("disabled");
}

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

function set_as_first(seat, carousel) {
  let list = carousel.querySelector('ul.post-carousel__list');
  seats = list.querySelectorAll('li.post-carousel__item');

  existing_minus_one = list.querySelector('.is-previous');
  new_minus_one = previous(seat, seats);

  if (existing_minus_one === new_minus_one) {
    // already set; go ahead and return
    return;
  }

  let initial_load = false;

  if (existing_minus_one) {
    existing_minus_one.classList.remove('is-previous');
  } else {
    initial_load = true;
  }

  load_element = seat;
  for (let i = 0; i < 3; i += 1) {
    load_image(load_element);
    load_element = next(load_element, seats);
  }

  new_minus_one.classList.add('is-previous');
  new_minus_one.style.display = "block";
  new_minus_one.style.order = 1;

  let next_seat = seat;
  hit_end = false;
  for (let i = 2; i <= seats.length; i += 1) {
    console.log(next_seat);

    next_seat.style.order = i;

    if (hit_end) {
      next_seat.style.display = "none";
    }

    next_seat = next_seat.nextElementSibling;
    if (!next_seat) {
      hit_end = true;
      next_seat = seats[0];
    }
  }

  enable_left_button(carousel);
  enable_right_button(carousel);

  if (seat === seats[0]) {
    disable_left_button(carousel);
  }

  if (seat === seats[seats.length - 1]) {
    disable_right_button(carousel);
  }

  if (!initial_load) {
    list.classList.remove('is-set');
    setTimeout(() => list.classList.add('is-set'), 50);
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

  set_as_first(new_first, carousel);
}

function scrollCarouselRight(carousel) {
  let carousel_list = carousel.querySelector('ul.post-carousel__list');
  let seats = carousel.querySelectorAll('li.post-carousel__item');
  let off_left = carousel.querySelector('.is-previous');

  let new_off_left = next(off_left, seats);
  let new_first = next(new_off_left, seats);

  carousel_list.classList.remove('is-reversing');

  set_as_first(new_first, carousel);
}

function check_for_tab_press(event) {
    "use strict";
    if (event.keyCode == 9) {
      let link = event.target;
      let list_item = link.parentNode;
      let carousel_list = list_item.parentNode;
      let carousel_wrapper = carousel_list.parentNode;
      let carousel = carousel_wrapper.parentNode;

      if (event.shiftKey) {
        carousel_list.classList.add("is-reversing");
      } else {
        carousel_list.classList.remove("is-reversing");
      }
      set_as_first(list_item, carousel);
    }
}

carousels.forEach( carousel => {
  console.log("carousel found");

  let left_button = carousel.querySelector("a.post-carousel-nav--left");
  let right_button = carousel.querySelector("a.post-carousel-nav--right");

  let carousel_list = carousel.querySelector("ul.post-carousel__list");
  let first_seat = carousel_list.querySelector("li.post-carousel__item");
  first_seat.classList.add("post-carousel__item--first");

  set_as_first(first_seat, carousel);

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
