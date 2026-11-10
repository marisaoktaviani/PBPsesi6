const http = require('http');
const port = 8000;

const siswa = [
    {
        nama: "Marisa",
        matkul: "Pemrograman Berbasis Platform",
        server: "Node.js"
    },
    {
        nama: "Risa",
        matkul: "Pemrograman Berbasis Platform",
        server: "Node.js"
    }
];

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url == '/') {
        res.write('<html><body><h2>Anda berada pada halaman index</h2></body></html>');
    }
    else if (req.url == '/siswa') {
        let baris = '';
        siswa.forEach((s, i) => {
            baris += `<tr>
                <td>${i + 1}</td>
                <td>${s.nama}</td>
                <td>${s.matkul}</td>
                <td>${s.server}</td>
            </tr>`;
        });

        res.write(`<html><body>
            <h2>Anda berada pada halaman siswa</h2>
            <table border="1" cellpadding="8" cellspacing="0">
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Mata Kuliah</th>
                    <th>Server</th>
                </tr>
                ${baris}
            </table>
        </body></html>`);
    }
    else if (req.url == '/dosen') {
        res.write('<html><body><h2>Anda berada pada halaman dosen</h2></body></html>');
    }
    else if (req.url == '/admin') {
        res.write('<html><body><h2>Anda berada pada halaman admin</h2></body></html>');
    }
    else {
        res.write('<html><body><h2>Page Not Found (404)</h2></body></html>');
    }

    res.end();
}).listen(port, () => {
    console.log(`Server is listening on port ${port} `);
});