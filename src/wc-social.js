const template = document.createElement('template');
template.innerHTML = `
<style>
  svg {
    width: 32px;
    height: 32px;
  }
</style>
<a><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512">
  <use />
</svg></a>
`;

export class WCSocial extends HTMLElement {

  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(document.importNode(template.content, true));
  };
  
  async connectedCallback() {
    this.network = (this.hasAttribute('network') ? this.getAttribute('network') : null);
    if(this.network) {
      this.setIcon();
    } else {
      throw Error(`WCSocial: 'network' attribue is require but missing`);
    }

    this.handle = (this.hasAttribute('handle') ? this.getAttribute('handle') : null);
    this.href = (this.hasAttribute('href') ? this.getAttribute('href') : null);

    if(this.handle || this.href) {
      this.setLink();
    }
  }

  setIcon() {
    let href = '../assets/';

    // lookup the svg url
    switch (this.network) {
      case 'github':
      case 'linkedin':
      case 'stackoverflow':
      case 'twitter':
        href += `${this.network}.svg#${this.network}`;
        break;
      default:
        throw Error(`WCSocial: network ${this.network} not supported`);
    }

    // set the icon
    const use = this.shadowRoot.querySelector('use');
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', href);
  }

  setLink() {
    let href;
    let title;

    // look up the network profile url
    switch(this.network) {
      case 'github':
        href = `https://github.com/${this.handle}`;
        title = 'GitHub';
        break;
      case 'linkedin':
        href = `https://linkedin.com/in/${this.handle}`;
        title = 'LinkedIn';
        break;
      case 'stackoverflow':
        href = `https://stackoverflow.com/u/${this.handle}`;
        title = 'StackOverflow'
        break;
      case 'twitter':
        href = `https://twitter.com/${this.handle}`;
        title = 'Twitter';
        break;
      default:
        throw Error(`WCSocial: network ${this.network} not supported`);
    }

    // overrid the link if the 'href' attribute is set
    if (this.href) {
      href = this.href;
    }

    // set the link
    const a = this.shadowRoot.querySelector('a');
    a.setAttribute('href', href);
    a.setAttribute('title', `${title} link`);
  }

}

customElements.define('wc-social', WCSocial);
