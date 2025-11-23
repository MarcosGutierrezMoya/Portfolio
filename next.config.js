/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.icon-icons.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn1.iconfinder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn2.unrealengine.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets-global.website-files.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_FIREBASE_APIKEY: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    NEXT_PUBLIC_FIREBASE_AUTHDOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
    NEXT_PUBLIC_FIREBASE_PROJECTID: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    NEXT_PUBLIC_FIREBASE_STORAGEBUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
    NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
    NEXT_PUBLIC_FIREBASE_APPID: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  }
}

module.exports = nextConfig
