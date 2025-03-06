// Fungsi untuk memuat file komponen HTML ke dalam elemen tertentu
function loadComponent(id, file) {
    fetch(file) // Mengambil konten dari file yang diberikan
        .then(response => response.text()) // Mengubah respons menjadi teks
        .then(data => document.getElementById(id).innerHTML = data); // Menyisipkan teks ke dalam elemen dengan ID yang diberikan
}

// Menjalankan fungsi setelah seluruh dokumen dimuat
document.addEventListener("DOMContentLoaded", function() {
    loadComponent("header", "partials/header.html"); // Memuat header dari file header.html
    loadComponent("footer", "partials/footer.html"); // Memuat footer dari file footer.html
});