Vue.component('pagination', {
  template: '#pagination-template',
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 9
    },
    perPage: {
      type: Number,
      default: 9,
    },
    pageRange: {
      type: Number,
      default: 2
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
    totalPages: function () {
      return Math.ceil(this.total / this.perPage);
    },
    rangeStart: function () {
      var start = this.current - this.pageRange;

      if (start > 0) {
        return start;
      } else {
        return 1;
      }
    },
    rangeEnd: function () {
      var end = this.current + this.pageRange;

      console.log(end)
      return (end < this.totalPages) ? end : this.totalPages;
    },
    pages: function () {
      var pages = [];

      for (var i = this.rangeStart; i < this.rangeEnd; i++) {
        pages.push(i)
      }

      return pages;
    },

  },
  methods: {
    /**
     * Отлавливаем событе изменения страницы
     */
    changePage: function (page) {
      this.$emit('page-changed', page);
    },
    /**
     * Может возникнуть ситуация, что пользователь будет листать на страницы со знаком - или больше чем есть, а грузить собственно нечего
     */
    hasPrev: function () {
      return this.current > 1;
    },
    hasNext: function () {
      return this.current < this.totalPages
    },
    hasFirst: function () {
      return this.rangeStart !== 1
    },
    hasLast: function () {
      return this.rangeEnd !== this.totalPages
    }
  }
})
