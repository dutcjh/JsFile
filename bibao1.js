// 函数作为返回值
//通常情况下，求和的函数是这样定义的：
function sum(arr){
  return arr.reduce(function(x,y){
    return x+y;
  });
}

sum([1,2,3,4,5]);

//但是，如果不需要立刻求和，而是在后面的代码中，
//根据需要再计算怎么办？可以不返回求和的结果，而是返回求和的函数！
function lazy_sum(arr){
  var sum = function () {
    return arr.reduce(function(x,y){
      return x+y;
    });
  }
  return sum;
}

var f = lazy_sum([1,2,3,4,5]);
f(); // 15
// 这种称为“闭包（Closure）”的程序结构拥有极大的威力。
var f1 = lazy_sum([1, 2, 3, 4, 5]);
var f2 = lazy_sum([1, 2, 3, 4, 5]);
f1 === f2; // false
//f1()和f2()的调用结果互不影响。
function count(){
  var arr = [];
  for (var i=1; i<=3; i++){
    arr.push(function(){
      return i*i;
    });
  }
  return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
//你可能认为调用f1()，f2()和f3()结果应该是1，4，9，但实际结果是16
//原因就在于返回的函数引用了变量i，但它并非立刻执行。等到3个函数都返回时，
//它们所引用的变量i已经变成了4，因此最终结果为16。
//返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量。
/*
如果一定要引用循环变量怎么办？方法是再创建一个函数，
用该函数的参数绑定循环变量当前的值，
无论该循环变量后续如何更改，已绑定到函数参数的值不变：
*/
function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push((function (n) {
            return function () {
                return n * n;
            }
        })(i));
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

f1(); // 1
f2(); // 4
f3(); // 9

//注意这里用了一个“创建一个匿名函数并立刻执行”的语法
(function (x) {
    return x * x;
})(3); // 9
// 更简单的
(x=>x*x)(3); // 9

/*
在面向对象的程序设计语言里，比如Java和C++，要在对象内部封装一个私有变量，
可以用private修饰一个成员变量。

在没有class机制，只有函数的语言里，借助闭包，同样可以封装一个私有变量。
我们用JavaScript创建一个计数器：
*/
function create_counter(initial){
  var x = initial || 0;
  return{
    inc: function(){
      x += 1;
      return x;
    }
  }
}

var c1 = create_counter();
c1.inc(); // 1
c1.inc(); // 2
c1.inc(); // 3

var c2 = create_counter(10);
c2.inc(); // 11
c2.inc(); // 12
c2.inc(); // 13
/*
在返回的对象中，实现了一个闭包，该闭包携带了局部变量x，
并且，从外部代码根本无法访问到变量x。换句话说，闭包就是
携带状态的函数，并且它的状态可以完全对外隐藏起来。
*/
//闭包还可以把多参数的函数变成单参数的函数。
function make_pow(n){
  return function(x){
    return Math.pow(x,n);
  }
}
var pow2 = make_pow(2);
var pow3 = make_pow(3);

/*
很久很久以前，有个叫阿隆佐·邱奇的帅哥，发现只需要用函数，
就可以用计算机实现运算，而不需要0、1、2、3这些数字和+、-、*、/这些符号。
*/
// 定义数字0
var zero = function(f){
  return function(x){
    return x;
  }
}
// 定义数字1
var one = function(f){
  return function(x){
    return f(x);
  }
}
// 定义加法
