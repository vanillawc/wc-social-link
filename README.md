# WC-Social-Link

[![GitHub release](https://img.shields.io/github/v/release/vanillawc/wc-social-link.svg)](https://github.com/vanillawc/wc-social-link/releases)
[![npm](https://badgen.net/npm/v/@vanillawc/wc-social-link)](https://www.npmjs.com/package/@vanillawc/wc-social-link)
[![downloads](https://badgen.net/npm/dt/@vanillawc/wc-social-link)](https://www.npmjs.com/package/@vanillawc/wc-social-link)
[![Known Vulnerabilities](https://snyk.io/test/npm/@vanillawc/wc-social-link/badge.svg)](https://snyk.io/test/npm/@vanillawc/wc-social-link)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/vanillawc/wc-social-link/master/LICENSE)
[![Actions Status](https://github.com/vanillawc/wc-social-link/workflows/Release/badge.svg)](https://github.com/vanillawc/wc-social-link/actions)

A Vanilla Web Component for easily defining links to social network profiles

 <!-- TODO: Add video graphic here -->

This customponent provides a simple way to embed social network links into your site. The icons are optimized SVG symbols optimized for efficient loading and easy customizability.

Networks supported include `[linkedin, github, twitter, stackoverflow]` but this list is expected to grow significantly. If you don't see a network you'd like to link to, check the [issues][] and add a new issue if you don't already see it listed.

-----

## Installation

```sh
npm i @vanillawc/wc-social-link
```

The package can be found in `node_modules/@vanillawc/wc-social-link`.

-----

## Usage

### Basic Usage

Provide the name of the social network (ex twitter) and your user handle (ie username)

```html
<wc-social network="github" handle="evanplaice"></wc-social>
```

*Note: [StackOverflow is dumb][], your profile can't be linked to using just your username so you'll have to use your USERID as the handle.*

***Demo: [WC-Social-Link - Demo][]***

### Basic Usage w/ Custom Link

Alternatively, instead of providing a handle and relying on the built-in link you can just provide your own.

<wc-social network="github" href="https://github.com/evanplaice"></wc-social>

***Demo: [WC-Social-Link - 'link'][]***


### Override the Title

For a11y, the component automatically defined a `title` attribute as `[network] link`. If you'd like to add a more compelling title, just define it as an attribute.

<wc-social network="github" handle="evanplaice" title="Interesting Title"></wc-social>

***Demo: [WC-Social-Link - 'title'][]***


### Styling

Stying the link can be done using standard CSS

```html
<wc-social network="github" href="https://github.com/evanplaice"></wc-social>
```

Default Styles

- width: 32px
- height: 32px
- stroke: black
- fill: black


[WC-Social-Link - Demo]: https://vanillawc.github.io/wc-social-link/demo/basic-usage.html
[WC-Social-Link - 'link']: https://vanillawc.github.io/wc-social-link/demo/link-attribute.html
[WC-Social-Link - 'title']: https://vanillawc.github.io/wc-social-link/demo/title-attribute.html
[issues]: https://github.com/vanillawc/wc-social-link/issues
[StackOverflow is dumb]: https://meta.stackexchange.com/a/914/147836
