
const express = require('express');
const app = express();

// ==================================
// AKTIVITAS 1: ROUTING DASAR
// ==================================

app.get('/', (req, res) => {
    res.send('Selamat Datang di Halaman Utama');
});

app.get('/about', (req, res) => {
    res.send('Ini adalah Halaman About');
});

app.get('/contact', (req, res) => {
    res.send('Ini adalah Halaman Contact');
});


// ==================================
// AKTIVITAS 2: PARAMETER DINAMIS
// ==================================

app.get('/produk/:kode', (req, res) => {
    res.send('Produk dengan kode: ' + req.params.kode);
});


// ==================================
// AKTIVITAS 3: SIMULASI CRUD
// ==================================

let users = [
    { id: 1, nama: 'risa' },
    { id: 2, nama: 'alfin' },
    { id: 3, nama: 'alin' }
];

// GET - Menampilkan data pengguna
app.get('/users', (req, res) => {
    res.json(users);
});

// POST - Menambahkan data pengguna
app.post('/users', (req, res) => {
    const userBaru = {
        id: users.length + 1,
        nama: 'putra'
    };

    users.push(userBaru);

    res.send('Data pengguna berhasil ditambahkan');
});

// PUT - Mengubah data pengguna
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (user) {
        user.nama = 'Nama Baru';
        res.send('Data pengguna berhasil diubah');
    } else {
        res.status(404).send('Pengguna tidak ditemukan');
    }
});

// DELETE - Menghapus data pengguna
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(u => u.id !== id);

    res.send('Data pengguna berhasil dihapus');
});


// ==================================
// MENJALANKAN SERVER
// ==================================

app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});
