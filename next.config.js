/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'skygarden.azureedge.net',
//         // port: '',
//         pathname: '/images-thumbnails/products/**',
//       },
//     ],
//   },
// }
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'ke.jumia.is',
//         // port: '',	
//         pathname: '/unsafe/fit-in/300x300/filters:fill(white)/product/**',
//       },
//     ],
//   },
// }
module.exports = {
  images: {
    loader: 'custom',
    loaderFile: '../images/blank_img',
  },
}
module.exports = {
  images: {
    domains: ['ke.jumia.is', 'skygarden.azureedge.net','imgs.search.brave.com', 'skygardenwe.blob.core.windows.net'],
  },
}
// https://imgs.search.brave.com/0yLrblPzyunUokRG8VUHUIHKBKwcwlsxJF6Rr-DUSCk/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5J/OWVIX1JSb0JPQ0hU/bWJhaDhSbXVBSGFI/YSZwaWQ9QXBp