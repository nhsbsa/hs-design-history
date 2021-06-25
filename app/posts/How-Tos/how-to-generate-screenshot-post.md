---
title: Generate screenshots post
description: How to generate a post with multiple screenshots
date:
---

## Prerequisite
* Node (version 10+)
* Screenshots, either jpg or png files

## Instructions

> This example is based on a post being generated inside the Alpha phase

1. Start off by copying over all your screenshot files to the following location (`/your-directory-name/` can be the title of your post):

`app/images/Alpha-phase/your-directory-name/`

Now that the screenshots are in place, you will need to run the generate.js script to create the post with the screenshots

2. Open terminal at the root of the application and run the following command:

`node scripts/generate.js Alpha-phase/your-directory-name/`

This will then generate a post with all the screenshots in this directory included.

The post will also be generated in the following location:

`posts/Alpha-phase/`

and titled `yyyy-mm-dd-your-directory-name.md`