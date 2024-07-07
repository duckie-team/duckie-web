/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [{
      protocol: 'https', hostname: 'duckie-resource.s3.ap-northeast-2.amazonaws.com', pathname: '/problem/question-image/**',
    }]
  }
};

export default nextConfig;
