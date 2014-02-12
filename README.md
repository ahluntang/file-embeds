# GitHub Embeds

## About

Javascript library that embeds GitHub files in a `<pre><code>  </code></pre>` tags using the GitHub API.
Can also embed non-GitHub files.

I was inspired by the clean file inclusion plugin Lea Verou made for prism. 
This code reuses the structure of that plugin but has a special case for GitHub links.

## Usage

Include the script in the body.

```
<script type="text/javascript" src="github-embeds.js"></script>
```

Add a link to your GitHub file using the `data-src` attribute in the pre tag.

```
<pre data-src="https://github.com/ahluntang/github-embeds/blob/master/github-embeds.js"></pre>
```

## Credits

Thanks to Lea Verou for making prism. Check prism for syntax highlighting.

## Contribute

If there are any problems or suggestions, don't hesitate to create an issue or send a pull request.
