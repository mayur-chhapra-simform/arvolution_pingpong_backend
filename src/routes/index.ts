
/**
 * Author: Mayur
 */
import user from "./v1/user";


/**
 *
 * @param application - Express app instance
 * @param versionTag - Version tag will be goes here
 * @param controllers - Set of controller(s) along with specific routes
 */
const defineRoute = (application: any, versionTag: string, controllers: any) => {
  const versionPath = versionTag ? `/${versionTag}/` : `/`;
  for (const controller in controllers) {
    if (controllers.hasOwnProperty(controller)) {
      const path = versionPath + controller;
      // tslint:disable-next-line:no-console
      console.log("Routes: ", path);
      application.use(path, controllers[controller]);
    }
  }
};

export default (app: any) => {
  defineRoute(app, "v1", {
    user,
  });
};