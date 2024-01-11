/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'flowbite.com'
            },
            {
                hostname: 'images.pexels.com'
            },
            {
                hostname: 'lh3.googleusercontent.com'
            },
            {
                hostname: 'avatars.githubusercontent.com'
            }
        ]
    },
    reactStrictMode: false
}

module.exports = nextConfig
