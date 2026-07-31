---
layout: default
title: Eleventy Image Caption Simple
---

Puppy dog images courtesy of [Unsplash](https://unsplash.com/s/photos/puppies)

The [Eleventy Plugin Image Caption](https://github.com/johnwargo/eleventy-plugin-image-caption) plugin adds a couple of shortcodes to an [11ty](https://www.11ty.dev/) that makes it easy to add numbered captions to images. This page uses the plugin, so you can see what it looks like in operation.

Here's a cute image of a dog sitting with a flower in her mouth.

![A dog holding a flower in its mouth](/images/richard-brutyo-Sg3XwuEpybU-unsplash.jpg)
{% imageCaptionSimple "Dog with Flower" %}

Photo by <a href="https://unsplash.com/@richardbrutyo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Richard Brutyo</a> on <a href="https://unsplash.com/photos/yellow-labrador-retriever-biting-yellow-tulip-flower-Sg3XwuEpybU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Notice the caption on the image above, the bold portion is generated based on the image number and the caption label configured when the site loads the plugin. The regular text to the right is passes as a parameter to the shortcode. You can configure the plugin to disable the bold label if you want.

**Note:** When you run this 11ty site in `serve` mode, the caption will show **image #**; when you run an 11ty site in development mode, every refresh of the app increments the image numbers. For that reason, the plugin returns generic text in that scenario.

Here's a picture of a cute puppy laying on the ground.

![A puppy lying on the ground](/images/mtsjrdl-5yAhL8ViUVg-unsplash.jpg)
{% imageCaptionSimple "A puppy lying down on the ground" %}

Photo by <a href="https://unsplash.com/@mtsjrdl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">mtsjrdl</a> on <a href="https://unsplash.com/photos/white-and-brown-long-coated-dog-5yAhL8ViUVg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
