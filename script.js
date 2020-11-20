// function contohFunction(){
// 	console.log('cetak string');
// }

// contohFunction();

// const sum = (a, b) => a + b;
// console.log("sum(a,b)", sum(5,2));
//1=====================================

//const addTo = x => y => x + y
//var addToTen = addTo(10)
//console.log("addToTen",addToTen(3)); // returns 13

//2=====================================

///const sum = (a, b) => a + b
//const curriedSum = (a) => (b) => a + b
//console.log("curriedSum(a)(b)",curriedSum(30)(1)); // 31

//3====================================


///const sum = (a, b) => a + b
//const curriedSum1 = (a) => (b) => a + b
//const add5 = curriedSum1(5)
//console.log("add5", add5(12)); // 17

//4===================================

//const compose = (f, g) => (a) => f(g(a));
//const add1 = (num) => num + 1;
//const add2 = (num) => num + 2;
//console.log("compose",compose(add1, add2)(10)); // 13

//5==================================

//const division = (h,j) => {
//    return h/j;
//}
//console.log("division", division(15,3)); // 5

//6=================================

//const sideEffect = () => {
//    console.log("ini hasil function sideEffect");
//}
//console.log("pengecekan undefined apabila sideEffect dijalankan = ", sideEffect());
//7=================================












const posts = [
  {
    title: 'Post One',
    body: 'This is post one'
  },
  {
    title: 'Post Two',
    body: 'This is post two'
  }
]

// contoh pembuatan promise
const createPost = (post) => {
  return new Promise( (resolve,reject) => {
    setTimeout(() => {
      posts.push(post);
      const state = false;
      (!state) ? resolve() : reject();
    }, 2000);
  })
}

const getPosts = () => {
  setTimeout( () => {
    posts.map( post => {
      console.log(post);
    })
  }, 1000);
}

createPost({
  "title" : "Post Three",
  "body"  : "This is post three"
}).then(getPosts())
  .catch( err => console.log(err));
  
// Async-Await
const init = async () => {
  // Berjalan secara Asynchronous
  await createPost({
    "title" : "Post Four",
    "body"  : "This is post Four"
  });
  await getPosts();
}


init();
// Berjalan secara Synchronous
getPosts();
