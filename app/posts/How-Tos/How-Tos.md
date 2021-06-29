---
tags: false
layout: collection
title: How to
description: Visual instuctions for different tasks
pagination:
    data: collections.How-Tos
    reverse: true
    size: 10
permalink: "how-to/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
    eleventyNavigation:
        key: "{{ title }}"
        excerpt: "{{ description }}"
        parent: home
---
