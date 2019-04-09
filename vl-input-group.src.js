import { VlElement } from '/node_modules/vl-ui-core/vl-core.js';

/**
 * vl-ui-input-group
 * Gebruik vl-ui-input-group om een 'input field' en een 'input add-on' te combineren.
 * Bijvoorbeeld: de 'vl-datepicker' component combineert een 'input field' en een 'input add-on' in een 'input group'.

 * ### Slots
 * Slot | Uitleg
 * -----|--------
 * `default` | De content van het default slot wordt toegevoegd als content van de groep.
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