---
tags: false
layout: collection
title: Pending Applications
description: Generic description
pagination:
    data: collections.Pending-Applications
    reverse: true
    size: 10
permalink: "Pending-Applications/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
    eleventyNavigation:
        key: "{{ title }}"
        excerpt: "{{ description }}"
        parent: home
---
    