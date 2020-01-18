/* eslint no-undef: 0 */
export class WCSocialLink extends HTMLElement {
  static get observedAttributes () {
    return ['network', 'handle', 'href', 'title'];
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (!this.__initialized) { return; }
    if (oldValue !== newValue) {
      this[name] = newValue;
    }
  }

  get network () { return this.getAttribute('network'); }
  set network (value) {
    this.setAttribute('network', value);
    this.setNetwork();
  }

  get handle () { return this.getAttribute('handle'); }
  set handle (value) {
    this.setAttribute('handle', value);
    this.setHandle();
  }

  get href () { return this.getAttribute('href'); }
  set href (value) {
    this.setAttribute('href', value);
    this.setHref();
  }

  get title () { return this.getAttribute('title'); }
  set title (value) {
    this.setAttribute('title', value);
    this.setTitle();
  }

  constructor () {
    super();
    this.__initialized = false;
    this.innerHTML = WCSocialLink.template();
    this.__networks = WCSocialLink.networks();
    this.__use = this.querySelector('use');
    this.__a = this.querySelector('a');
  }

  async connectedCallback () {
    this.style.width = (this.style.width) ? this.style.width : '32px';
    this.style.height = (this.style.height) ? this.style.height : '32px';

    if (this.hasAttribute('network')) {
      this.setNetwork();
    }

    if (this.hasAttribute('handle')) {
      this.setHandle();
    }

    if (this.hasAttribute('href')) {
      this.setHref();
    }

    this.setTitle();

    this.__initialized = true;
  }

  setNetwork () {
    const network = this.getAttribute('network');
    const href = `${WCSocialLink.assetDir()}${network}.svg#${network}`;
    this.__use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', href);
  }

  setHandle () {
    const handle = this.getAttribute('handle');
    const network = this.getAttribute('network');
    const href = `${this.__networks[network].href}${handle}`;
    this.href = href;
  }

  setHref () {
    const href = this.getAttribute('href');
    this.__a.setAttribute('href', href);
  }

  setTitle () {
    let title = this.getAttribute('title');
    if (!title) {
      title = this.__networks[this.network].title;
      this.setAttribute('title', title);
    }
    this.__a.setAttribute('title', title);
  }

  static template () {
    return `
      <a style="width: inherit; height: inherit">
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512" style="width: inherit; height: inherit;">
          <use />
        </svg></a>`;
  }

  static networks () {
    return {
      email: {
        href: 'mailto://',
        title: 'Email Address'
      },
      github: {
        href: 'https://github.com/',
        title: 'GitHub Profile'
      },
      gitlab: {
        href: 'https://gitlab.com/',
        title: 'GitLab Profile'
      },
      linkedin: {
        href: 'https://linkedin.com/in/',
        title: 'LinkedIn Profile'
      },
      rss: {
        href: 'https://',
        title: 'RSS Feed'
      },
      stackoverflow: {
        href: 'https://stackoverflow.com/u/',
        title: 'StackOverflow Profile'
      },
      twitch: {
        href: 'https://twitch.tv/',
        title: 'Twitch Channel'
      },
      twitter: {
        href: 'https://twitter.com/',
        title: 'Twitter Profile'
      }
    };
  }

  static assetDir () {
    const pathname = new URL(import.meta.url).pathname;
    return pathname.split('/').slice(0, -2).join('/') + '/assets/';
  }
}

customElements.define('wc-social-link', WCSocialLink);
