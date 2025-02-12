import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'remote',
  exposes: {
    './Routes': 'apps/remote/src/app/remote-entry/entry.routes.ts',
    './Component': 'apps/remote/src/app/components/login.component.ts',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
