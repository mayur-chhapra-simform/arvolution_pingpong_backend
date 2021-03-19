
/**
 * Author: Mayur
 */
import user from './v1/user'
import game from './v1/game'
import score from './v1/score'


/**
 *
 * @param application - Express app instance
 * @param versionTag - Version tag will be goes here
 * @param controllers - Set of controller(s) along with specific routes
 */
const defineRoute = (application: any, versionTag: string, controllers: any) => {
  const versionPath = versionTag ? `/api/${versionTag}/` : `/`;
  for (const controller in controllers) {
    if (controllers.hasOwnProperty(controller)) {
      const path = versionPath + controller;
      application.use(path, controllers[controller]);
    }
  }
};

/**
 * Route binding
 */
export default (app: any) => {
  defineRoute(app, "v1", {
    user,
    game,
    score
  });
};