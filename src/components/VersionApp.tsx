import React from 'react';
import { useConfig } from '../context/ConfigContext';

export const VersionApp = () => {
  const { appVersion } = useConfig();
  const viteEnv = import.meta.env.VITE_ENVIRONMENT;

  console.log(import.meta.env);

  return (
    <div>
      ENV: {viteEnv} VER: {appVersion}
    </div>
  );
};
