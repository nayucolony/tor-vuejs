const demo = new Vue({
  el: '#demo',
  filters: {
    capitalize: function(str){
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
  },
  data: {
    gridColumns: ['name', 'power'],
    gridData: [
      { name: 'Chuck Norris', power: Infinity },
      { name: 'Bruce Lee', power: 9000 },
      { name: 'Jackie Chan', power: 7000 },
      { name: 'Jet Li', power: 8000 },
    ],
  },
  methods: {
    log: function() {
      console.log(this);
      console.log(this._data.gridData);
      console.log(this.$data.gridData);
    },
  },
});

