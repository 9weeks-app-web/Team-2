/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: true },
  images: {
    domains: ["source.unsplash.com"],
    domains: ["lh3.googleusercontent.com", "ssl.pstatic.net", "k.kakaocdn.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
