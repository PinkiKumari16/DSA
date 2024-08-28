
// let a = {};
// let b = { key: "b" };
// let c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);




// let obj1 = { key: "value" };
// let obj2 = obj1;
// let obj3 = obj2;

// obj1.key = "new value";
// obj2 = { key: "another value" };

// console.log(obj1.key, obj2.key, obj3.key);



// const obj = {
//     a: "foo",
//     b: function () {
//       console.log(this.a);
//     },
//   };
  
//   const c = obj.b;
  
//   obj.b();
//   c();


// const x = { foo: 1 };
// const y = { foo: 2 };

// function addFoo(obj) {
//   return obj.foo + 1;
// }

// console.log(addFoo(x));
// console.log(addFoo(y));



// const arr = [1, 2, 3, 4, 5];

// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }


// let x = 1;

// if (function f() {}) {
//   x += typeof f;
//   console.log(typeof(f));
// }


// console.log("******************",x);



// let x = [1, 2, 3];
// let y = [1, 2, 3];
// let z = y;

// console.log(x == y);
// console.log(x === y);
// console.log(z == y);
// console.log(z == x);




// let obj = { name: "John", age: 25 };
// let newObj = { ...obj, age: 30 };


// class Person {
//     static species = 'Homo sapiens';

//     static getSpecies() {
//         return this.species;
//     }
    
// }

// console.log(Person.getSpecies());
// console.log(Person.name());


// const obj = {
//     value: 'Object',
//     showValue: function() {
//         console.log(this.value);
//     }
// };

// const show = obj.showValue;
// show();


const obj1 = {
    value: 1,
    method: function() {
        console.log(this.value);
    }
};

const obj2 = {
    value: 2
};

obj2.method = obj1.method;
obj2.method();
console.log(obj2)


  


