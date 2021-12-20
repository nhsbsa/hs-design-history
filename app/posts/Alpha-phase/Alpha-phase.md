---
tags: false
layout: collection
title: Alpha phase
description: Alpha is where you try out different solutions to the problems you learnt about during discovery.
pagination:
    data: collections.Alpha-phase
    reverse: true
    size: 10
permalink: "Alpha-phase/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
    eleventyNavigation:
        key: "{{ title }}"
        excerpt: "{{ description }}"
        parent: home
---
    