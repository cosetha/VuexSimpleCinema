<template>
  <div class="container">
    <div class="row justify-content-md-center mt-5 pt-3">
      <div class="col-md-3">
        <img :src="detailFilm.image" :alt="detailFilm.name" class="img-thumbnail" />
      </div>
      <div class="col-md-7">
        <div class="card">
          <div class="card-header">
            <h4>
              {{detailFilm.name}}
              <span class="badge badge-primary">New</span>
            </h4>
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>Jenis : {{detailFilm.jenis}}</p>
              <p>Produser : {{detailFilm.produser}}</p>
              <p>Penulis : {{detailFilm.penulis}}</p>
              <p>Sutradara : {{detailFilm.sutradara}}</p>
              <p>Produksi : {{detailFilm.produksi}}</p>
              <p>Penulis : {{detailFilm.penulis}}</p>
            </blockquote>
          </div>
        </div>
        <hr class="divider" />
        <div class="alert alert-light">
          <h5 class="alert-heading">SINOPSIS</h5>
          <hr />
          <h6 class="font-weight-light mb-0">{{detailFilm.sinopsis}}</h6>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return { detailFilm: null };
  },
  created() {
    if (this.$route.params.id) {
      this.detailFilm = this.$store.getters.getDataById(this.$route.params.id);
    }
  }
};
</script>
