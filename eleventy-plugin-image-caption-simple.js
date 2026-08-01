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

var boldStart;
var boldEnd;
var classStr;
var options = {};

const defaultOptions = {
    captionBold: true,
    captionClass: 'caption',
    captionLabel: 'Image'
};

function imageCaptionSimple(captionText) {
    console.log(`[ImageCaptionSimple] "${captionText}"`);
    // get the current page URL
    const page = this.page.url;
    // does the page's image count exist in the captions?
    // then add this page count to the array
    if (!captions[page]) captions[page] = 0;
    // increment the array value for this page
    captions[page]++;
    return `<p${classStr}>${boldStart}${options.captionLabel} ${captions[page]}: ${boldEnd}${captionText}</p>`
}

export default function (eleventyConfig, pluginOptions) {
    // populate the default options
    options = { ...defaultOptions, ...pluginOptions };
    // calculate the bold strings based on options
    boldStart = options.captionBold ? "<strong>" : "";
    boldEnd = options.captionBold ? "</strong>" : "";
    // calculate the class string based on options
    classStr = options.captionClass.length > 0 ? ` class="${options.captionClass}"` : "";
    eleventyConfig.addLiquidShortcode('imageCaptionSimple', imageCaptionSimple);
}
