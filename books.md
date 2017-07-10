---
layout: page
title: Books
permalink: /books/
affiliate: true
---

I love reading books about simple living and people experiementing/changing their lives to step away from the common to allow their authentic self to lead the way. Below are some of my favorite reads - books that have touched my heart and inspired me to make my own dreams a reality. I will continue to update this page as I read more amazing books. If you have any books you would love to share, please email me!

<ul class="image__gallery">  
  {% for book in site.data.books %}
  <li class="image__gallery__item">
    <a href="{{ book.link }}" target="_blank">
      <img src="{{ book.image }}" alt="{{ book.title }} by {{ book.author }}" class="image__gallery__image"/>
    </a>
  </li>
  {% endfor %}
</ul>
