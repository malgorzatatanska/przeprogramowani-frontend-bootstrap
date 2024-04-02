import React from 'react';
import { useConfig } from '../context/ConfigContext';

export const VersionApp = () => {
  const { appVersion } = useConfig();
  const viteEnv = import.meta.env.VITE_ENVIRONMENT;

  return (
    <div>
      ENV: DEV - VER: {viteEnv} {appVersion}
    </div>
  );
};
