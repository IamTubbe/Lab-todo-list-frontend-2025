/** @type {import('next').NextConfig} */
// const repoName = 'todo-frontend'; // Comment out repoName variable
const nextConfig = {
  // output: 'export', // 💡 คอมเมนต์บรรทัดนี้
  // basePath: `/${repoName}`,     // 💡 คอมเมนต์บรรทัดนี้
  // assetPrefix: `/${repoName}/`, // 💡 คอมเมนต์บรรทัดนี้
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
