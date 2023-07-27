import Route from '@ember/routing/route';
import { later } from '@ember/runloop';

export default class ApplicationRoute extends Route {
  setupController(controller) {
    super.setupController(...arguments);

    controller.object.foos = [1, 2, 3];
  }
}
