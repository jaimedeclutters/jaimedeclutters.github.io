---
layout: page
title: Books
permalink: /books/
affiliate: true
---

I love reading books about decluttering, simple and eco-friendly living, and creating a zero waste home. Below, I have links to my favorites. I will continue to update this list as I find more amazing books. If you have any books you would love to share, please email me!

<br>

<ul class="described-image-list">
  {% for book in site.data.books %}
  <li class="described-image-list__item">
    <div class="described-image-list__item__image">
      <a href="{{ book.link }}" target="_blank">
        <img src="{{ book.image }}" alt="{{ book.title }} by {{ book.author }}"/>
      </a>
    </div>
    <div class="described-image-list__item__description">
      <p class="described-image-list__item__description__heading"><a href="{{ book.link }}" target="_blank">{{ book.title }} - {{ book.author }}</a></p>
      <p>{{ book.description }}</p>
    </div>
  </li>
  {% endfor %}
</ul>
