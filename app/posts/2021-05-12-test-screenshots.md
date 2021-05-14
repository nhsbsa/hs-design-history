---
title: Test screenshots
description:
date: 2021-05-12
---
{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Start screen",
      img: { src: "01-start-screen.png" }
    }, {
      text: "Before you start",
      img: { src: "02-before-you-start.png" }
    }]
}) }}
