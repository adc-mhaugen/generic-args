import Base from './base';

import type { BaseSignature } from './base';

export interface SubSignature {
    Args: BaseSignature['Args'] & {
        other: string;
    };
}

export default class SubComponent extends Base<SubSignature> {}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        Sub: typeof SubComponent;
    }
}
