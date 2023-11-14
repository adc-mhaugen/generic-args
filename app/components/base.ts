import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

import type TestService from 'generic-args/services/test';

export interface BaseSignature {
    Args: {
        something: boolean;
    };
}

export default abstract class BaseComponent<T extends BaseSignature = BaseSignature> extends Component<T> {
    @service declare test: TestService;

    get value(): boolean {
        return this.test.foo(this);
    }
}
