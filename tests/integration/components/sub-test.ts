import { module, test } from 'qunit';
import { setupRenderingTest } from 'generic-args/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | sub', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        await render(hbs`<Sub @other="t" @something={{true}} />`);
        assert.ok(true);
    });
});
