let app = new Vue({
  el:'#app',
  data:{
    counter : 1
  },
  methods:{
    high(){
      this.counter++;
    }
  }
})