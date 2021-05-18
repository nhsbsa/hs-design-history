---
tags: false
layout: collection
title: Alpha sprint 23, 24, 25
description: The current sprint for CRA
pagination:
  data: collections.alpha-sprint-23-24-25
  reverse: true
  size: 10
permalink: "alpha-sprint-23-24-25/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
---