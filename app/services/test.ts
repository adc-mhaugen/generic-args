import Service from '@ember/service';

import type Component from '@glimmer/component';
import type EmberObject from '@ember/object';

export default class TestService extends Service {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    foo(context: Component<{ Args: { Named: {}; Positional: [] } }> | EmberObject): boolean {
        console.log(context);
        return true;
    }
}

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:test')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('test') declare altName: TestService;`.
declare module '@ember/service' {
    interface Registry {
        test: TestService;
    }
}
