import "@theme/assets/styles/index.less";
import VueParticles from "vue-particles";
import { addLink } from "./utils/index.js";

export default ({ Vue, router, isServer }) => {
  Vue.use(VueParticles);
  if (!isServer) {
    addLink("http://at.alicdn.com/t/font_1162815_q0qldloxyos.css");
  }
};
