[![GitHub Releases](https://img.shields.io/github/v/release/vanillawc/wc-social-link.svg)](https://github.com/vanillawc/wc-social-link/releases)
[![NPM Release](https://badgen.net/npm/v/@vanillawc/wc-social-link)](https://www.npmjs.com/package/@vanillawc/wc-social-link)
[![Downloads](https://badgen.net/npm/dt/@vanillawc/wc-social-link)](https://www.npmjs.com/package/@vanillawc/wc-social-link)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/vanillawc/wc-social-link/master/LICENSE)
[![Published on WebComponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/vanillawc/wc-social-link)
[![Latest Status](https://github.com/vanillawc/wc-social-link/workflows/Latest/badge.svg)](https://github.com/vanillawc/wc-social-link/actions)
[![Release Status](https://github.com/vanillawc/wc-social-link/workflows/Release/badge.svg)](https://github.com/vanillawc/wc-social-link/actions)

A Vanilla Web Component for easily defining links to social network profiles

 <!-- TODO: Add video graphic here -->

This customponent provides a simple way to embed social network links into your site. The icons are optimized SVG symbols optimized for efficient loading and easy customizability.

Link types supported include

- email
- github
- gitlab
- linkedin
- rss
- stackoverflow
- twitch
- twitter

*Note More types can be requested in the [issues][].*

[issues]: https://github.com/vanillawc/wc-social-link/issues

-----

## Installation

```sh
npm i @vanillawc/wc-social-link
```

Then import the `index.js` file at the root of the package.

-----

## Usage

**Attributes**

- network - the network type (ex twitter)
- handle - the user handle/username
- href - the link (optional)
- title - the title/tooltip (optional)

### Basic Usage

Provide the name of the social network and your user handle

```html
<wc-social network="github" handle="evanplaice"></wc-social>
```

*Note: [StackOverflow is dumb][], your profile can't be linked to using just your username so you'll have to use your USERID as the handle.*

***Demo: [WC-Social-Link - Demo][]***

### Basic Usage w/ Custom Link

Alternatively, instead of providing a handle and relying on the built-in link you can just provide your own.

```html
<wc-social network="github" href="https://github.com/evanplaice"></wc-social>
```

***Demo: [WC-Social-Link - 'link'][]***


### Override the Title

For a11y, the component automatically defined a `title` attribute as `[network] link`. If you'd like to add a more compelling title, just define it as an attribute.

```html
<wc-social network="github" handle="evanplaice" title="Interesting Title"></wc-social>
```

***Demo: [WC-Social-Link - 'title'][]***


### Styling

Stying the link can be done using standard CSS

**Default Styles**

- width: 32px
- height: 32px
- stroke: black
- fill: black


[WC-Social-Link - Demo]: https://vanillawc.github.io/wc-social-link/demo/basic-usage.html
[WC-Social-Link - 'link']: https://vanillawc.github.io/wc-social-link/demo/link-attribute.html
[WC-Social-Link - 'title']: https://vanillawc.github.io/wc-social-link/demo/title-attribute.html
[StackOverflow is dumb]: https://meta.stackexchange.com/a/914/147836
