function kirimdata() {
    var name = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var peminatan = document.querySelector("input[name='Peminatan']:checked");
    var alamat = document.getElementById("alamat").value;
    var tanggal = document.getElementById("tanggal").value;
    var angkatan = document.getElementById("angkatan").value;
  
    if (!name || !nim || !peminatan || !alamat || !tanggal || !angkatan) {
      alert("Semua Kolom harus diisi!");
      return;
    }
  
    alert(
    "Apakah anda yakin? " +
      "\nNama: " +
        name +
        "\nNIM: " +
        nim +
        "\nPeminatan: " +
        peminatan.value +
        "\nAlamat: " +
        alamat +
        "\nTanggal: " +
        tanggal +
        "\nAngkatan: " +
        angkatan
    );
  }
  
  var tanggalInput = document.getElementById("tanggal");
  flatpickr(tanggalInput, {
    enableTime: false,
    dateFormat: "d-m-Y",
  });