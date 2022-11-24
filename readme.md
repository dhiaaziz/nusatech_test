## TASK
1. relational database (user profile)
    1. data user berisi  : id user, email, password (encrypted),status(pending,registered,verified)
    2. data wallet/balance user (1 id_user ≥0 id_wallet ≤ total id_currency) berisi :id_wallet,  id_currency, id_user, amount
    3. data currency (1 id_balance = 1 id_currency):
    4. data pin /mailer (id_user ≥1): id_verifikasi, email,pin,status(pending,registered,verified,expired)
2.  konsep cronjob mailer (api)
    1. setiap 10 detik ngecek user yang pending untuk dikirimi verifikasi register /pin 
    2. setelah mengirim email maka status user dan status pin berubah menjadi registered 
    3. setelah  verifikasi pin maka status user dan status pin berubah menjadi verified
    4. pin expired jika tidak di verifikasi lebih dari 1jam
    

API yang harus di siapkan :

1. post signup 
2. post signin
3. get userdata (email, balance ,status dll.)
4. put user email (ganti email yang saat ini dipakai) ⇒ verifikasi email lama dulu ⇒kemudian verifikasi email baru


## Route tersedia
- POST -> /user/signup -> input body {
  email,
  password,
  name
}

- POST -> /user/signin -> input body {
  email,
  password,
}

## Done List 
- sign in
- sign up
- cron kirim email register => isinya pin


## Instalasi

1) duplicate .env.example dan rename menjadi .env. Kemudian isi konfigurasi database sesuai config development local anda.

2) Pastikan database dengan nama yang sama dengan config file```.env``` variabel DB_NAME usah dibuat pada database engine anda.


3) jalankan perintah npm install

```
npm install
```

4) Jalankan perintah dbsync untuk menjalankan sinkronasi database dengan model yang sudah dirancang menggunakan sequelize
```
node dbsync

```

5) anda dapat mengubah settingan port pada file server.js di folder root

6) jalankan perintah berikut untuk memulai server

```
npm run dev
```
