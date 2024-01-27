/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "http://localhost:5500",
                    },
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "http://localhost:3000",
                    },
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "https://accounts.google.com",
                    },
                    {
                        key: "Access-Control-Allow-Methods",
                        value: "GET,DELETE,PATCH,POST,PUT",
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
                    },
                ],
            },
        ];
    },
    images: {
        domains: ["i.imgur.com", "www.onlinewebfonts.com"],
    },
};

module.exports = nextConfig;
