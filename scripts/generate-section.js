/*
    Run: node scripts/generate-section.js
*/

// Dependencies
const fs = require('fs')

// Arguments for the directory name
const directoryName = process.argv.slice(-1)[0]
warnIfNoArguments()

const deepestDirectory = directoryName.split('/').pop()

var title = deepestDirectory.replace(/-/g, ' ')
title = title.charAt(0).toUpperCase() + title.slice(1)

const postDirectory = `app/posts/${directoryName}/${directoryName}`.replace('/' + deepestDirectory, '')

// Run
function start() {
    makeDirectories()
    generateFiles()
}

function warnIfNoArguments(title) {
    // TODO: Use a better check for an argument
    if (directoryName.startsWith('/Users')) {
        console.log('No arguments set')
        console.log('Please set a title: `node scripts/generate-section "Title of section"`')
    }
}

function makeDirectories() {
    if (!fs.existsSync(postDirectory)) {
        fs.mkdirSync(postDirectory)

        console.log(postDirectory);
    }
}

function generateFiles() {
    // =================================================================
    // Generating the MD file
    // =================================================================
    var template = ''
    const templateStart = `---
tags: false
layout: collection
title: ${title}
description: Generic description
pagination:
    data: collections.${directoryName}
    reverse: true
    size: 10
permalink: "${directoryName}/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
    eleventyNavigation:
        key: "{{ title }}"
        excerpt: "{{ description }}"
        parent: home
---`

    const templateEnd = `
    `
    const filename = `${postDirectory}/${deepestDirectory}.md`

    // =================================================================
    // Generating the JSON file
    // =================================================================
    var jsonTemplate = ''
    const jsonTemplateStart = `{
    "tags": ["${directoryName}"],
    "eleventyNavigation": {
        "parent": "${title}"
    }
}
    `
    const jsonTemplateEnd = `
    `
    const jsonFilename = `${postDirectory}/${deepestDirectory}.json`

    // =================================================================
    // Generating the generic post
    // =================================================================
    var genericTemplate = ''
    const genericTemplateStart = `---
title: Sprint [number]
description: Generic Desciption
date: 
---
        
Example post
        `
    const genericTemplateEnd = `
        `
    const genericFilename = `${postDirectory}/YYYY-MM-DD-sprint-number.md`

    // Write MD file
    fs.writeFile(
        filename,
        templateStart + template + templateEnd,
        function (err) {
            if (err) {
                console.error(err)
            }
            console.log(`MD file generated: ${filename}`)
        }
    )

    // Write JSON file
    fs.writeFile(
        jsonFilename,
        jsonTemplateStart + jsonTemplate + jsonTemplateEnd,
        function (err) {
            if (err) {
                console.error(err)
            }
            console.log(`JSON file generated: ${jsonFilename}`)
        }
    )

    // Write generic md file
    fs.writeFile(
        genericFilename,
        genericTemplateStart + genericTemplate + genericTemplateEnd,
        function (err) {
            if (err) {
                console.error(err)
            }
            console.log(`generic MD file generated: ${genericFilename}`)
        }
    )

}

start()