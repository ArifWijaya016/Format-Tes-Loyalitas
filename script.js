// INI ADALAH BAGIAN LOGIC AGAR WEB LEBIH INTERAKTIF, SEMUA LOGIC PENILAIAN DAN LOGIC ADA DISINI

// FUNGSI UNTUK MEMULAI QUIZ, PASTIKAN KARAKTER LOGIC SESUAI DENGAN APA YANG ADA PADA FILE HTML

// FUNGSI startQuiz() merupakan fungsi yag digunakan agar saat tombol mulai di klik 
//maka menjalankan logic ini PADA FILE INDEX.HTML


function startQuiz() {
    //MEMANGGIL INISIALISASI SESUAI DENGAN APA YANG DIISI OLEH 
    const nama = document.getElementById('nama').value;
    const jabatan = document.getElementById('jabatan').value;
  
// FUNGSI LOGIC MENYIMPAN KOLOM NAMA DAN JABATAN
    if (nama && jabatan) {
      localStorage.setItem('nama', nama);
      localStorage.setItem('jabatan', jabatan);
// APABILA TERDAPAT NAMA DAN JABATAN YANG TELAH DIISI MAKA MENUJU KE HALAMAN SOAL PERTAMA
      window.location.href = 'soal.html'; // ISI window.location.href = 'SOAL.html', SOAL.html mengikuti soal pertama yang anda buat
    } else {
      alert('Mohon isi nama dan jabatan terlebih dahulu.');
    }
  }



  