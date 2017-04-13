# Test Response
> Test 1’s answer is below, you can download test 2’s answer in GitHub or view it here http://23.105.194.63/  

### 1. How to verify if a variable is an array?
What I know is this one

`Array.isArray(variable);`

But after a short search, I found a much better and faster way to do it

`variable.constructor === Array`

and it seems to be the fastest way that runs on Chrome.

### 2. What is a ternary operator? Give an example
Ternary operator is an operator uses three operands. Most often used one is

`[condition]?[expression1]:[expression2]`

which is a short and clean for if statement.

Basically the logic is
```js
if([condition]){
	[expression1]
}else{
	[expression2]
}
```

### 3. What are the differences between null and undefined?
Difference:

**null**: The value of the variable is defined to be null

`var a = null; //the value of a is null`

**undefined**: The variable is not defined, there should be a value

`var a; //the value of a is not defined`

and

`undefined === null //false`

Same:
```js
if (!undefined) console.log('undefined is false');
// undefined is false

if (!null) console.log('null is false');
// null is false

undefined == null
// true
```

### 4. What is the output ?
```js
   var num = 10,
   	 name = "Addy Osmani",
     obj1 = {
   	value: "first value"
     },
     obj2 = {
      value: "second value"
     },
     obj3 = obj2;
   function change(num, name, obj1, obj2) {
     num = num * 10;
     name = "Paul Irish";
     obj1 = obj2;
     obj2.value = "new value";
   }
   change(num, name, obj1, obj2);
   console.log(num);
   console.log(name);
   console.log(obj1.value);
   console.log(obj2.value);
   console.log(obj3.value);
```
the output should be
```
10
Paul Irish
first value
new value
new value
```
The global value will not be affected, but the property of an object could be affected in a function porcedure.

### 5. What is the console output ?
```js
   for(var i=0;i<10;i++){
     setTimeout(function(){
         console.log(i);
     }, 200);
   }
```
the output is (10 '10's)
```js
10
10
10
10
10
10
10
10
10
10
```
because the for loop has already finished even before the timeout, and variable `i` become `10`. Then the `console.log(i)` are all executed after timeout. so the result are 10 '10's

### 6. What is the output ?

```js
var Person = function(name){
       this.myname = name;
};
Person.prototype.hello = function(){
       return "Hello I'm "+this.myname+" !";
}
var a = new Person("Frank");
function talk(fn){
       console.log(fn());
}
talk(a.hello);
```
After some debugging,  the output is still
`Hello I'm undefined !`
and I tried to log out the constructor of `Person`, the output is:
```js
function Function() {
    [native code]
}
```

> *But I think the correct output should be* `Hello I'm Frank !`  
