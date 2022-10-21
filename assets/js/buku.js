const data = []

const DB = "https://script.google.com/macros/s/AKfycbyGq0ydHdYm1wxlPWHmR8vNhfrWbVVZmpj2S0j1X3X8LbSGuoe0BTTVR7h-UsWm8DV3/exec?action=read"

fetch(DB)
  .then(e => e.json())
  .then(e => { data.push(...e.records); setCards() })
  .catch(e => { alert("Terjadi kesalahan : " + e.toString().replace("TypeError: ", "")) })


const setCards = (term = '', category = '') => {
  let items = []
  let cards = ``;
  const books_container = document.getElementById('books_container')

  books_container.classList.remove('align-items-center')

  if (term != '' || category != '') {
    if (category != '') {
      items = data.filter(e => e.kategori.toLowerCase() == category && e.judul.toLowerCase().match(term.toLowerCase().trim()))
    } else {
      items = data.filter(e => e.judul.toLowerCase().match(term.toLowerCase().trim()))
    }
  } else {
    items = data
  }


  if (items.length == 0) {

    books_container.classList.add('justify-content-center')

    cards = `
    <div class="col-12 col-md-6 col-lg-4 text-center">
    <img src="./assets/img/questions-animate.svg"  alt="" />
    <p>Empty search results</p>
    </div>
    `
  } else {

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
  }

  books_container.innerHTML = cards
}

const setModal = (title) => {
  const item = data.filter(e => e.judul == title)[0]
  document.querySelector('#img_preview').src = './assets/img/' + item.gambar
  document.querySelector('.modal .modal-body .col-8').innerHTML = `
  <p><b>Title :</b> ${item.judul}</p>
  <p><b>Written by :</b> ${item.penulis}</p>
  <p><b>Category :</b> ${item.kategori}</p>
  <p class="text-justify">${item.preview}</p>
  `
}

const term = document.getElementById('term')
const category = document.getElementById('category')

term.addEventListener('keyup', (e) => {
  setCards(e.target.value, category.value)
})

category.addEventListener('change', (e) => {
  setCards(term.value, e.target.value)
})

