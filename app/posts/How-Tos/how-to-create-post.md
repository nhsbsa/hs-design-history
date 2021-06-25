---
title: How to create a post
description: How to create a new post
date: 2021-06-22
---
## Prerequisite
- Node (version 10+)

## Instructions
### How to create a post without using node scripts

1. Locate the folder you wish to add a new file to inside of app/posts

<img src="/images/How-Tos/create-post/locate-folder.png">

2. Right-click on that folder and select 'New file'

<img src="/images/How-Tos/create-post/new-file.png">

3. Name the file in the following format <code class><span class="hljs-name">YYYY-MM-DD-name-of-post.md</span></code>

<img src="/images/How-Tos/create-post/create-file.png">

4. Copy the following and re-write the title, description and date to match your post

<pre style="position: relative;">
<code class>
<span class="hljs-name">---</span>
<span class="hljs-name">title:</span>
<span class="hljs-name">description:</span>
<span class="hljs-name">date:</span>
<span class="hljs-name">---</span>
</code>
</pre>

### How to create a post using node scripts

1. Open terminal at the root of the application and run the following script:

<code class><span class="hljs-name">node scripts/generate-post.js Name-of-section/name-of-post</span></code>

2. Write a small description regarding the post

<img src="/images/How-Tos/create-post/post-created-script.png">


