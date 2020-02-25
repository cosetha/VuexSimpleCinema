import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const modulesA = {};
export default new Vuex.Store({
  state: {
    data: [
      {
        id: '001',
        name: 'Ip Man 4: The Finale',
        sinopsis:
          'Ip Man (Donnie Yen) datang ke Amerika Serikat untuk membantu muridnya, Bruce Lee (Kwok-Kwan Chan) yang mendapat diskriminasi rasial karena membuka sekolah seni bela diri Wing Chun di negeri Paman Sam tersebut. Selain itu ia juga berusaha mencari sekolah untuk anaknya.',
        jenis: 'FilmAction, Biography, Drama',
        produser: 'Raymond Wong, Wilson Yip, Donnie Yen',
        sutradara: 'Wilson Yip',
        penulis: 'Hiroshi Fukazawa, Edmond Wong',
        image: require('../assets/img/001.jpg')
      },
      {
        id: '002',
        name: 'Milea Suara dari Dilan',
        sinopsis:
          'Tidak ada kisah yang lebih Indah dari kisah cinta di SMA. Sama halnya dengan kisah cinta Dilan dan Milea. Dari yang awalnya benci hingga saling mencintai. Dari yang awalnya manis hingga menjadi rumit. Menjelang reuni akbar, Dilan memutuskan untuk menceritakan kembali masa masa itu. Mulai dari kali pertama mereka bertemu, menjalin kasih, hingga berjuang untuk bertahan.',
        jenis: 'FilmDrama',
        produser: 'Ody Mulya Hidayat',
        sutradara: 'Fajar Bustomi, Pidi Baiq',
        penulis: 'Pidi Baiq, Titien Wattimena',
        produksi: 'MAX Pictures',
        image: require('../assets/img/002.jpg')
      },
      {
        id: '003',
        name: 'The Call of the Wild',
        sinopsis:
          'Diadaptasi dari kisah sastra klasik kesayangan, The Call of the Wild berkisah tentang Buck,seekor anjing peliharaan berhati besar yang hidupnya berubah 180 derajat ketika dia tiba-tiba diculik dari rumahnya di California dan dipindahkan ke belantara eksotis Yukon Alaska pada masa Demam Emas Klondike di tahun 1890-an.',
        jenis: 'Adventure, Drama, Family',
        produser: 'Erwin Stoff',
        sutradara: 'Chris Sanders',
        penulis: 'Michael Green',
        produksi: 'Walt Disney Pictures',
        image: require('../assets/img/003.jpg')
      },
      {
        id: '004',
        name: 'Sonic the Hedgehog',
        sinopsis:
          'Setelah menemukan landak kecil berwarna biru dan berlari sangat cepat, Tom Wachowski (James Marsden) seorang perwira polisi kota kecil harus membantunya mengalahkan Dr. Ivo Robotnik (Jim Carrey) yang ingin melakukan percobaan kepada landak tersebut.',
        jenis: 'Action, Adventure, Family',
        produser: 'Neal H. Moritz, Takeshi Ito, Toby Ascher, Toru Nakahara',
        sutradara: 'Jeff Fowler',
        penulis: 'Pat Casey, Josh Miller',
        produksi: 'Paramount Pictures',
        image: require('../assets/img/004.jpg')
      },
      {
        id: '005',
        name: 'Fantasy Island',
        sinopsis:
          'Setelah menemukan landak kecil berwarna biru dan berlari sangat cepat, Tom Wachowski (James Marsden) seorang perwira polisi kota kecil harus membantunya mengalahkan Dr. Ivo Robotnik (Jim Carrey) yang ingin melakukan percobaan kepada landak tersebut.',
        jenis: 'FilmAdventure, Horror',
        produser: 'Jason Blum, Marc Toberoff, Jeff Wadlow',
        sutradara: 'Jeff Wadlow',
        penulis: 'Jillian Jacobs, Jason Blum, Marc Toberoff',
        produksi: 'Columbia Pictures.',
        image: require('../assets/img/005.jpg')
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getDataById: state => id => {
      return state.data.find(data => data.id === id);
    },
    getAllData: state => {
      return state.data;
    }
  },
  modules: {
    a: modulesA
  }
});
