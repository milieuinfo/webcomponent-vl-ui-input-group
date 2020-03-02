const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlInputGroup = require('./pages/vl-input-group.page');

describe('vl-input-group', async () => {
    const vlInputGroup = new VlInputGroup(driver);

    before(async () => {
        return vlInputGroup.load();
    });

    it("Een gebruiker kan een input-group zien", async () => {
    	await assert.eventually.exists(vlInputGroup.getInputGroup());
    });
});
