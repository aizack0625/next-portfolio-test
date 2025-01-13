"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

interface ParticlesOptions {
  fullScreen?: {
    enable: boolean;
  };
  [key: string]: any; // その他のオプションがある場合
}

interface ParticlesBackgroundProps {
  options?: ParticlesOptions;
}

const ParticlesBackground = ({ options }: ParticlesBackgroundProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        ...options
      }}
      className="absolute inset-0"
    />
  );
};

export default ParticlesBackground;
