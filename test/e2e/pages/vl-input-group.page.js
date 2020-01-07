const VlInputGroup = require('../components/vl-input-group');
const { Page } = require('vl-ui-core');
const { Config } = require('vl-ui-core');

class VlInputGroupPage extends Page {
    async _getInputGroup(selector) {
        return new VlInputGroup(this.driver, selector);
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-input-group.html');
    }
}

module.exports = VlInputGroupPage;