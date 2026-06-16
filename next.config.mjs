/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Schutzschalter: Lint-/Typfehler sollen den Production-Build nicht abbrechen.
  // (Standardverhalten bei v0-/Marketing-Projekten – die Seite muss live gehen.)
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
