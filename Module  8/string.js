/* const test = "world";
const name = `hello ${test}`;


console.log(name);

array = [1,2,3,4,5,6,7,8,9,10,11,12,13]
console.log(...array);
console.log(Math.max(...array));
 */

/* function test(){
    return "hello world";
}

const name = test();
console.log(name); */

//arrow function
/* const test2 = () => 2 * 2;
console.log(test2());
//multiple arrow function
const test3 = () => {
    console.log("hello world");
    return "hello world"
}
console.log(test3()); */

//Object and Array Destructuring
/* const number = [1,2,3,4,5,6,7,8,9]
const [a,b,c] = number;
console.log(a);

const obj = {
    name : "Murad",
    age : "20",
    status : "Married",
    github : "yes",
    friend : 19,
}

const {age,status} = obj;
console.log(age); */


/* const test = [
   {
    name : "Murad",
    age : "20",
    status : "Married",
    github : "yes",
    friend : ["murad","sadia"],
   },{},{}
]

console.log(test[0].friend[0]); */

//map
const num = [2,2];
let temp =[]
for (let i = 0;i < num.length;i++){
    const element = num[i];
    const square = element * element;
    temp.push(square);
}

/* console.log(temp); */

const square = num.map(x=> x * 2);
/* console.log(square); */

//filter
/* const prodect = [
    {id : 1,name : "apple",price : 500,color: "black"},
    {id : 2,name : "samsung",price : 500,color: "white"},
    {id : 3,name : "apple",price : 500,color: "green"},
    {id : 4,name : "vivo",price : 500,color: "black"},
    {id : 5,name : "poco",price : 500,color: "blue"},
]

//filter
const result = prodect.filter((pd) => pd.color == "blue");
/* console.log(result); */
//find
/* const result1 = prodect.find((pd) => pd.id == 1); */
/* console.log(result1); */

//for each
/*const productcontainer = document.getElementById("product-container");
const result3 = prodect.forEach((pd) => {
    console.log(pd.name);
    const h1 = document.createElement("h1");
    h1.innerText = pd.name;
    productcontainer.appendChild(h1);
}) */

fetch("https://fakestoreapi.com/products/1")
.then((res) =>res.json())
.then((data) =>{
    console.log(data);
}
)
.catch((err) =>
{
    console.log(err);
})