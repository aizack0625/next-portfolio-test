"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import type { ISourceOptions, MoveDirection, OutMode } from "tsparticles-engine";

interface ParticlesBackgroundProps {
  options?: Partial<ISourceOptions>;
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
