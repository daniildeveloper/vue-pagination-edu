var appID = "02e44f8b24e9dd36875ea1f6a8bbc6f913c27a92a40d44ea4937d2ce706d0573";

new Vue({
  el: '#app',
  data: {
    photos: [], //array for downoladed photos
    totalPhotos: 0, // photos total count
    perPage: 9,
    currentPage: 1,
  },
  methods: {
    /**
     * Download photos
     */
    fetchPhotos: function (page) {
      var options = {
        params: {
          client_id: appID,
          page: page,
          per_page: this.perPage,
        }
      }
      this.$http.get('https://api.unsplash.com/photos', options)
        .then(function (response) {
          // save all it to variable
          this.photos = response.data;

          // save total photos from header(spec for this api)
          this.totalPhotos = parseInt(response.headers.get('x-total'));

          // change current page to downoladed
          this.currentPage = page;
        })
    }
  },
  created: function () {
    this.fetchPhotos(this.currentPage);
  }
})
