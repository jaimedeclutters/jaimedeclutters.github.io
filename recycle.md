---
layout: page
title: Recycle
permalink: /recycle/
---

<ul class="described-image-list">
  {% for item in site.data.recycle %}
  <li class="described-image-list__item">
    <div class="described-image-list__item__image">
      {% if item.link %}<a href="{{ item.link }}" target="_blank">{% endif %}
        <img src="{{ item.image }}" alt="{{ item.title }}"/>
      {% if item.link %}</a>{% endif %}
    </div>
    <div class="described-image-list__item__description">
      <p class="described-image-list__item__description__heading">{% if item.link %}<a href="{{ item.link }}" target="_blank">{% endif %}{{ item.title }}{% if item.link %}</a>{% endif %}</p>
      <p>{{ item.description }}</p>
    </div>
  </li>
  {% endfor %}
</ul>
