
import Vue from "vue";

// import "vuetify/dist/vuetify.min.css";
// import "./theme.scss";
import "vuetify/src/styles/main.sass";
import Vuetify, {
  VApp, // required
  VNavigationDrawer,
  VFooter,
  VToolbar,
  VFadeTransition,
} from "vuetify/lib";
import { Ripple } from "vuetify/lib/directives";

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VToolbar,
    VFadeTransition,
  },
  directives: {
    // Ripple,
  },
});
Vue.use(Vuetify);

export default new Vuetify({});
