const {assert, getDriver} = require('vl-ui-core').Test.Setup;
const VlInputGroup = require('./pages/vl-input-group.page');

describe('vl-input-group', async () => {
  let vlInputGroup;

  before(async () => {
    vlInputGroup = new VlInputGroup(getDriver());
    return vlInputGroup.load();
  });

  it('Een gebruiker kan een input-group zien', async () => {
    await assert.eventually.exists(vlInputGroup.getInputGroup());
  });
});
