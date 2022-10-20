const data = [
  {
    judul: 'Bumi Cinta',
    penulis: 'Habiburrahman El-Shirazi',
    kategori: 'novel',
    gambar: 'bumi.jpg'
  },
  {
    judul: 'Buku2',
    kategori: 'religion',
    penulis: 'Penulis2',
    gambar: 'hujan.jpg'
  },
  {
    judul: 'Buku3',
    penulis: 'Penulis3',
    kategori: 'self improvement',
    gambar: 'unlimited.jpg'
  },
  {
    judul: 'Buku4',
    penulis: 'Penulis4',
    kategori: 'novel',
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
            <a href="#" class="btn btn-primary">Show Preview</a>
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

const term = document.getElementById('term')
const category = document.getElementById('category')

term.addEventListener('keyup', (e) => {
  setCards(e.target.value, category.value)
})
category.addEventListener('change', (e) => {
  setCards(term.value, e.target.value)
})

