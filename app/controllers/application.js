import Controller from '@ember/controller';
import { deepTracked } from 'ember-deep-tracked';

export default class ApplicationController extends Controller {
  @deepTracked object = {};

  get hasFoo2() {
    return this.object.foos.includes(2);
  }
}
