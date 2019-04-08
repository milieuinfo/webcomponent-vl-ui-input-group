import { NativeVlElement } from '/node_modules/vl-ui-core/vl-core.js';

/**
 * vl-ui-input-group
 *
 * @demo demo/vl-ui-input-group.html
 */
export class VlInputGroup extends NativeVlElement(HTMLDivElement) {

  connectedCallback() {
    this.classList.add('vl-input-group');
  }

}

customElements.define('vl-input-group', VlInputGroup, {extends: 'div'});