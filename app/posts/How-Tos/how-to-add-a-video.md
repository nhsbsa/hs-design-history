---
title: Add a video
description: How to add a video into your posts
date:
---
## Instructions
1. Add the video to the app/videos folder
2. Inside the post, add the following:
<pre style="position: relative;">
<code class>
<span class="hljs-tag">&lt<span class="hljs-name">figure</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"figure_container"</span>&gt</span>
<span class="hljs-tag">&nbsp &lt<span class="hljs-name">video</span> <span class="hljs-attr">controls</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">allowfullscreen</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"100%"</span>&gt</span>
<span class="hljs-tag">&nbsp &nbsp &lt<span class="hljs-name">source</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"/videos/[video_name]"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"video/mp4"</span>&gt</span>
<span class="hljs-tag">&nbsp &lt&#47<span class="hljs-name">video</span>&gt</span>
<span class="hljs-tag">&lt&#47<span class="hljs-name">figure</span>&gt</span>
</code>
</pre>
3. Make sure to change video_name to the name of the video file as well as setting the type attribute to the video extension (video/mp4)
4. Now in terminal run 'npm start' to build the application

## Example

<figure class="figure_container">
    <video controls="true" allowfullscreen="true" width="100%">
        <source src="/videos/test.mp4" type="video/mp4">
    </video>
</figure>
