import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Activa el modo de exportación estática
  images: {
    unoptimized: true, // Evita errores con imágenes en next/image
  },
  basePath: "/portfolio", // Nombre de tu repositorio en GitHub
  assetPrefix: "/portfolio",
};

export default nextConfig;
