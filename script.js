function addRow() { /// membuat functon unutk menambahkan baris table

   if (no.value === '') {
        alert('Please Enter A Task');
    }
    else {
    //membuat variable konstan unutk menampung nilai dari input
    const no = document.getElementById('no').value;
    const bahasa = document.getElementById('bahasa').value;
    const Gambar = document.getElementById('Gambar').value;
    const Tahun_Rilis = document.getElementById('Tahun_Rilis').value;
    const Pengembang = document.getElementById('Pengembang').value;
    const platfrom = document.getElementById('Platform').value;
    const Kegunaan_Utama = document.getElementById('Kegunaan_Utama').value;
    const Framework = document.getElementById('Framework_Library_Populer').value;
    const kelebihan = document.getElementById('Kelebihan').value;
    const kekurangan = document.getElementById('Kekurangan').value; 

    
    //membbuat variable konstan untuk megisi baris tabel berdasarkan id 
    const table = document.getElementById('table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    //menampilkan data ke dalam baris tabel berdasarkan data yang sudah di simpan oleh variable konstan
    newRow.insertCell(0).innerHTML = no;
    newRow.insertCell(1).innerHTML = bahasa;
    newRow.insertCell(2).innerHTML = `<img src="${Gambar}" alt="Gambar" width="100" height="100">`;
    newRow.insertCell(3).innerHTML = Tahun_Rilis;
    newRow.insertCell(4).innerHTML = Pengembang;
    newRow.insertCell(5).innerHTML = platfrom;
    newRow.insertCell(6).innerHTML = Kegunaan_Utama;
    newRow.insertCell(7).innerHTML = Framework;
    newRow.insertCell(8).innerHTML = kelebihan;
    newRow.insertCell(9).innerHTML = kekurangan;

    const deleteCell = newRow.insertCell(10);
    deleteCell.innerHTML = `<button class="btn btn-danger fa fa-trash" align = "center" onclick = deleteRow(this)></button>`
    saveRow();
   
    }
}
function deleteRow(button) {
    // Hapus baris di mana tombol hapus diklik
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    saveRow();  
}
function saveRow() {
    localStorage.setItem('no', no.innerHTML);
    localStorage.setItem('bahasa', bahasa.innerHTML);
    localStorage.setItem('Gambar', Gambar.innerHTML);
    localStorage.setItem('Tahun_Rilis', Tahun_Rilis.innerHTML);
    localStorage.setItem('Pengembang', Pengembang.innerHTML);
    localStorage.setItem('platfrom', platfrom.innerHTML);
    localStorage.setItem('Kegunaan_Utama', Kegunaan_Utama.innerHTML);
    localStorage.setItem('Framework', Framework.innerHTML);
    localStorage.setItem('kelebihan', kelebihan.innerHTML);
    localStorage.setItem('kekurangan', kekurangan.innerHTML);
}
function showRow() {
    no.innerHTML = localStorage.getItem('data');
    bahasa.innerHTML = localStorage.getItem('data');
    Gambar.innerHTML = localStorage.getItem('data');
    Tahun_Rilis.innerHTML = localStorage.getItem('data');
    Pengembang.innerHTML = localStorage.getItem('data');
    platfrom.innerHTML = localStorage.getItem('data');
    Kegunaan_Utama.innerHTML = localStorage.getItem('data');
    Framework.innerHTML = localStorage.getItem('data');
    kelebihan.innerHTML = localStorage.getItem('data');
    kekurangan.innerHTML = localStorage.getItem('data');
    
}

showRow();