const os = require('os');
const path = require('path');

console.log("Informasi Sistem Komputer");
console.log("-------------------------");
console.log("Sistem operasi:", os.platform());
console.log("Arsitektur:", os.arch());
console.log("Nama komputer:", os.hostname());
console.log("Folder saat ini:", process.cwd());
console.log("Pemisah folder:", path.sep);