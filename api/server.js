const app = require('./app');
// const connectDatabase = require('./config/database');
const cloudinary = require('cloudinary');
const PORT = process.env.PORT || 4001;

// UncaughtException Error
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});

// connectDatabase();

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });

const server = app.listen(PORT, () => {
    console.log(`➡️  Server running on port ${PORT}`)
});

server.on('listening', () => console.log('➡️  Server actively listening'));

// Unhandled Promise Rejection
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    console.error('🛑 Unhandled Rejection:', err); //not displaying the unhandledRejection error for some reason. quietly shutting down server so commented out server.close()
    // server.close(() => {
    //     process.exit(1);
    // });
});