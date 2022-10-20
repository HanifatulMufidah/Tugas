const data = [
  {
    id: 0,
    judul: 'Atomic Habits',
    penulis: 'James Clear',
    kategori: 'Self Improvement',
    preview: 'Orang mengira ketika Anda ingin mengubah hidup, Anda perlu memikirkan hal-hal besar. Namun pakar kebiasaan terkenal kelas dunia James Clear telah menemukan sebuah cara lain. Ia tahu bahwa perubahan nyata berasal dari efek gabungan ratusan keputusan kecil dari mengerjakan dua push-up sehari, bangun lima menit lebih awal, sampai menahan sebentar hasrat untuk menelepon. Ia menyebut semua tadi atomic habits.',
    gambar: 'atomic.jpg'
  },
  {
    id: 1,
    judul: 'Berani Tidak Disukai',
    kategori: 'Self Improvement',
    penulis: 'Ichiro Kishimi dan Fumitake Koga',
    preview: 'Membaca buku ini bisa mengubah hidup anda. Mengungkap rahasia mengeluarkan kekuatan terpendam yang memungkinkan Anda meraih kebahagiaan yang hakiki dan menjadi sosok yang Anda idam-idamkan. Aapakah kebahagiaan adalah sesuatu yang Anda pilih? Berani Tidak Disukai menyajikan jawabannya secara sederhana dan langsung.Berdasarkan teori Alfred Adler, satu dari tiga psikolog terkemuka abad kesembilan belas selain Freud dan Jung, buku ini mengikuti percakapan yang menggugah antara seorang filsuf dan seorang pemuda.',
    gambar: 'tidakdisukai.jpg'
  },
  {
    id: 2,
    judul: 'Whats So Wrong About Your Self Healing',
    penulis: 'Ardhi Mohamad',
    kategori: 'Self Improvement',
    preview: 'Whats So Wrong With Your Self Healing merupakan sebuah buku motivasi yang menceritakan banyak permasalahan diri yang sering ditemukan pada manusia dewasa ini. Mulai dari awal kita membentuk sebuah pola pikir, tumbuh dewasa dan menghadapi sejumlah permasalahan.',
    gambar: 'healing.jpg'
  },
  {
    id: 3,
    judul: 'Psychology of Money',
    penulis: 'Morgan Housel',
    kategori: 'Self Improvement',
    preview: 'Melalui buku ini, Morgan Housel ingin sekali menyampaikan bahwa pada dasarnya perilaku seseorang terhadap duit yang dimiliki sangat memengaruhi kondisi keuangan daripada pengetahuan tentang keuangan yang dimiliki oleh seseorang. Dengan kata lain, seseorang yang memiliki latar belakang pendidikan finansial tak menjamin mampu mengelola kondisi keuangan selama perilakunya gaya hidupnya sangat boros.',
    gambar: 'money.jpg'
  },
  {
    id: 4,
    judul: 'Sebuah Seni Untuk Bersikap Bodo Amat',
    penulis: 'Mark Manson',
    kategori: 'Self Improvement',
    preview: 'Mark Manson memberikan banyak penjelasan menarik yang bisa membuka pola pikir kita dalam kehidupan. Dalam buku Sebuah Seni untuk Bersikap Bodo Amat, Mark Manson menjelaskan jika ada beberapa hal yang ternyata tidak perlu dipersoalkan dalam kehidupan.',
    gambar: 'seni.jpg'
  },
  {
    id: 5,
    judul: 'Filosofi Teras',
    penulis: 'Henry Manampiring',
    kategori: 'Self Improvement',
    preview: '“Bukan hal atau peristiwa tertentu yang meresahkan kita, tapi persepsi akan hal-hal dan peristiwa tersebut.” (Epictetus, hal. 95)',
    gambar: 'teras.jpg'
  },
  {
    id: 6,
    judul: 'Maaf Tuhan, Aku Hampir Menyerah',
    penulis: 'alfialghazi',
    kategori: 'Religion',
    preview: 'Buku Maaf Tuhan, Aku Hampir Menyerah secara tidak langsung mengajak kita agar selalu bahagia dengan selalu merasa cukup. Mengajak untuk selalu bersyukur, bertahan, serta bersabar dalam menghadapi musibah. Juga untuk cita-cita yang ingin dicapai, haruslah dibarengi dengan keberanian untuk memperjuangkan. Bahkan ketika impian itu dihadapkan dengan masalah, buku ini seperti mengingatkan bahwa pada titik inilah kita harus bertawakal kepada Allah.',
    gambar: 'maaf.jpg'
  },
  {
    id: 7,
    judul: 'Tuhan Ada di Hatimu',
    penulis: 'Husein Jafar Al-Hadar',
    kategori: 'Religion',
    preview: 'Dimulai dengan prolog "Tuhan ada di hatimu", Habib Jafar mengajak kita untuk melihat hal-hal yang berada di sekitar kita sebagai tanda-tanda kehadiran dan kebesaran-Nya. Bumi ini sejatinya adalah masjid,  dimanapun kita bersujud dan menyebut nama-Nya di situlah Tuhan berada, tidak terbatas hanya pada bangunan yang kita sebut masjid.',
    gambar: 'hati.jpg'
  },
  {
    id: 8,
    judul: 'Unlimited You',
    penulis: 'Wirda Mansur',
    kategori: 'Religion',
    preview: '"Unlimited You" ini dikemas dengan sangat inspiratif, penuh dengan motivasi dan kata-kata positif. Ketika kalian membaca buku ini dalam keadaan terpuruk, rasanya seperti menemukan sebuah lentera dalam kegelapan, seolah kita menemukan ada banyak sekali harapan baik apabila kita mau mendekat kepada-Nya.',
    gambar: 'unlimited.jpg'
  },
  {
    id: 8,
    judul: 'Hujan',
    penulis: 'Tere Liye',
    kategori: 'Novel',
    preview: 'Segala benda yang ada di novel ini seolah nyata dan terkesan akan ada di kehidupan ke depannya. Dalam hal ini, imajinasi liar dari para pembaca akan kembali bekerja. Kemudian, yang menjadi hal menarik lainnya adalah pada sampul belakang di novel ini pun tidak adanya sinopsis dan daftar isi. Hal tersebut yang justru menjadi daya pikat dan mengundang ketertarikan pembaca pada novel ini.',
    gambar: 'hujan.jpg'
  },
  {
    id: 9,
    judul: 'Bumi Cinta',
    penulis: 'Habiburrahman El Shirazy',
    kategori: 'Novel',
    preview: 'Novel bumi cinta menggambarkan mengenai indahnya adab sehari-hari yang dicontohkan dalam agama Islam. Seperti adab bersaudara, adab pada guru, hingga adab ketika mimpi buruk digambarkan oleh Kang Abik sebagai penulis dengan teknik yang cukup dramatis. Selain berbicara mengenai Islam, Kang Abik pun menyinggung mengenai atheisme. Berbagai jenis atheisme seolah ditelanjangi serta ditunjukan kelemahannya oleh Kang Abik. selain itu, novel bumi cinta pun mengungkapkan mengenai kekejaman serta kekejian dari zionis Israel. Pembantaian Sabra serta Shatila digambarkan oleh Kang Abik dengan cukup jelas. Beberapa dialog dalam novel ini pun mengandung ajaran tauhid.',
    gambar: 'bumi.jpg'
  },
  {
    id: 10,
    judul: 'Pulang',
    penulis: 'Tere Liye',
    kategori: 'Novel',
    preview: '"Sebuah kisah tentang perjalanan pulang, melalui pertarungan demi pertarungan, kesedihan demi kesedihan, untuk memeluk erat semua kebencian."    ',
    gambar: 'pulang.jpg'
  },
  {
    id: 11,
    judul: 'Pergi',
    penulis: 'Tere Liye',
    kategori: 'Novel',
    preview: 'Mengisahkan tentang perjalanan hidup seorang anak muda yang bernama Agam dan sering disapa Bujang. Bujang adalah salah satu petinggi dari beberapa orang keluarga shadow economy. ia menempati posisi tertinggi dari keluarga Tong, yang diberi gelar Tauke Besar. Ia adalah pemimpin dari keluarga Tong dan memiliki kepribadian dan watak yang berbeda dari penerus sebelumnya.',
    gambar: 'pergi.jpg'
  },
  {
    id: 12,
    judul: 'Pulang-Pergi',
    penulis: 'Tere Liye',
    kategori: 'Novel',
    preview: 'Dalam novel Pulang Pergi kisahnya melanjutkan seputar perjalanan hidup Bujang yang masih saja merasa bingung soal makna pulang dan pergi. Kisah pembuka diawali dengan Bujang yang mengunjungi pusara orang tuanya di lembah Talang.',
    gambar: 'pulper.jpg'
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

