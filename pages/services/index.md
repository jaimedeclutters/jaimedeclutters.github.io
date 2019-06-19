---
layout: page
permalink: /services
title: "My Services"
image: /assets/images/services/services.jpg
redirect_from:
  - /consult
  - /contact
  - /photos/before-after
  - /madison-wi
  - /work-with-me
---

<h1>{{page.title}}</h1>

<div class="page-list">
  <div class="page-list__item">
    <a href="{{site.url}}/services/decluttering-sessions" class="page-list__link" title="Decluttering Sessions">
      <img class="page-list__image" src="{{ site.url }}/assets/images/services/decluttering-sessions-link.png" alt="Decluttering Sessions">
    </a>
  </div>
  <div class="page-list__item">
    <a href="{{site.url}}/services/in-your-community" class="page-list__link" title="In Your Community">
      <img class="page-list__image" src="{{ site.url }}/assets/images/services/in-your-community-link.png" alt="In Your Community">
    </a>
  </div>
  <div class="page-list__item">
    <a href="{{site.url}}/services/monthly-specials" class="page-list__link" title="Monthly Specials">
      <img class="page-list__image" src="{{ site.url }}/assets/images/services/monthly-specials-link.png" alt="Monthly Specials">
    </a>
  </div>
</div>

<h2 class="services-list__title" id="contact-form">Contact Form</h2>
{% include components/contact-form.html %}
