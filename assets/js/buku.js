const data = [
  {
    id: 0,
    judul: 'Bumi Cinta',
    penulis: 'Habiburrahman El-Shirazi',
    kategori: 'novel',
    preview: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia veniam asperiores consequuntur fugit facere optio eos commodi. Laboriosam, aut atque. Fugit fugiat earum quos ducimus facere corporis quasi, deleniti tenetur.',
    gambar: 'bumi.jpg'
  },
  {
    id: 1,
    judul: 'Buku2',
    kategori: 'religion',
    penulis: 'Penulis2',
    preview: 'Tulis preview di file buku.js variabel data',
    gambar: 'hujan.jpg'
  },
  {
    id: 2,
    judul: 'Buku3',
    penulis: 'Penulis3',
    kategori: 'self improvement',
    preview: 'Tulis preview di file buku.js variabel data',
    gambar: 'unlimited.jpg'
  },
  {
    id: 3,
    judul: 'Buku4',
    penulis: 'Penulis4',
    kategori: 'novel',
    preview: 'Tulis preview di file buku.js variabel data',
    gambar: 'pergi.jpg'
  },
]

const setCards = (term = '', category = '') => {
  let items = []
  let cards = ``;
  const books_container = document.getElementById('books_container')

  if (term != '' || category != '') {
    if (category != '') {
      items = data.filter(e => e.kategori == category && e.judul.toLowerCase().match(term.toLowerCase().trim()))
    } else {
      items = data.filter(e => e.judul.toLowerCase().match(term.toLowerCase().trim()))
    }
  } else {
    items = data
  }


  if (items.length == 0) {
    cards = `
    <div class="col-4 text-center">
      <img src="./assets/img/questions-animate.svg"  alt="" />
      <p>Empty search results</p>
  </div>
    `
  } else {
    items.forEach(el => {
      cards += `
      <div class="col-12 col-lg-3 col-md-4 mb-3">
      <div class="card">
        <img src="./assets/img/${el.gambar}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${el.judul}</h5>
          <p class="text-muted">${el.penulis}</p>
          <div class="d-grid grid-gap-2">
            <a href="#" class="btn btn-primary" onclick="setModal(${el.id})" data-bs-toggle="modal" data-bs-target="#preview">Show Preview</a>
          </div>
        </div>
      </div>
    </div>
      `
    });
  }

  books_container.innerHTML = cards
}

setCards()

const setModal = (id) => {
  const item = data[id]
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

