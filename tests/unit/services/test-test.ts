import { module, test } from 'qunit';
import { setupTest } from 'generic-args/tests/helpers';

module('Unit | Service | test', function (hooks) {
    setupTest(hooks);

    // TODO: Replace this with your real tests.
    test('it exists', function (assert) {
        const service = this.owner.lookup('service:test');
        assert.ok(service);
    });
});
