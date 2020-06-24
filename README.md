<h1 align="center">&lt;wc-social-link&gt; Icon Links for Social Media</h1>

<div align="center">
  <a href="https://github.com/vanillawc/wc-social-link/releases"><img src="https://badgen.net/github/tag/vanillawc/wc-social-link" alt="GitHub Releases"></a>
  <a href="https://www.npmjs.com/package/@vanillawc/wc-social-link"><img src="https://badgen.net/npm/v/@vanillawc/wc-social-link" alt="NPM Releases"></a>
  <a href="https://bundlephobia.com/result?p=@vanillawc/wc-social-link"><img src="https://badgen.net/bundlephobia/minzip/@vanillawc/wc-social-link" alt="Bundlephobia"></a>
  <a href="https://raw.githubusercontent.com/vanillawc/wc-social-link/master/LICENSE"><img src="https://badgen.net/github/license/vanillawc/wc-social-link" alt="MIT License"></a>
  <a href="https://www.webcomponents.org/element/vanillawc/wc-social-link"><img src="https://img.shields.io/badge/webcomponents.org-published-blue.svg" alt="Published on WebComponents.org"></a>
  <a href="https://github.com/vanillawc/wc-social-link/actions"><img src="https://github.com/vanillawc/wc-social-link/workflows/Latest/badge.svg" alt="Latest Status"></a>
  <a href="https://github.com/vanillawc/wc-social-link/actions"><img src="https://github.com/vanillawc/wc-social-link/workflows/Release/badge.svg" alt="Release Status"></a>
</div>

## Installation

*Installation*
```sh
npm i @vanillawc/wc-social-link
```

*Import from NPM*
```html
<script type="module" src="node_modules/@vanillawc/wc-social-link/index.js"></script>
```

*Import from CDN*
```html
<script type="module" src="https://cdn.jsdelivr.net/gh/vanillawc/wc-social-link/index.js"></script>
```

## Demo

Try it on [WebComponents.dev](https://webcomponents.dev/edit/urflGeFYnQ2S66ff46yE?sv=1&pm=1)

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
<wc-social-link network="github" handle="evanplaice"></wc-social-link>
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
<wc-social-link network="github" href="https://github.com/evanplaice"></wc-social-link>
```
