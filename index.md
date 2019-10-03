---
layout: post
title: Welcome
image: /assets/images/about/about-thin.jpg
redirect_from:
  - /photos/index.html
  - /photos/home-tour/
  - /page2/
  - /page3/
  - /page4/
  - /page5/
  - /page6/
  - /page7/
  - /page8/
  - /page9/
  - /page10/
---

When life seems to be throwing too much at you and it's difficult to see the way forward, creating space can transform your life. From reducing your stress, improving your finances, having more time for your loved ones, and the ability to accomplish your dreams; each intentional decision in eliminating the unnecessary will move you in the direction you wish to go.

I've done this in my own life and can help you make the progress you feel is out of reach. Whether you are looking for ideas or support in your journey, I would be honored to help you succeed.

<div class="post-carousel">
  <a href="javascript:;" class="post-carousel-nav post-carousel-nav--left">&lsaquo;</a>
  <a href="javascript:;" class="post-carousel-nav post-carousel-nav--right">&rsaquo;</a>
  <div class="post-carousel__wrapper">
    <ul class="post-carousel__list is-set">
    {% for post in site.posts %}
      <li class="post-carousel__item">
        <img class="post-carousel__item__image" data-src="{{ post.image }}" />
        <h2 class="post-carousel__item__title">{{ post.title }}</h2>
        <p class="post-carousel__item__excerpt">{{ post.excerpt | strip_html }}</p>
        <a class="post-carousel__item__link" href="{{ post.url }}">Read more</a>
      </li>
    {% endfor %}
    </ul>
  </div>
</div>

<script async type="text/javascript" src="{{site.url}}/assets/scripts/post-carousel.js" />
