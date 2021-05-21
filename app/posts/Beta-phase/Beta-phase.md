---
tags: false
layout: collection
title: Beta phase
description: Focus on making sure the solution chosen works as well as possible
pagination:
    data: collections.Beta-phase
    reverse: true
    size: 10
permalink: "Beta-phase/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
    eleventyNavigation:
        key: "{{ title }}"
        excerpt: "{{ description }}"
        parent: home
---
    