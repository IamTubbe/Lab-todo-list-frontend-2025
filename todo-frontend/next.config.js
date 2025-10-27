/** @type {import('next').NextConfig} */
// const repoName = 'todo-frontend'; // <--- คอมเมนต์ไว้
const nextConfig = {
  output: 'export',
  // basePath: `/${repoName}`,     // <--- คอมเมนต์ไว้
  // assetPrefix: `/${repoName}/`, // <--- คอมเมนต์ไว้
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
