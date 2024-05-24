/** @type {import('next').NextConfig} */
const nextConfig = {
    //basePath: "/sai-manual-conectar",
    
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
  };
  
  module.exports = nextConfig;

  module.exports = {
    async redirects() {
      return [
        {
          basePath: "/sai-manual-conectar",
          source: '/',
          destination: '/login', 
          permanent: true,
        },
      ]
    },
  }