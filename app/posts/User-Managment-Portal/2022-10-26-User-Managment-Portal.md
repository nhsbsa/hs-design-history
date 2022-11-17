---
title: User Managment Portal
description: Generic Desciption
date: 
---
        
**Providing the user with more information if they are not able to complete the application.**

## What are we wanting to improve?
If users were unable to complete the Healthy Start online application and were presented with the 'Application Unsuccessful' page, we were not providing enough information to that user as to why they were unsuccessful and what futher steps they could take to get a successful application if they were potentially eligible.

We wanted to improve the signposting for the user on the kickout screens to help them understand why they are not successful and hopefully resolve this if they are in fact eligible.

We want to offer more information for those who are under the ages of 16 and 18 and help guide them to get a successful application.

## What are our user needs?
The user is able to understand the possible cause of them not being able to complete the application, the user is provided with the relevant information, to help guide them with next steps if they are in fact eligible. If the user is under 16 or 18 they are able to apply via the paper application form which is downloadable from the signposting screen, and provided with information to help them complete this. 

## What we have done so far?
We are targetting our users by age group to make sure each user knows what steps they can take, we plan to check the age entered and direct that user to the correct content if they are not able to complete the application, this will be based off of under 16s, under 18s and then over 18s.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Original kickout",
      img: { src: "01-original-kickout.png" }
    }, {
      text: "Under 16",
      img: { src: "02-under-16.png" }
    }, {
      text: "Under 18",
      img: { src: "03-under-18.png" }
    }, {
      text: "Over 18",
      img: { src: "04-over-18.png" }
    }]
}) }}

        
        