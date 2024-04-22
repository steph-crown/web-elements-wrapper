import {
  applyPolyfills,
  defineCustomElements,
} from "@stephcrown06/web-elements-core/loader";

import { Plugin } from "vue";

export const ComponentLibrary: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};
