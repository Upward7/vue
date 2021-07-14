const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128,
        count: 1
      },
    ]
  },
  methods: {
    getFinalPrice(price) {
      return '￥' + price.toFixed(2);
    },
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      this.books[index].count--;
    },
    removeHandle(index) {
      this.books.splice(index, 1);
    }
  },
  computed: {
    totalPrice() {
      // 1. 普通的for循环
      // let totalPrice = 0;
      // for (let i = 0; i < this.books.length; i++){
      //   totalPrice += this.books[i].price * this.books[i].count;
      // }
      // return totalPrice;

      // 2.
      // let totalPrice = 0;
      // for (let i in this.books){
      //   totalPrice += this.books[i].price * this.books[i].count;
      // }
      // return totalPrice;

      // 3.
      // let totalPrice = 0;
      // for (let item of this.books){
      //   totalPrice += item.price * item.count;
      // }
      // return totalPrice;

      return this.books.reduce(function (preValue, book) {
        return preValue + book.price * book.count;
      },0)
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2);
    }
  }
})

// 编程范式：命令式编程 / 声明式编程
// 编程范式：面向对象编程（第一公民：对象） / 函数式编程（第一公民：函数）

// filter / map / reduce
// filter 中的回调函数必须返回一个boolean值
// 当返回 true 时，函数内部会自动将这次回调的n加入到新的数组中
// 当返回 false 时，函数内部会过滤掉这次的n

const nums = [10, 20, 111, 222, 444, 40, 50];

// filter函数的使用
let newNums = nums.filter(function (n) {
  return n < 100;
})

// map函数的使用
let new2Nums = newNums.map(function (n) {
  return n * 2;
})

// reduce函数的使用
// 作用：对数组中所有内容汇总
// let total = new2Nums.reduce(function (preValue, n){
//   return preValue + n;
// },0)
// 第一次： preValue 0 n 20
// 第二次： preValue 20 n 40
// 第三次： preValue 60 n 80
// 第四次： preValue 140 n 100
// 240

// 简洁写法
// let total = nums.filter(function (n){
//   return n < 100;
// }).map(function (n) {
//   return n * 2;
// }).reduce(function (preValue, n) {
//   return preValue + n;
// },0)
// console.log(total);

// 更简洁写法
let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
console.log(total);
