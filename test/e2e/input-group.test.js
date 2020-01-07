const { assert, driver } = require('vl-ui-core').Test;
const VlInputGroup = require('./pages/vl-input-group.page');

describe('vl-input-group', async () => {
    const vlInputGroup = new VlInputGroup(driver);

    before(() => {
        return vlInputGroup.load();
    });

});
