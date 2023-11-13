import { module, test } from 'qunit';
import { setupRenderingTest } from 'generic-args/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | base', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        await render(hbs`<Base />`);
        assert.ok(true);
    });
});
