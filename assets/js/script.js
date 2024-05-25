// JS

// js object 
// let person = {}
// person.name = "R",
// person.age = 23
// person.home = "Rangpur"
// console.log(person);

// Constructor function for objects
// function Person(fname,lname,age,home){
//     this.firstname = fname, 
//     this.lastname = lname, 
//     this.age = age,
//     this.home = home
// }
// let person_1 = new Person('s','k',32,'rangpur')
// let person_2 = new Person('R','H',23,'rangpur')
// console.log(person_1);
// console.log(person_2);


// js date 

// let date = new Date()
// date.setMonth(1)
// function days_in_month(month, year) {
//     return new Date(year, month, 0).getDate();
// }
// let month = date.getMonth() + 1;
// let year = date.getFullYear();
// let monthval = 0
//  console.log(
//     monthval = days_in_month(month,year)
//  );
//  console.log(monthval);
// date.setDate(1)
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let day_data = date.getDay()
// let a_day = date.getDate()
// for(let d = day_data; d <= 6 ; d++){
//     console.log(days[d]);
// }
// console.log(date);
// console.log(days[day_data]);
// let display_date = `<ul>`
// for(let dd = a_day; dd <= monthval ; dd++){
//     let all_day = date.getDay(date.setDate(dd));
//     display_date += `<li> ${dd} , ${days[all_day]}</li>`
// }
// display_date += `</ul>`
// ;(function($){
//     $('.display_date').html(display_date);
// })(jQuery)

// let n_date = new Date()
// let get_minute = n_date.getMinutes()
// console.log(get_minute);

// let date = new Date();
// let get_minute = date.getMinutes()
// console.log(get_minute.toString());

// js math 

// js math 
// let num = 4.4
// let floor = Math.floor(num)
// let ceil = Math.ceil(num)
// let round = Math.round(num)
// let trunc = Math.trunc(round)
// let pow = Math.pow(3,2)
// let sqrt = Math.sqrt(64)
// let abs = Math.abs(-5.6)
// let min = Math.min(2,6,8,12,6)
// let max = Math.max(2,6,8,12,6)
// console.log(max);



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

// string indexof lastindexof 
// let text = "Please find where find";
// let index = text.indexOf("find");
// let index_last = text.lastIndexOf("find");
// console.log(index);
// console.log(index_last);

// string search 
// let str = "hello how are you hello"
// let str_search = str.search('how')
// console.log(str_search);

// string match and matchAll 
// let text1 = 'how are you , how old are you'
// let match = text1.match('how')
// let matchAll = text1.matchAll(/how/g)
// let text = match.toString()
// console.log(text);
// console.log(match);
// let arr_form = Array.from(matchAll)
// console.log(arr_form);

// string include
// let text = 'hello world , welcome'
// let include = text.includes('he',0)
// console.log(include);

// string startwith and endwith
// let text2 = 'hello friend'
// let startwith = text2.startsWith('hello')
// let endwith = text2.endsWith('friend')
// console.log(startwith);
// console.log(endwith);

// template string 
// let head = "template string"
// let temp = ["template strings", "javascript"];
// let html = `<h2>${head}</h2><ul>`;
// let list = `<ul>`
// for (let x of temp) {
//   list += `<li>${x}</li>`;
// }
// list += `</ul>`
// ;(function($){
//     $('.list_data').html(list)
// })(jQuery)

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
