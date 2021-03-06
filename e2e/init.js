const detox = require('detox');
const config = require('../package.json').detox;
const adapter = require('detox/runners/jest/adapter');
const specReporter = require('detox/runners/jest/specReporter');

// Set the default timeout
// eslint-disable-next-line no-undef
jest.setTimeout(120000);

// eslint-disable-next-line no-undef
jasmine.getEnv().addReporter(adapter);

// This takes care of generating status logs on a per-spec basis. By default, jest only reports at file-level.
// This is strictly optional.
// eslint-disable-next-line no-undef
jasmine.getEnv().addReporter(specReporter);

// eslint-disable-next-line no-undef
beforeAll(async () => {
  await detox.init(config);
}, 300000);

// eslint-disable-next-line no-undef
beforeEach(async () => {
  try {
    await adapter.beforeEach();
  } catch (err) {
    // Workaround for the 'jest-jasmine' runner (default one): if 'beforeAll' hook above fails with a timeout,
    // unfortunately, 'jest' might continue running other hooks and test suites. To prevent that behavior,
    // adapter.beforeEach() will throw if detox.init() is still running; that allows us to run detox.cleanup()
    // in that emergency case and disable calling 'device', 'element', 'expect', 'by' and other Detox globals.
    // If you switch to 'jest-circus' runner, you can omit this try-catch workaround at all.

    await detox.cleanup();
    throw err;
  }
});

// eslint-disable-next-line no-undef
afterAll(async () => {
  await adapter.afterAll();
  await detox.cleanup();
});
