const data = [
  {
    judul: 'Bumi Cinta',
    penulis: 'Habiburrahman El-Shirazi',
    gambar: 'bumi.jpg'
  },
  {
    judul: 'Buku2',
    penulis: 'Penulis2',
    gambar: 'hujan.jpg'
  },
  {
    judul: 'Buku3',
    penulis: 'Penulis3',
    gambar: 'unlimited.jpg'
  },
  {
    judul: 'Buku4',
    penulis: 'Penulis4',
    gambar: 'pergi.jpg'
  },
]


let cards = ``;
const books_container = document.getElementById('books_container')

data.forEach(el => {
  cards += `
  <div class="col-12 col-lg-3 mb-3">
  <div class="card" style="width: 18rem;">
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

books_container.innerHTML = cards
