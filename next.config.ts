import nextra from "nextra";
import { NextConfig } from "next";

const withNextra = nextra({
  latex: true,
  search: process.env.NODE_ENV === 'production' ? {
    codeblocks: false
  } : false,
  contentDirBasePath: '/'
});

const config: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // assetPrefix: '/',
  // basePath: '',
  trailingSlash: true,
};

export default withNextra(config);