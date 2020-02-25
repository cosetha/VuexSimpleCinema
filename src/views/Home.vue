<template>
  <div class="container">
    <div class="jumbotron mb-3">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr class="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p class="lead">
        <router-link class="btn btn-primary" to="/about"
          >Learn More</router-link
        >
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
var chunk = require('chunk');
export default {
  name: 'Home',
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
