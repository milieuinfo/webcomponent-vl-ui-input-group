const { VlElement } = require('vl-ui-core').Test;
const { By } = require('vl-ui-core').Test.Setup;

class VlInputGroup extends VlElement {  
    async getInputAddon() {
        return this.findElement(By.css('.vl-input-addon'));
    }

    async getInputField() {
        return this.findElement(By.css('.vl-input-field'));
    }
}

module.exports = VlInputGroup;
