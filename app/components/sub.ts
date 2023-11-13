import Base from './base';

import type { BaseArgs } from './base';

export interface SubArgs extends BaseArgs {
    other: string;
}

export default class SubComponent extends Base<SubArgs> {}
