import type { NextConfig } from "next";
import { defaultConfig } from "next/dist/server/config-shared";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports={
  i18n:{
    locales: ['en', 'fr', 'hi'],
    defaultLocale: 'en'
  }
}

export default nextConfig;
