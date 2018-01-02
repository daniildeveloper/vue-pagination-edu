Vue.component('pagination', {
  template: '#pagination-template',
  props: {
    current: {
      type: Number,
      default: 1,
    }
  },
  // automaticly calculate some
  computed: {
    nextPage: function () {
      return this.current + 1;
    },
    prevPage: function () {
      return this.current - 1;
    },
  },
  methods: {
    /**
     * Отлавливаем событе изменения страницы
     */
    changePage: function(page) {
      this.$emit('page-changed', page);
    }
  }
})
