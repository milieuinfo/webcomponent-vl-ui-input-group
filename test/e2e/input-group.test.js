const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlInputGroup = require('./pages/vl-input-group.page');

describe('vl-input-group', async () => {
    const vlInputGroup = new VlInputGroup(driver);

    before(async () => {
        return vlInputGroup.load();
    });

    it("Een gebruiker kan een input-addon en een input-field zien", async () => {
    	const inputGroup = await vlInputGroup.getInputGroup();

        await assert.eventually.isDefined(inputGroup.getInputAddon());
        await assert.eventually.isDefined(inputGroup.getInputField());
    });
});
