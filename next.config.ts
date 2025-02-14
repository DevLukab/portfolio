import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Activa el modo de exportación estática
  images: {
    unoptimized: true, // Evita errores con imágenes en next/image
  },
  basePath: "/modern-portfolio", // Nombre de tu repositorio en GitHub
  assetPrefix: "/modern-portfolio",
};

export default nextConfig;
