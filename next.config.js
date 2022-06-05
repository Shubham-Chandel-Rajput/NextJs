/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGO_URI:"mongodb+srv://shubham:chandel@cluster0.qiwmw.mongodb.net/firstDatabase?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
