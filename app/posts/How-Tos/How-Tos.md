---
tags: false
layout: collection
title: How to contribute
description: Visual instuctions for contirbuting to the Healthy Start design history, you can contribute by writing a blog on anything from design iterations to adding some findings from user research
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
