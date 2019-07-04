import "prismjs/themes/prism-tomorrow.css";
// Styles for line highlighting in code blocks
import "saber-highlight-css/default.css";
// @ points to current working directory
import "@/css/global.css";

export default ({ router }) => {
  // Progress bar is not needed on server-side
  if (process.browser) {
    // These dependencies are only bundled in client build
    const nprogress = require("nprogress");
    require("nprogress/nprogress.css");

    const loaded = Object.create(null);

    router.beforeEach((to, from, next) => {
      if (!loaded[to.path]) {
        // Start progress bar before entering page
        nprogress.start();
      }
      next();
    });

    router.afterEach(to => {
      loaded[to.path] = true;
      // Stop progress bar after entering page
      nprogress.done();
    });
  }
};
