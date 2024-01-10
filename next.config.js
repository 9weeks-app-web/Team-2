/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: true },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "ssl.pstatic.net",
      "k.kakaocdn.net",
      "source.unsplash.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
