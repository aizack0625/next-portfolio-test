"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

interface ParticlesOptions {
  fullScreen?: {
    enable: boolean;
  };
  particles?: {
    number?: {
      value?: number;
      density?: {
        enable?: boolean;
        value_area?: number;
        area?: number;
      };
    };
    color?: {
      value?: string | string[];
    };
    shape?: {
      type?: string;
    };
    opacity?: {
      value?: number;
      random?: boolean;
      animation?: {
        enable?: boolean;
        speed?: number;
        minimumValue?: number;
        sync?: boolean;
      };
    };
    size?: {
      value?: number;
      random?: boolean;
      animation?: {
        enable?: boolean;
        speed?: number;
        minimumValue?: number;
        sync?: boolean;
      };
    };
    links?: {
      enable?: boolean;
      distance?: number;
      color?: string;
      opacity?: number;
      width?: number;
    };
    move?: {
      enable?: boolean;
      speed?: number;
      direction?: string;
      random?: boolean;
      straight?: boolean;
      outModes?: {
        default?: string;
      };
    };
  };
  [key: string]: Record<string, unknown> | undefined;
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
