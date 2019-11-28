class watcher {
  constructor(opts) {
    this.$data = opts.data
    this.$watch = opts.watch
    for (let key in opts.data) {
      this.setData(key, opts.data[key])
    }
  }
  setData(_key, _val) {
    Object.defineProperty(this, _key, { // this 把上下文指向当前的对象
      get() {
        return _val
      },
      set(newVal) {
        const oldVal = _val
        if(oldVal === newVal) return newVal
        _val = newVal
        this.$watch[_key] && typeof this.$watch[_key] === 'function' && (
          this.$watch[_key].call(this, newVal, oldVal)
        )
        return newVal
      }
    }) 
  }
}
// let vm = new watcher({
//   data: {
//     a: 0
//   },
//   watch: {
//     a(newVal, oldVal) {
//       console.log(oldVal,newVal)
//     }
//   }
// })

// setTimeout(() => {
//   vm.a = 1
// }, 1000);