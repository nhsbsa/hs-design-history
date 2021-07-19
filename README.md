# Design history for Get healthcare cover for travelling abroad

A place to document all design history for the service.
<https://ehic-design-history.herokuapp.com/>

Based on the GOV.UK design history. 

<https://design-history.herokuapp.com>

## Purpose of this project

This repository makes it easy to:

* screenshot your designs
* create pages of screenshots to document designs
* document designs using the [NHSUK Service Manual](https://service-manual.nhs.uk/) OR [GOV.UK Design System](https://design-system.service.gov.uk/)
* print pages of designs
* make designs shareable and linkable

## Installation

* Clone a blank version of the design history from [NHSBSA Design history](https://github.com/nhsbsa/nhsbsa-design-history) repository to a folder on your computer
* Open Terminal
* In Terminal, navigate to the repo you cloned
* Type `npm install` to install the dependencies

## Working locally

Required: node verion 10+

Most of the time you'll be adding new posts. If you're just doing this then:

* Open Terminal at the repo location
* Type `npm start`

This will automatically restart the application with any changes to your posts an any images applied.

If you want to make changes to CSS and JavaScript, and watch for those changes, run `npm run dev`.

## Example design histories

* [Becoming a teacher design history](https://bat-design-history.netlify.app)
* [Increasing children’s internet access](https://increasing-access-history.herokuapp.com/)

## Technical notes

The design history uses the [NHS Digital Service Manual](https://service-manual.nhs.uk/) and the [Eleventy](https://www.11ty.dev) static site generator.
