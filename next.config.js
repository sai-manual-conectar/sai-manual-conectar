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
          source: '/',
          destination: '/login', 
          permanent: true,
        },
      ]
    },
  }