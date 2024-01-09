/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'flowbite.com'
            },
            {
                hostname: 'images.pexels.com'
            }
        ]
    },
    reactStrictMode: false
}

module.exports = nextConfig
