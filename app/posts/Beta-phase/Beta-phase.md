---
tags: false
layout: collection
title: Beta phase
description: The beta phase is where you take your best idea from alpha and start building it for real. It also involves thinking about how your service will integrate with (or start to replace) existing services, and preparing for the transition to live.
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
    