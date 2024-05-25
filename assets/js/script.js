// JS

// string

// string length 
// let text = "ABCDEFGHI";
// let length = text.length;
// console.log(length);

// property access 
// let text = "HELLO WORLD";
// let get_lenth = text[2]
// console.log(get_lenth);

// string slice substr
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(2,5);
// let part = text.substr(7,6); 
// console.log(part);

// string uppercase lowercase 
// let text1 = "Hello World!";
// let text2 = text1.toUpperCase()
// let text3 = text1.toLowerCase()
// console.log(text2);
// console.log(text3);

// string concat 
// let text1 = "Hello";
// let text2 = "World!";
// let text3 = text1.concat(" ",text2);
// console.log(text3);

// string trim 
// let text1 = "     Hello World!     ";
// let text2 = text1.trim();
// console.log(text1);
// console.log(text2);

// string pad start and end 
// let text = "5";
// text = text.padStart(4,"0");
// console.log(text);
// let text2 = "5";
// text2 = text2.padEnd(4,"0");
// console.log(text2);

// string repeat 
// let text = "Hello world!";
// let result = text.repeat(4);
// console.log(result);

// string replace and replaceall 
// let str = 'Please visit myweb and myweb'
// let replace_str = str.replace('myweb','google') //replace single and first value
// let replaceall_str = str.replaceAll('myweb','google') //replace all value
// console.log(str);
// console.log(replace_str);
// console.log(replaceall_str);

// string split 
// let text = 'Hello friend'
// let text2 = 'Hello'
// let split_text = text.split(' ')
// let split_text2 = text2.split('')
// console.log(split_text);
// console.log(split_text2);




//   array map
// const numbers1 = [45, 4, 9, 16, 25];
// let new_number = numbers1.map(function(value){
//     return value * 2
// })
// console.log(new_number);

// // array filter
// const filter_arr = [45, 4, 9, 16, 25];
// let filter = filter_arr.filter((value) => {
//     return value > 20 
// })
// console.log(filter);

// // array every
// const arr_every = [45, 4, 9, 16, 25];
// let every = arr_every.every((value) =>{
//     return value > 18 
// })
// console.log(every);

// // array some
// const arr_some = [45, 4, 9, 16, 25];
// let some = arr_some.some(function(val){
//     return val > 20
// })
// console.log(some);

// // array from
// const letter = 'abcdefgh'
// let arr_from = Array.from(letter)
// console.log(arr_from);

// array keys 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruits_key = fruits.keys()
// let text = "";
// for (let x of fruits_key) {
//     console.log(x);
//   text += x + "<br>";
// }

// array with 
// const months = ["Januar", "Februar", "Mar", "April"];
// let new_month = months.with(2,"March")
// console.log(new_month);
// for( let m of new_month){
//     console.log(m);
// }
// new_month.forEach(function(index ,element){
//     console.log(element , index);
// })

// // array spread operator
// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// let all_month = [...q1,...q2,...q3,...q4]
// console.log(all_month);



// array sort reverse
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();
// array find
// const numbers = [4, 9, 16, 25, 29];
// let find_arr = numbers.find(function(value){
//     return value > 20;
// })
// let find_index = numbers.findIndex(function(value){
//     return value > 20;
// })
// let find_last = numbers.findLast(function(value){
//     return value > 20;
// })
// let find_index_last = numbers.findLastIndex(function(value){
//     return value > 20;
// })
// console.log(find_arr);
// console.log(find_index);
// console.log(find_last);
// console.log(find_index_last);
// array includes return true of false
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let include = fruits.includes('Orange')
// let not_include = fruits.includes('Lemon')
// console.log(include);
// console.log(not_include);

// array indexof
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let f_index = fruits.indexOf('Apple')
// let l_index = fruits.lastIndexOf('Apple')
// console.log(f_index);
// console.log(l_index);

// array shift unshift pop push
// const fruits = ["Banana", "Orange", "Apple"];
// fruits.shift()
// fruits.unshift('Lemon')
// fruits.pop()
// fruits.push('Mango')
// console.log(fruits);

// array concat
// const arr1 = ['a','b','c']
// const arr2 = ['d','e','f']
// const arr_concat = arr2.concat(arr1)
// console.log(arr_concat);

// array flat
// const myarr = [[1,2],[3,4],[5,6]];
// const newarr = myarr.flat();
// console.log(newarr);

// array splice
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let slice_array = fruits.splice(0,2,"Lemon");  
// console.log(slice_array);
// console.log(fruits);

// array tospliced
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let slice_array = fruits.toSpliced(0,4);  
// console.log(slice_array);

// array slice
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let slice_array = fruits.slice(2,4);  
// console.log(slice_array);
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());

// foreach in array
// let new_fruits = []
// const fruits = ["Banana", "Orange","Mango"];
// fruits.push("Lemon");
// fruits[fruits.length] = "grapes"
// fruits[6] = "Apple"
// fruits.forEach(function(index,value){
//     console.log(value,index);
// })
// const person = [];
// person["fname"] = "R";
// person["lname"] = "H";
// person["age"] = 23;
// console.log(person);
// const cars = [];
// cars[0] = "Saab";
// cars[1] = "Volvo";
// cars[2] = "BMW";
// console.log(cars);
// console.log(cars.length);
// // access the last array 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits[fruits.length -1 ]);
