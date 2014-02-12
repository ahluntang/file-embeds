# File Embeds

## About

Javascript library that embeds code files in a `<pre><code>  </code></pre>` tags.
It also detects GitHub links and uses the GitHub API.

**NOTE:** in some cases GitHub blocks javascript file fetching through raw.github.com. In that case, use the link as shown in the usage section.

I was inspired by the clean file inclusion plugin Lea Verou made for prism.
This code reuses the structure of that plugin but has a special case for GitHub links because files from GitHub needs to be fetched through the GitHub API.

## Usage

Include the script in the body.

```
<script type="text/javascript" src="file-embeds.js"></script>
```

Add a link to your GitHub file using the `data-src` attribute in the pre tag.

```
<pre data-src="https://github.com/ahluntang/file-embeds/blob/master/file-embeds.js"></pre>
```

## Credits

Thanks to [Lea Verou](http://lea.verou.me/) for making [prism](http://prismjs.com/). Check prism for syntax highlighting.

## Contribute

If there are any problems or suggestions, don't hesitate to create an [issue](https://github.com/ahluntang/github-embeds/issues) or send a [pull request](https://github.com/ahluntang/github-embeds/pulls).
