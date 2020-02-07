/* eslint no-undef: 0 */
export class WCSocialLink extends HTMLElement {
  static get observedAttributes () {
    return ['network', 'handle', 'href'];
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

  constructor () {
    super();
    this.setAttribute('role', 'link');
    this.__initialized = false;
    this.attachShadow({ mode: 'open' });
    this.__svgs = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.__svgs.style.display = 'none';
    this.__svgs.innerHTML = WCSocialLink.svgs();
    this.shadowRoot.appendChild(this.__svgs);
    this.__template = document.createElement('template');
    this.__template.innerHTML = WCSocialLink.template();
    this.shadowRoot.appendChild(this.__template.content.cloneNode(true));
    this.__networks = WCSocialLink.networks();
    this.__use = this.shadowRoot.querySelector('use');
  }

  async connectedCallback () {
    if (this.hasAttribute('network')) {
      this.setNetwork();
    }

    if (this.hasAttribute('handle')) {
      this.setHandle();
    }

    if (this.hasAttribute('href')) {
      this.setHref();
    }

    this.__initialized = true;
  }

  setNetwork () {
    const network = this.getAttribute('network');
    this.__use.setAttribute('href', `#${network}`);
    const label = `${this.__networks[network].label} Link`;
    this.setAttribute('aria-label', label);
  }

  setHandle () {
    const handle = this.getAttribute('handle');
    const network = this.getAttribute('network');
    if (!this.hasAttribute('href')) {
      const href = `${this.__networks[network].href}${handle}`;
      this.shadowRoot.querySelector('a').href = href;
    }
  }

  setHref () {
    const href = this.getAttribute('href');
    this.shadowRoot.querySelector('a').href = href;
  }

  static template () {
    return `
      <style>
        :host {
          width: var(--width, 32px);
          height: var(--height, 32px);
          stroke: var(--color, black);
          fill: var(--color, black);
        }

        a {
          width: var(--width, 32px);
          height: var(--height, 32px);
        }

        svg {
          width: var(--width, 32px);
          height: var(--height, 32px);
        }
      </style>
      <a role="none" aria-label="not used">
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512">
          <use />
        </svg></a>`;
  }

  static networks () {
    return {
      email: {
        href: 'mailto:',
        label: 'Email Address'
      },
      github: {
        href: 'https://github.com/',
        label: 'GitHub Profile'
      },
      gitlab: {
        href: 'https://gitlab.com/',
        label: 'GitLab Profile'
      },
      linkedin: {
        href: 'https://linkedin.com/in/',
        label: 'LinkedIn Profile'
      },
      rss: {
        href: 'https://',
        label: 'RSS Feed'
      },
      stackoverflow: {
        href: 'https://stackoverflow.com/u/',
        label: 'StackOverflow Profile'
      },
      twitch: {
        href: 'https://twitch.tv/',
        label: 'Twitch Channel'
      },
      twitter: {
        href: 'https://twitter.com/',
        label: 'Twitter Profile'
      }
    };
  }

  static svgs () {
    return `
    <svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" viewBox="0 0 512 512">
      <symbol id="email" stroke="inherit" fill="inherit">
        <path d="m27.688 86c-7.597 0-14.459 3.046-19.452 7.991l220.08 203.15c7.2636 7.2435 17.77 11.329 28.004 11.329 10.238 0 20.06-4.0684 27.324-11.317l218.5-204.64c-4.81-4.063-11.03-6.51-17.84-6.51h-456.62zm483.49 21.05-170.13 159.2 170.95 129.43v-281.86c0-2.3358-0.28754-4.6013-0.82227-6.7663zm-510.85 2.45c-0.21607 1.41-0.33008 2.85-0.33008 4.32v284.36c0 2.272 0.27447 4.4765 0.78125 6.5877l169.68-138.05-170.13-157.22zm182.03 168.21-173.39 141c4.919 4.53 11.485 7.29 18.718 7.29h456.62c9.8291 0 18.423-5.0989 23.334-12.814l-178.88-135.44-27.307 25.552c-11.332 13.579-28.066 21.421-45.703 21.421-17.621 0-34.34-7.8299-45.672-21.388l-27.727-25.623z"/>
      </symbol>
      <symbol id="github" stroke="inherit" fill="inherit">
        <path d="m191.09 450.54 0.038 51.308c0.0174 5.2738-8.2716 11.394-14.932 9.4937-106.11-34.72-176.2-135.21-176.2-249.25 0.0024038-144.76 114.62-262.09 256-262.09 141.38 0.00000224 256 117.33 256 262.09 0 114.4-72.48 215.58-179.11 249.91-8.7327 0.004-12.047-5.4884-13.713-10.146l-0.027-82.973c-1.0138-18.607-5.7645-30.524-16.59-40.616 100.54-5.7331 115.91-81.112 116.35-129.37-4.2367-44.051-12.277-49.482-27.294-70.285 8.0585-23.317 7.0901-45.794-2.5868-69.569-2.3917-0.32866-9.3944 0.00048-12.272 0.32091-22.482 2.2876-40.34 14.718-57.055 26.784-20.618-6.3548-42.542-8.837-65.043-8.837-23.323 0-44.306 2.7048-64.375 8.9208-9.4726-6.736-38.412-25.823-60.798-27.42-3.5429-0.0193-7.0824 0.44942-10.467 1.2109-9.1852 21.701-8.5025 46.121-1.8527 69.69-14.902 13.724-26.67 36.53-26.653 69.302 2.1542 58.86 19.868 121.9 117.19 129.18-11.208 11.55-13.649 19.692-15.651 34.838-9.7797 4.797-22.197 7.3485-31.2 7.657-29.797-1.5381-44.638-32.393-49.418-37.831-18.962-22.55-41.431-19.758-44.618-14.682 0 0-1.2833 5.0463 4.2646 8.9454 10.994 7.7268 15.382 12.706 23.355 21.506 10.446 16.676 6.9051 26.827 27.62 42.416 24.716 20.314 67.552 9.8787 68.995 9.5195"/>
      </symbol>
      <symbol id="gitlab" stroke="inherit" fill="inherit">
        <path d="m162.22 201.55 93.85 289.45 93.8-289.45z"/>
        <path d="m416.11 21.965c3.9777-0.000001 8.0162 3.737 11.048 10.535l54.893 169.06-132.18 0.56049 55.075-169.62c3.0297-6.778 7.1949-10.535 11.166-10.535z"/>
        <path d="m95.518 20c4.3607-0.000002 8.55 4.4832 11.68 12.499l55.021 169.45-132.13-0.393 54.892-169.06c3.131-8.037 6.168-12.5 10.535-12.5z"/>
        <path d="m512 293.76c-1.2952 6.1702-3.5824 11.692-6.638 16.018-83.12 60.37-166.2 120.81-249.29 181.22l225.98-289.44c9.9767 30.736 19.962 61.47 29.947 92.203z"/>
        <path d="m30.09 201.56 225.98 289.44c-83.26-60.46-166.39-121.1-249.69-181.51-2.897-4.17-5.09-9.43-6.38-15.29 10.036-30.88 20.063-61.76 30.09-92.64z"/>
      </symbol>
      <symbol id="linkedin" stroke="inherit" fill="inherit">
        <path d="m35.356 0c-19.586 0-35.356 15.768-35.356 35.354l0.000050097 441.28c0 19.6 15.77 35.37 35.356 35.37h441.28c19.59 0 35.36-15.77 35.36-35.36v-441.28c0-19.587-15.77-35.355-35.36-35.355h-441.28zm76.994 66.215a48.017 48.017 0 0 1 48.01 48.015 48.017 48.017 0 0 1 -48.01 48.02 48.017 48.017 0 0 1 -48.018 -48.02 48.017 48.017 0 0 1 48.018 -48.015zm238.88 115.26c63.233 0.35068 85.566 49.256 87.51 86.077v170.04h-76.899v-142.36c0.90175-31.351-16.762-41.531-39.757-41.821-23.836-0.3106-44.617 11.783-44.907 42.032v142.21l-5.3604 0.01-70.837 0.01v-249h70.837l-0.02 37.934c6.2621-24.979 45.198-45.118 79.434-45.118v-0.01zm-277.85 7.1339h76.919v248.98h-76.919v-248.98z"/>
      </symbol>
      <symbol id="rss" stroke ="inherit" fill="inherit">
        <path  d="m40.168 114.31-0.001-82.286c238.59 10.409 429.57 201.45 439.94 440l-82.239-0.0116c-10.24-193.17-164.51-347.44-357.7-357.7zm-0.06607 144.06c115.25 6.3973 207.25 98.42 213.62 213.65l73.898 0.003c-9.15-154.83-132.67-278.36-287.52-287.54zm116.75 155.12a57.924 57.92 0 0 1 -57.924 57.92 57.924 57.92 0 0 1 -57.924 -57.92 57.924 57.92 0 0 1 57.924 -57.92 57.924 57.92 0 0 1 57.924 57.92z"/>
      </symbol>
      <symbol id="stackoverflow" stroke="inherit" fill="inherit">
        <path d="m387.04 6.8117 38.42-6.8117 34.54 196.94l-38.42 6.81zm-128.56 62.767 31.95-22.5 114.08 163.81-31.95 22.5zm-85.268 104.87 19.507-33.974 172.24 99.994-19.506 33.974zm-36.39 103.25 10.097-37.891 192.12 51.758-10.091 37.89zm-10.766 88.471 3.4003-39.078 198.14 17.429-3.4002 39.078zm-0.64919 76.06-0.00007-39.228 198.89-0.00012 0.00006 39.228zm230.27 30.678 0.006-173.07 38.966 0.00009-0.00006 212.13c-122.71 0-223.36-0.07-334.65 0.03l0.000012-212.17 38.966 0.00009-0.0026 173.06z"/>
      </symbol>
      <symbol id="twitch" stroke="inherit" fill="inherit">
        <rect y="133.8" x="211.95" width="43.436" height="132.34"/>
        <rect y="133.8" x="334.25" width="43.436" height="132.34"/>
        <path d="m501 0.00007c-152.51 0.003877-305.03-0.004269-457.54 0.003915l-32.46 89.044v355.98l122.46 0.0215-0.004 66.942 66.8 0.01c22.384-22.332 44.744-44.665 67.106-66.997h99.815l133.82-133.63c0-103.79-0.00005-207.58 0.002-311.37zm-412.58 43.877h368.68c0.0253 81.643-0.0446 163.29 0 244.93l-79.053 78.929-121.98 0.01-66.757 66.651 0.0117-67.028-100.91 0.0234 0.002-323.51z"/>
      </symbol>
      <symbol id="twitter" stroke="inherit" fill="inherit">
        <path d="m457.27 143.44c0.39451 6.718 0.59473 13.492 0.59473 20.318 0.01 175.21-131.94 317.24-294.72 317.24-57.26 0-113.28-17.95-161.14-51.62 6.9295 0.75145 13.824 1.1098 20.723 1.1098 49.619 0 95.301-18.141 131.63-48.598-45.992-1.3016-84.48-34.105-97.808-78.83 6.8965 1.7428 13.922 2.5774 20.969 2.5774 9.9735 0 19.592-1.636 28.629-4.6726-49.798-9.8595-85.95-56.582-85.95-111.08 0-0.36339 0.0016-0.72639 0.0048-1.089 12.785 9.073 27.763 13.909 43.076 13.909 1.0765 0 2.1479-0.0233 3.2133-0.0639-28.616-20.546-45.852-55.239-45.852-92.262 0-20.69 5.2688-40.054 14.441-56.625 55.85 68.446 134.06 110.9 217.7 118.73-2.2864-9.3557-3.5081-19.245-3.5081-28.934 0-62.157 46.813-112.55 104.56-112.55 29.98 0 56.956 13.487 76.022 35.247 25.334-2.306 48.493-12.219 67.601-27.532-5.9906 27.004-22.551 49.001-44.211 61.292 1.3954 0.0616 2.7919 0.0921 4.1884 0.0921 19.997 0 38.796-6.26 54.566-16.921-12.579 24.623-31.284 45.649-54.722 60.266z"/>
      </symbol>
    </svg>`;
  }
}

customElements.define('wc-social-link', WCSocialLink);
