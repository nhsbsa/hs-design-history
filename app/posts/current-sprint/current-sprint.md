---
tags: false
layout: collection
title: Current sprint
description: The current sprint for CRA
pagination:
  data: collections.current-sprint
  reverse: true
  size: 10
permalink: "current-sprint/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
---