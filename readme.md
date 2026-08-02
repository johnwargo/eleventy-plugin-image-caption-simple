# Eleventy Plugin Image Caption Simple

[![Netlify Status](https://api.netlify.com/api/v1/badges/3d07ee0c-d256-4ec6-8d0b-526e3db3cc59/deploy-status)](https://app.netlify.com/projects/eleventy-plugin-image-caption-simple/deploys)

<!-- TOC -->

- [Eleventy Plugin Image Caption Simple](#eleventy-plugin-image-caption-simple)
  - [Examples](#examples)
  - [Installation](#installation)
  - [Plugin Configuration](#plugin-configuration)
  - [Usage](#usage)

<!-- /TOC -->

---

An Eleventy (11ty) plugin that adds a simple image caption (with auto numbering) shortcode to a site. The shortcode is `imageCaptionSimple` and it returns an automatically numbered image caption like "Figure 1: A boy with a dog". It automatically assigns the image/figure number based on an image file's position on the page (top to bottom). | 

**Note:** If you'd like to be able to caption images then reference the image later on a page using the caption label (Figure 1) then check out my [eleventy-plugin-image-caption
](https://github.com/johnwargo/eleventy-plugin-image-caption) plugin instead.

## Examples

This repository includes a complete Eleventy site that demonstrates the functionality exposed through the plugin; you can access the site on [Netlify](https://eleventy-plugin-image-caption-simple.netlify.app/).

Here's an example of a simple caption added to an image using the `captionedImageSimple` shortcode. The shortcut adds an HTML paragraph (`<p></p>`) with the text "Image 1: Dog with Flower" shown in the following figure. 

![Example 1](/images/example-01.png)

Its the first image in the file, so the plugin automatically numbers it with a 1. The second image would be captioned with Image 2, etc.

That's it, that's all this plugin does. 

## Installation

To install the plugin, open a terminal window or command prompt, navigate to an Eleventy project folder, and execute the following command:

```
npm i eleventy-plugin-image-caption-simple
```

## Plugin Configuration

The plugin supports a few configuration options that allow you to configure the plugin's behavior. 

| Configuration Option | Description  | 
| -------------------- | ------------ |
| `captionBold`        | Boolean value that controls whether the caption text ("Image #:" or "Figure #:") is bold (HTML `strong`).<br />Default: `true`.  |
| `captionClass`       | String value that specifies the class name added to the <br />Default: `caption`. |
| `captionLabel`       | String value that specifies the text label prepended to the caption.<br />Default: `Image`. |

As with any Eleventy Plugin, to use it you must import it into your project's configuration file (mine is `.eleventy.config.js`):

```js
import imageCaptionPlugin from 'eleventy-plugin-image-caption-Simple';
```

Then, within the exported function in the configuration file, add the plugin to the Eleventy configuration. The following code adds the plugin with its default settings (described in the table above):

```js
eleventyConfig.addPlugin(imageCaptionPlugin);
```

You can also load the plugin and specify configuration options as shown in the following example. The example disables bolding for the caption label and sets the caption label to "Figure: ":

```js
eleventyConfig.addPlugin(imageCaptionPlugin, {
	captionBold: false,
	captionLabel: "Figure"
});
```

If your site uses a different class name for captions, specify it in the configuration like this:

```js
eleventyConfig.addPlugin(imageCaptionPlugin, {		
	captionBold: false,
	captionClass: "ImageCaption"
});
```

Here's an example of a complete Eleventy configuration file using the settings from the second example above:

```js
import imageCaptionPlugin from 'eleventy-plugin-image-caption-simple';

export default async function (eleventyConfig) {

  eleventyConfig.addPlugin(imageCaptionPlugin, {
		captionBold: false,
		captionLabel: "Figure"
	});

	eleventyConfig.addPassthroughCopy("src/assets/");
	eleventyConfig.addPassthroughCopy("src/images/");
	
	return {
		dir: {
			input: 'src',
			output: "_site",
			includes: "_includes",
			layouts: "_layouts",
			data: "_data"
		}
	}

};
```

With that in place, you can start using the shortcodes in your site's pages.

## Usage

To add a caption to an image on one of your site's pages, use the shortcode like this:

```liquid
{% imageCaptionSimple "<caption-text>" %}
```

In the example: 

+ `<caption-text>` refers to the text you want displayed in the caption.

Here's an example from the sample app included in this repository:

```liquid
{% imageCaptionSimple "Dog with Flower" %}
```

When Eleventy builds the site, the plugin will replace the shortcode with:  

```text
Image 1: Dog with Flower
```

Which is what you see in the first screenshot on this page.

***

If this code helps you, please consider buying me a coffee.

<a href="https://www.buymeacoffee.com/johnwargo" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>