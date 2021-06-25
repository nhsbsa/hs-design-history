/*
  Usage:
  * Put images into `app/images/directory-name`
  * Name them with 01-, 02- prefixes

  Run:
  node scripts/generate.js name-of-directory-holding-images
*/

// Dependencies
const fs = require('fs')
const { DateTime } = require('luxon')

// Arguments
const directoryName = process.argv.slice(-1)[0]
warnIfNoArguments()

const deepestDirectory = directoryName.split('/').pop()

var title = deepestDirectory.replace(/-/g, ' ')
title = title.charAt(0).toUpperCase() + title.slice(1)

const datestamp = DateTime.local().toFormat('yyyy-MM-dd')

const postDirectory = `app/posts/${directoryName}`.replace('/' + deepestDirectory, '')

var paths = []

// Run
function start () {
  makeDirectories()
  generatePage()
}

function warnIfNoArguments (title) {
  // TODO: Use a better check for an argument
  if (directoryName.startsWith('/Users')) {
    console.log('No arguments set')
    console.log('Please set a title: `node scripts/screenshot.js "Title of page"`')
  }
}

function makeDirectories () {
  if (!fs.existsSync(postDirectory)) {
    fs.mkdirSync(postDirectory)
  }
}

function generatePage () {
  var template = ''
  const templateStart = `---
title: ${title}
description:
date: ${datestamp}
---

`

  paths.forEach(function (item, index) {
    template += `${index > 0 ? ', ' : ''}{
      text: "${item.title}"
    }`
  })

  const filename = `${postDirectory}/${datestamp}-${deepestDirectory}.md`

  fs.writeFile(
    filename,
    templateStart + template,
    function (err) {
      if (err) {
        console.error(err)
      }
      console.log(`Page generated: ${filename}`)
    }
  )
}

start()
