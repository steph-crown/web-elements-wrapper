import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'web-elements-core',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: '@stephcrown06/web-elements-core',
      proxiesFile: '../web-elements-react/lib/components.ts',
    }),
    vueOutputTarget({
      componentCorePackage: '@stephcrown06/web-elements-core',
      proxiesFile: '../web-elements-vue/lib/components.ts',
    }),
  ],
  testing: {
    browserHeadless: 'new',
  },
};
