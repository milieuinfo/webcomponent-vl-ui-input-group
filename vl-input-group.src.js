import { VlElement } from '/node_modules/vl-ui-core/vl-core.js';

/**
 * vl-ui-input-group
 *
 * @demo demo/vl-ui-input-group.html
 */
export class VlInputGroup extends VlElement(HTMLElement) {

  constructor() {
    super(`
            <style>
                @import "../style.css";
            </style>
            <div class="vl-input-group">
              <slot></slot>
            </div>
        `);
  }

}

customElements.define('vl-input-group', VlInputGroup);