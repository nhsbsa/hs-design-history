---
tags: false
layout: collection
title: Discovery phase
description: Before you commit to building a service, you need to understand the problem that needs to be solved.
pagination:
    data: collections.Discovery-phase
    reverse: true
    size: 10
permalink: "Discovery-phase/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
    eleventyNavigation:
        key: "{{ title }}"
        excerpt: "{{ description }}"
        parent: home
---
    