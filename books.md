---
layout: page
title: Books
permalink: /books/
affiliate: true
---

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
