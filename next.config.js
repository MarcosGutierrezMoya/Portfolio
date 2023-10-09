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
    ],
  },
  env: {
    NEXT_PUBLIC_FIREBASE_APIKEY: "AIzaSyDUuhzYkv_srlvGhamSdtsw7lxpGLGOJcE",
    NEXT_PUBLIC_FIREBASE_AUTHDOMAIN: "portfolio-e6089.firebaseapp.com",
    NEXT_PUBLIC_FIREBASE_PROJECTID: "portfolio-e6089",
    NEXT_PUBLIC_FIREBASE_STORAGEBUCKET: "portfolio-e6089.appspot.com",
    NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID: "120973533427",
    NEXT_PUBLIC_FIREBASE_APPID: "1:120973533427:web:72d441146bbc2eb13dd786"
  }
}

module.exports = nextConfig
