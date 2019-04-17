const template = document.createElement('template');
template.innerHTML = `
<a style="width: inherit; height: inherit"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512" style="width: inherit; height: inherit;">
  <use />
</svg></a>
`;

export class WCSocialLink extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(document.importNode(template.content, true));

    // set default width/height
    this.style.width = (this.style.width) ?  this.style.width : '32px';
    this.style.height = (this.style.height)? this.style.height : '32px';
  };

  static get observedAttributes() {
    return ['network', 'href', 'handle', 'title'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
    }
  }

  async connectedCallback() {
    this.title = (this.hasAttribute('title') ? this.getAttribute('title') : null);
  }

  get network() { return this.getAttribute('network'); }
  set network(value) {
    // Edge: 'network' is required
    if (!value) { throw Error(`WCSocial: 'network' attribue is require but missing`); }

    // update attribute state
    this.setAttribute('network', value);

    // lookup the svg url
    let href = '../assets/';
    switch (value) {
      case 'github':
      case 'linkedin':
      case 'stackoverflow':
      case 'twitter':
      case 'rss':
      case 'twitch':
        href += `${value}.svg#${value}`;
        break;
      default:
        throw Error(`WCSocial: network ${value} not supported`);
    }

    // set the icon
    const use = this.shadowRoot.querySelector('use');
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', href);
  }

  get handle() { return this.getAttribute('handle'); }
  set handle(value) {
    // Edge: 'handle' not set
    if (value === null) { this.removeAttribute('handle'); return; }

    // update attribute state
    this.setAttribute('handle', value);

    let href;
    switch(this.network) {
      case 'github':
        href = `https://github.com/${value}`;
        break;
      case 'linkedin':
        href = `https://linkedin.com/in/${value}`;
        break;
      case 'stackoverflow':
        href = `https://stackoverflow.com/u/${value}`;
        break;
      case 'twitter':
        href = `https://twitter.com/${value}`;
        break;
      case 'twitch':
        href = `https://twitch.tv/${value}`;
        break;
      default:
        throw Error(`WCSocialLink: ${this.network} doesn't support the 'handle' attribute`);
    }
    this.href = href;
  }

  get href() {
    return this.getAttribute('href');
  }

  set href(value) {
    // Edge: 'href' not set
    if (value === null) { this.removeAttribute('href'); return; }

    // update attribute state
    this.setAttribute('href', value);

    // set the link
    const a = this.shadowRoot.querySelector('a');
    a.setAttribute('href', value);
  }

  get title() {
    return this.getAttribute('title');
  }

  set title(value) {
    // Default: Set to '[network] link'
    if (!value) {
      switch(this.network) {
        case 'github':
          value = 'GitHub Profile';
          break;
        case 'linkedin':
          value = 'LinkedIn Profile';
          break;
        case 'stackoverflow':
          value = 'StackOverflow Profile'
          break;
        case 'twitter':
          value = 'Twitter Profile';
          break;
        case 'rss':
          value = 'RSS Feed';
          break;
        case 'twitch':
          value = 'Twitch Channel';
          break;
      }
    }

    // update attribute state
    this.setAttribute('title', value);

    // set the link
    const a = this.shadowRoot.querySelector('a');
    a.setAttribute('title', value);
  }

}

customElements.define('wc-social-link', WCSocialLink);
