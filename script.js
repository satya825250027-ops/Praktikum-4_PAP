// Ganti dua nilai ini sesuai data kamu sendiri
const nama = "Satya Putra Wijaya";
const nim = "825250027"; // TODO: cek lagi, ganti kalau NIM aslimu beda

const btnBuat = document.getElementById("btnBuat");
const btnHapus = document.getElementById("btnHapus");
const idContainer = document.getElementById("idContainer");

// Tombol 1: membuat 1 kartu ID (persegi panjang) berisi Nama & NIM
btnBuat.addEventListener("click", () => {
  // Cegah kartu dobel kalau tombol Buat ID diklik berkali-kali
  if (document.getElementById("idCard")) {
    return;
  }

  const card = document.createElement("div");
  card.id = "idCard";
  card.className = "id-card";
  card.innerHTML = `
    <div class="id-card-header">ID MAHASISWA</div>
    <div class="id-card-body">
      <p class="id-label">Nama</p>
      <p class="id-value">${nama}</p>
      <p class="id-label">NIM</p>
      <p class="id-value">${nim}</p>
    </div>
  `;

  idContainer.appendChild(card);
});

// Tombol 2: menghapus kartu ID yang tadi dibuat oleh Tombol 1
btnHapus.addEventListener("click", () => {
  const card = document.getElementById("idCard");
  if (card) {
    card.remove();
  }
});
