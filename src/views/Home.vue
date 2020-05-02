<template>
  <div class="container mb-2 pb-2 h-100">
    <div class="jumbotron mb-3">
      <h1 class="display-4">Hello, Cinema</h1>
      <p class="lead">Jangan sampai Anda lewatkan jadwal terbaru movie dan film kesayangan Anda</p>
      <hr class="my-4" />
      <p>
        Di Kota Malang Sendiri telah berdiri tiga Bioskop 21 yang terletak di beberapa lokasi antara lain Malang Town Square
        (Cinemaxx Matos), Dieng Plaza (Dieng21), Malang Plaza (Mandala21), Dinoyo Cineplex (Dinoyo Movimax), Sarinah Cineplex (Sarinah Movimax),
        Cinemax Lippo Plaza Batu (Cinemaxx Batos), XXI Plaza Araya, MoviMax Malang City Point (MCP) dan yang paling baru ada Transmart MX XXI Malang.
      </p>
      <p class="lead">
        <router-link class="btn btn-primary" to="/about">Learn More</router-link>
      </p>
    </div>

    <div class="row mt-4" v-for="(data, index) in filmRow" :key="index">
      <div class="col-md-3" v-for="(datas, index) in data" :key="index">
        <router-link :to="{ name: 'Come', params: { id: datas.id } }">
          <img :src="datas.image" class="img-thumbnail" :alt="datas.name" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
var chunk = require("chunk");
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  computed: {
    film() {
      return this.$store.getters.getAllData;
    },
    filmRow() {
      return chunk(this.$store.getters.getAllData, 4);
    }
  },
  methods: {}
};
</script>
<style scoped>
#footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 2.5rem; /* Footer height */
}
</style>
