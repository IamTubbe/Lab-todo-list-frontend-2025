/** @type {import('next').NextConfig} */
const repoName = 'todo-frontend'; // คุณอาจจะต้องเอา // หน้าบรรทัดนี้ออกด้วย ถ้าต้องการใช้ basePath/assetPrefix
const nextConfig = {
  output: 'export', // <--- เอา // ออกแล้ว
  basePath: `/${repoName}`,     // <--- ถ้าจะ Deploy บน GitHub Pages ต้องเอา // ออกด้วย
  assetPrefix: `/${repoName}/`, // <--- ถ้าจะ Deploy บน GitHub Pages ต้องเอา // ออกด้วย
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
