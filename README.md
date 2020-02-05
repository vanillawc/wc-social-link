[![GitHub Releases](https://badgen.net/github/tag/vanillawc/wc-social-link)](https://github.com/vanillawc/wc-social-link/releases)
[![NPM Release](https://badgen.net/npm/v/@vanillawc/wc-social-link)](https://www.npmjs.com/package/@vanillawc/wc-social-link)
[![Bundlephobia](https://badgen.net/bundlephobia/minzip/@vanillawc/wc-social-link)](https://bundlephobia.com/result?p=@vanillawc/wc-social-link)
[![MIT License](https://badgen.net/github/license/vanillawc/wc-social-link)](https://raw.githubusercontent.com/vanillawc/wc-social-link/master/LICENSE)
[![Published on WebComponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/vanillawc/wc-social-link)
[![Latest Status](https://github.com/vanillawc/wc-social-link/workflows/Latest/badge.svg)](https://github.com/vanillawc/wc-social-link/actions)
[![Release Status](https://github.com/vanillawc/wc-social-link/workflows/Release/badge.svg)](https://github.com/vanillawc/wc-social-link/actions)

A Vanilla Web Component for easily defining links to social network profiles

This component provides a simple way to embed social network links into your site. The icons are optimized SVG symbols optimized for efficient loading and easy styling.

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
Custom Styles

**Custom Styles**
- `--width` - width of the icon (default `32px`)
- `--height` - height of the icon (default `32px`)
- `--color` - the icon color (default `black`)

### Basic Usage

Provide the name of the social network and your user handle

```html
<wc-social network="github" handle="evanplaice"></wc-social>
```

**Network Types**
- email
- github
- gitlab
- linkedin
- rss
- stackoverflow
- twitch
- twitter

*Note: For Stackoverflow, your `USERID` is your handle*

### Basic Usage w/ Custom Link

Alternatively, instead of providing a handle and relying on the built-in link you can just provide your own.

```html
<wc-social network="github" href="https://github.com/evanplaice"></wc-social>
```

-----

## Demos

### [WC-Social-Link-Demo - WebComponents.dev](https://webcomponents.dev/edit/urflGeFYnQ2S66ff46yE?sv=1&pm=1)
