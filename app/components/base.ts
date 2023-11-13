import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

import type TestService from 'generic-args/services/test';

export interface BaseArgs {
    something: boolean;
}

export default abstract class BaseComponent<T extends BaseArgs = BaseArgs> extends Component<T> {
    @service declare test: TestService;

    get value(): boolean {
        return this.test.foo(this);
    }
}
