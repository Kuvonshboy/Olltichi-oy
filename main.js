// const Hello = ["Hammaga salom!", "Bugun kun yaxshi"];
// console.log(...Hello);

// const numbers = new Set([52, 25, 2, 3]);
// console.log(...numbers);

// const meva = ["Uzum", "Olma", "Gilos"];
// const cars = ["Tesla", "BMV", "BVD"];
// const card = meva.concat(cars);
// // console.log(card);

// const cards = [...meva, ...cars];
// console.log(cards);

// rest function 

// const Uzbekiston = ["Uzbekiston Respublikas", 1.5, 1991, "Mustaqillika", "erishdi."];
// const [ title, rating,year, ...actors]= Uzbekiston;
// console.log(title, rating, year, actors);

// const iphone = ["Appel", 1, 1954, "Appel mahsulotlari", "Dunyo retingida o'z o'rniga ega."]
// const [title, rating, year, ...actors] =iphone;
// console.log(title, rating, year, actors); 

// const Redmi = ["Xitoy", 2, 1958, "Xiome mahsuloti", "Xitoy bozorida o'z o'rniga ega telefon" ]
// const [ title, rating, year, ...actors] = Redmi
// console.log(title, rating, year, actors);

// const fruit = ["Olma", 10, 2023, "olma bu ", "mevalar ichida eng yaxshidir"]
// const [title, reyting, yil, ...hammasi] =fruit;
// console.log(title, reyting, yil, hammasi);

// const cars = ['Cobilt', 1, 2012, 'Uzbekiston eng yaxshi mashinasi', 'Hazillashdim']
// const [nomi, orni, yilli, ...yolgon] = cars;
// console.log(nomi, orni, yilli, yolgon);


// sum(1, 25, 5);
// sum(280, 506, 5, 46820);
// sum(-125, 156);
// function sum() {
//     let total =0;
//     for(const argument of arguments) {
//         total+=argument;

//     }
//     return total;
// }

// function sum (...nums) {
//     let total = 0
//     for (const num of nums) {
//         total += num;
//     }
//     return total
// }

// console.log(sum());


// recursion function
// function log(num){
//     if(num > 5){
//         return;
//     }
//     console.log(num);
//     log(num+1)
// }

// log(1)

// function sum (num){
//     if (num > 10){
//         return;
//     }
//     console.log(num);
//     sum(num+2)
// }

// sum(2)

// function son (num){
//     if(num > 12){
//         return;
//     }
//     console.log(num);
//     son(num + 3)
// }

// son(3)

// function meva (num) {
//     if (num > 25){
//         return;
//     }
//     console.log(num);
//     meva(num+5)
// }

// meva(5)





// function foctorlal (num){
//     if (num===1){
//         return num;

//     }
//     return num + foctorlal(num-1)
// }

// console.log(foctorlal(445));

// function random(result =0, count =0){
//     if(result === 5) {
//         console.log(`tasadifiy son ${result}`);
//         console.log(`Bu galgi urunishda 5 soni chiqishni aniqligi ${100/count}%`);
//         return;
//     }
//     result = Math.floor(Math.random() * (10 - 1 + 1) + 1)
//     count++;
//     random(result,count)
// }
// random()



// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));



// let url = `https://jsonplaceholder.typicode.com/posts`;

// fetch(url, {
//     method:`POST`,
//     body:JSON.stringify({
    //     id: 1,
//         title: `n8`,
//         body: 'students',
//         userId: 1,  
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     }
// })

// .then((res)=>res.json())
// .then((data)=>console.log(data))

let url = `https://jsonplaceholder.typicode.com/posts`;

fetch (url, {
    method: `POST`,
    body:JSON.stringify({
        id: 10,
        title: 166-21,
        body: "Talaba",
        userId: 1,
    }),
    headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
})

.then((res)=>res.json())
.then((data) => console.log(data))


