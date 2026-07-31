/********************************************************************
 * Image Caption (Simple) shortcut
 * by John M. Wargo
 * Created July 31, 2026
 * 
 * This should automatically caption all of the image files on a 
 * page. Using sequential numbers, of course.
 ********************************************************************/

const isDev = process.env.ELEVENTY_RUN_MODE === "serve" || process.env.ELEVENTY_RUN_MODE === "watch";

const captions = [];

var classStr;
var options = {};

const defaultConfig = {
    captionBold: true,
    captionClass: 'caption',
    captionLabel: 'Image'
};

function generateCaption(figureNumber, captionText) {
    return options.captionBold
        ? `<p${classStr}><strong>${options.captionLabel} ${figureNumber}: </strong>${captionText}</p>`
        : `<p${classStr}>${options.captionLabel} ${figureNumber}: ${captionText}</p>`;
}

function imageCaptionSimple(captionText) {
    console.log(`[ImageCaption] "${captionText}"`);
    // get the current page URL
    const page = this.page.url;
    // does the page's image count exist in the captions?
    if (!captions[page]) {
        // then make a new entry for it
        captions[page] = 0;
    }
    captions[page]++;
    // if we're in dev mode, just return generic text
    // to understand why, read the repo's readme file
    if (isDev) return generateCaption("#", captionText);
    return generateCaption(captions[page], captionText);
}

export default function (eleventyConfig, pluginOptions) {
    // populate the default options
    options = { ...defaultConfig, ...pluginOptions };
    // calculate the class string based on options
    classStr = options.captionClass.length > 0
        ? ` class="${options.captionClass}"`
        : "";
    eleventyConfig.addLiquidShortcode('imageCaptionSimple', imageCaptionSimple);
}
