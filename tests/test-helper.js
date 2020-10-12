import Application from 'ember-sandbox-v2/app';
import config from 'ember-sandbox-v2/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
