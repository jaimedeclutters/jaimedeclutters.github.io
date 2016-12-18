---
layout: page
title: Recycle
permalink: /recycle/
---

While I love decluttering, I am also passionate about making sure that our decluttered items go to good use. Instead of throwing things in the trash, recycle them! Below are links and ideas to help you recycle your old items. I will be continuing to update this list. And if you have any organizations you would like to share, please email me!

{% for category in site.data.recycle %}
<h2>{{ category[0] }}</h2>
<ul class="described-image-list">  
  {% for item in category[1] %}
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
{% endfor %}
