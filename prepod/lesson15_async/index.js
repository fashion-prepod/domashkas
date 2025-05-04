

// const p1 = new Promise(
//     (resolve, reject) => {
//         const result = 'hello'
//         resolve(result);
//     }
// ).then(
//     (result) => {
//         console.log('then 1', result);
//         // throw 2

//         return result;
//     }
// )
// .finally((result) => {
//     console.log('FINALLY!', result);
//     removePreloader();
//     // throw "OIOIOIOIOI";

//     return 'FROM FINALLY!';
// })
// .then(
//     (result) => {
//         console.log('then 2', result);

//         return result;
//     }
// ).catch((result) => {
//     console.log('catch got result', result);

//     return 'smth valuable'
// }).catch((result) => {
//     console.log('catch2', result);

//     return 'FROM CATCH WITH LOVE';
// }).then((result) => {
//     console.log('THEN AFTER CATCH!', result);
// })
// .finally(() => {
//     console.log('FINALLY 2');
// })

// console.log(p1);





// timeout RANDOM_TIME 1
// timeout RANDOM_TIME 2
// timeout RANDOM_TIME 3


// [1, 2, 3].forEach((num) => {
//     setTimeout(() => {
//         console.log(num);
//     }, getRandomTime());
// });

// Microtasks
// 
// Macrotasks
// () => {
//     console.log(1);
// } 
// webAPI


// function getRandomTime() {
//     return Math.ceil(Math.random() * 3000);
// }

// new Promise((resolve, reject) => {

//     setTimeout(() => {
//         console.log(1);
//         resolve();
//     }, getRandomTime()); 

// }).then(() => {

//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(2);
//             resolve(3);
//         }, getRandomTime());
//     })

// }).then((val) => {

//     setTimeout(() => {
//         console.log(3, val);
//     }, getRandomTime());

// })








// console.log(1);

// setTimeout(() => {
//     console.log(2);
// }, 0);

// new Promise((resolve) => {
//     console.log(3);

//     setTimeout(() => {
//         console.log(4);
//         resolve();
//         console.log(5);
//     }, 0);
// }).then(() => {
//     console.log('ROBLOX');
// });

// console.log(7);

// 1 3 7 2 4 5 6




// Promise API
// Application programming interface

// const p1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(1);
//     }, 1200);
// });
// const p2 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(2);
//     }, 800);
// });
// const p3 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(3);
//     }, 1500);
// });

// Promise.reject()
// Promise.resolve()

// Promise.race([p1,p2,p3]).then((res) => {
//     console.log(res);
// });

// Promise.any([p1,p2,p3]).then((res) => {
//     console.log(res);
// });

// Promise.allSettled([p1,p2,p3]).then((result) => {
//     console.log(result);
// })

// Promise.all([p1,p2,p3]).then((result) => {
//     console.log(result);
// }).catch((result) => {
//     console.log(result);
// });



// TODO async await try catch fetch 

// const p1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(1);
//     }, 1200);
// });


// const p2 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(2);
//     }, 800);
// });
// const p3 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(3);
//     }, 1500);
// });

// const foo = async () => {};
// const foo = async function () {};
// async function foo () {
// }
// class Smth {
//     constructor(){}
//     async method (){}
// }

// const foo = async () => {

//     const result = await p1;

//     return 'BLA BLA' + result;

// };

// foo().then((result) => {
//     console.log(result);
// });

// async function bar () {
//     const res = await foo();

//     console.log(res + "SMTH NEW");
// } 

// bar ();


// function getRandomTime() {
//     return Math.ceil(Math.random() * 3000);
// }

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(1);
//         resolve(1);

//     }, 800);
// });

// const p2 = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log(2);
//         resolve(2);
//     }, 100);
// });

// const p3 = new Promise((res) => {
//     setTimeout(() => {
//         console.log(3);
//         res(3);
//     }, 1000);
// });

// async function foo() {
//     await p1; // 800
//     console.log('1a');
//     await p2; // 100
//     console.log('2a');
//     await p3; // 1000
//     console.log('3a');
// }

// foo();

// function* numbers () {
//     yield 1;

//     yield 2;

//     yield 3;

//     yield 4;
// }

// function* letters () {
//     yield 'a';

//     yield 'b';

//     yield 'c';
// }

// function* aggregatorGenerator () {

//     yield* numbers();

//     yield* letters();

// }

// const generator = aggregatorGenerator();


// function* foo () {

//     const val = yield 'give me some value';


//     yield val + 'from prev yield';

// }

// const generator = foo();


// const res = generator.next();

// console.log(res);

// const res2 = generator.next('DATA FROM GLOBAL SCOPE!!!!');

// console.log(res2);



// fetch()
// JSON Javascript Object Notation

// TODO get post


fetch('https://jsonplaceholder.typicode.com/posts',{
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userID: 1,
    }),
    method: 'POST',
    headers: {
        'Content-Type': 'text/html; charset=utf-8'
    }
})
.then((data) => {
    return data.json();
}).then((data) => {
    console.log(data);
});





