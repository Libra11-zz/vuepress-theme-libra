import "@theme/assets/styles/index.less";
import VueParticles from "vue-particles";
import { addLink } from "./utils/index.js";

export default ({ Vue, router }) => {
  Vue.use(VueParticles);
  addLink("http://at.alicdn.com/t/font_1162815_q0qldloxyos.css");
};
