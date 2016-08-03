---
layout: page
title: Inspiration...
permalink: /books/
---

Here are links to books I have enjoyed reading and have inspired my own decluttering journey. The books below are affiliate links, which means if you choose to purchase one of these, a small portion of the sale will support Jaime Declutters at no cost to you.

{% for book in site.data.books %}

<div class="book">
  <a href="{{ book.link }}">
    <img src="{{ book.image }}" alt="{{ book.title }} by {{ book.author }}"/>
  </a>
</div>

{% endfor %}
