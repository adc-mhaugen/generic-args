import Application from 'generic-args/app';
import config from 'generic-args/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

import 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
