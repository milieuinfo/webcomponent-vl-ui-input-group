const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlInputGroup = require('./pages/vl-input-group.page');

describe('vl-input-group', async () => {
    const vlInputGroup = new VlInputGroup(driver);

    before(async () => {
        return vlInputGroup.load();
    });

    it("Dummy test om de browsers te sluiten", () => {
    	assert.isTrue(true);
    });
});
