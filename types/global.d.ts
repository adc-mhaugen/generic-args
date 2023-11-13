// Types for compiled templates
declare module 'generic-args/templates/*' {
    import { TemplateFactory } from 'ember-cli-htmlbars';

    const tmpl: TemplateFactory;
    export default tmpl;
}
