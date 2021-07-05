---
title: Generate a new section
description: How to generate a new section on the landing page
date:
---

## Prerequisite
* Node (version 10+)

## Instructions

> These instructions are for generating a new section on the landing page

1. Start with having the repository open in your text editor

2. Open terminal at the location of the repository and enter the following command

`node scripts/generate-section.js name_of_section`

<img src="/images/How-Tos/generate-section/generate-section-command.png" alt="screen showing command and output">

You will then see your new folder generated in the following location.

`app/posts/`

<img src="/images/How-Tos/generate-section/section-generated.png" alt="screen showing generated folder and files">

All required files will be generated within the new folder alongside an example post which can be edited.

### Update card title and description

After a new section has been generated, the title and description of the section card can be changed.

<img src="/images/How-Tos/generate-section/test-card.png" alt="test card with example description">

When a new section is created and files have been generated within the folder, one of the generated files (`section-name.md`) will include the title and description.

Here is an example of the file contents.

<img src="/images/How-Tos/generate-section/test-section-info.png" alt="screen showing section information">

You will only be required to change title and description, for example

`title: New section title`
`description: Here is a new description`

<img src="/images/How-Tos/generate-section/new-test-card.png" alt="test card with new title and description">

