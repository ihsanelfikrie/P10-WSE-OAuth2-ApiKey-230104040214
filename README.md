cat <<EOF > README.md
# Praktikum 10: Simulasi API Key & OAuth 2.0

**Mata Kuliah:** Web Service Engineering  
**Nama:** Muhammad Nur Ihsan  
**NIM:** 230104040214  
**Kelas:** TI23 A  

## 📖 Deskripsi Proyek

Proyek ini adalah implementasi simulasi keamanan RESTful API menggunakan **Node.js** dan **Express.js**. Proyek ini mendemonstrasikan dua lapisan keamanan:

1.  **API Key**: Digunakan untuk mengamankan endpoint publik (Read-Only).
2.  **OAuth 2.0 (JWT)**: Digunakan untuk otentikasi user dan otorisasi akses ke endpoint privat (CRUD) berdasarkan peran (Role-Based Access Control).

## 📂 Struktur Folder

Berikut adalah struktur direktori dari proyek ini:

\`\`\`text
p10-oauth2-api-key-230104040214/
│
├── controllers/
│   ├── authController.js       # Logika login & generate token
│   └── productController.js    # Logika CRUD produk (Public & Private)
│
├── middleware/
│   ├── validateApiKey.js       # Validasi header x-api-key
│   └── validateToken.js        # Validasi header Authorization (Bearer Token)
│
├── models/
│   ├── ApiKey.js               # Skema MongoDB untuk API Key
│   ├── Product.js              # Skema MongoDB untuk Produk
│   └── User.js                 # Skema MongoDB untuk User (Password Hash)
│
├── routes/
│   ├── authRoutes.js           # Route untuk login (/token)
│   └── productRoutes.js        # Route produk (/public dan /private)
│
├── seeders/
│   └── seed.js                 # Script untuk mengisi data awal (Seeding)
│
├── utils/
│   └── generateToken.js        # Helper untuk membuat JWT
│
├── .env                        # Konfigurasi Environment (Tidak di-upload ke GitHub)
├── package.json                # Daftar dependensi proyek
└── server.js                   # Entry point (Main File)
\`\`\`

## 🚀 Cara Instalasi & Menjalankan

### 1. Clone Repository

\`\`\`bash
git clone https://github.com/muhammadnurihsan/WSE-P10-OAuth2-ApiKey-230104040214.git
cd WSE-P10-OAuth2-ApiKey-230104040214
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Konfigurasi Environment (.env)

Buat file bernama \`.env\` di root folder dan isi dengan konfigurasi database kamu:

\`\`\`env
PORT=3000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/p10_db?retryWrites=true&w=majority
JWT_SECRET=rahasia-super-aman-simulasi-jwt
\`\`\`

### 4. Setup Database (Seeding)

Jalankan perintah ini **sekali saja** untuk mengisi database dengan user Admin, User Biasa, dan API Key:

\`\`\`bash
node seeders/seed.js
\`\`\`

### 5. Jalankan Server

\`\`\`bash
node server.js
\`\`\`

Server berjalan di \`http://localhost:3000\`.

## 🧪 Dokumentasi API (Postman)

| Fitur | Method | Endpoint | Auth | Body/Header |
| :--- | :--- | :--- | :--- | :--- |
| **Get Public Products** | \`GET\` | \`api/v1/products/public\` | API Key | Header: \`x-api-key\` |
| **Login (Get Token)** | \`POST\` | \`api/v1/auth/token\` | - | JSON: \`{username, password}\` |
| **Create Product** | \`POST\` | \`api/v1/products/private\` | JWT (Admin) | Header: \`Bearer <token>\` |
| **Update Product** | \`PUT\` | \`/api/v1/products/private/:id\` | JWT (Admin) | Header: \`Bearer <token>\` |
| **Delete Product** | \`DELETE\` | \`/api/v1/products/private/:id\` | JWT (Admin) | Header: \`Bearer <token>\` |

## 👤 Akun Demo (Seeder)

* **Admin:** username: \`admin\`, password: \`password123\`
* **User Biasa:** username: \`userbiasa\`, password: \`userpass\`
* **API Key:** \`PRACTICUM_API_KEY_A_1234567890\`

---

**Catatan:** Folder \`node_modules\` dan file \`.env\` tidak disertakan dalam repository ini demi keamanan.
EOF
