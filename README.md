# The Venue at Broken Bridge Farms
## Summary
`https://www.thevenueatbrokenbridgefarms.com/`

This repo houses the custom CSS and JS used for "The Venue at Broken Bridge Farms" which was rebranded and designed by [Marble and Match](https://www.marbleandmatch.com/) and [Desk of Danni](https://deskofdanni.design/).

"The Venue" is a Squarespace site and contains custom CSS and JS to align the Squarespace template with the proposed design.

## ⚠️ Important Notes
We used custom JS to inject our own HTML into the primary homepage heading to provide additional control over how the text wraps on wider viewports.

### Changing the home page heading
When logged into the Squarespace backend, navigate to [pages > code-injection](https://clavichord-purple-nrgt.squarespace.com/config/pages/code-injection). From there, there are a couple options:

**Option 1.** (Easier option) Disable the JS that replaces the HTML altogether by deleting line 6 `replaceVenueText()`. This will allow changes within the Squarespace editor to persist normally, but the custom styling that allows for cleaner line-breaks will no longer apply.

**Option 2.** (Requires coding) Navigate to the function starting on line 214 `replaceVenueText()` and write your own custom HTML to control where you want the line-breaks to apply by using the CSS class `text-wrap--desktop`.
