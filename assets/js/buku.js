const data = []

// Ambil data dari Google SpreadSheet
const DB = "https://script.google.com/macros/s/AKfycbyGq0ydHdYm1wxlPWHmR8vNhfrWbVVZmpj2S0j1X3X8LbSGuoe0BTTVR7h-UsWm8DV3/exec?action=read"
fetch(DB)
  .then(e => e.json())
  .then(e => { data.push(...e.records); setCards() })
  .catch(e => { alert("Terjadi kesalahan : " + e.toString().replace("TypeError: ", "")) })

/*
* Untuk mengubah data, kunjungi link berikut  :
* https://docs.google.com/spreadsheets/d/1FfdSmlYphp10irXolk-e5fD6d1OomGeDOb_oIEohqJk/edit?usp=sharing
*/

// fungsi untuk menampilkan kartu
const setCards = (term = '', category = '') => {
  let items = []
  let cards = ``;
  const books_container = document.getElementById('books_container')

  // buat kontainer tidak rata tengah secara vertikal
  books_container.classList.remove('align-items-center')

  // tentukan item yang akan dijadikan kartu
  if (term != '' || category != '') {
    if (category != '') {
      items = data.filter(e => e.kategori.toLowerCase() == category && e.judul.toLowerCase().match(term.toLowerCase().trim()))
    } else {
      items = data.filter(e => e.judul.toLowerCase().match(term.toLowerCase().trim()))
    }
  } else {
    items = data
  }

  // buat kartu
  if (items.length != 0) {

    // buat kontainer tidak rata tengah secara horizontal
    books_container.classList.remove('justify-content-center')

    items.forEach(el => {
      cards += `
        <div class="col-6 col-md-4 col-lg-3 mb-3">
          <div class="card">
            <img src="./assets/img/${el.gambar}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${el.judul}</h5>
              <p class="text-muted">${el.penulis}</p>
              <div class="d-grid grid-gap-2">
                <a href="#" class="btn btn-primary" onclick="setModal('${el.judul}')" data-bs-toggle="modal" data-bs-target="#preview">Preview</a>
              </div>
            </div>
          </div>
        </div>
      `
    });

  } else {

    // buat kontainer menjadi rata tengah secara horizontal
    books_container.classList.add('justify-content-center')

    // beri keterangan bahwa data yang dicari tidak memiliki hasil
    cards = `
      <div class="col-12 col-md-6 col-lg-4 text-center">
        <img src="./assets/img/questions-animate.svg"  alt="" />
        <p>Empty search results</p>
      </div>
    `
  }

  // sisipkan kartu ke HTML
  books_container.innerHTML = cards
}

// fungsi untuk mengatur modal box
const setModal = (title) => {

  // saring data berdasarkan judul
  const item = data.filter(e => e.judul == title)[0]

  // sisipkan data ke HTML
  document.querySelector('#preview img').src = './assets/img/' + item.gambar
  document.querySelector('#preview .title').innerText = item.judul
  document.querySelector('#preview .writer').innerText = item.penulis
  document.querySelector('#preview .category').innerText = item.kategori
  document.querySelector('#preview .text').innerText = item.preview
}

// atur bar pencarian
const term = document.getElementById('term')
const category = document.getElementById('category')

// pencarian dengan menuliskan judul
term.addEventListener('keyup', (e) => {
  setCards(e.target.value, category.value)
})

// pencarian dengan menentukan kategori
category.addEventListener('change', (e) => {
  setCards(term.value, e.target.value)
})

