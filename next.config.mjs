/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['duckie-resource.s3.ap-northeast-2.amazonaws.com']
  }
};

export default nextConfig;
