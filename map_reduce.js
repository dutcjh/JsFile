// map
/*
由于map()方法定义在JavaScript的Array中，我们调用Array的map()方法，
传入我们自己的函数，就得到了一个新的Array作为结果：
*/
'use strict';

function pow(x) {
    return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var results = arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
console.log(results);

// 等价于
var f = function (x) {
    return x * x;
};

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = [];
for (var i=0; i<arr.length; i++) {
    result.push(f(arr[i]));
}

//把Array的所有数字转为字符串：
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(String); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']

// reduce
/*
再看reduce的用法。Array的reduce()把一个函数作用在这个Array的
[x1, x2, x3...]上，这个函数必须接收两个参数，reduce()把结果
继续和序列的下一个元素做累积计算，其效果就是：
[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
*/
//比方说对一个Array求和，就可以用reduce实现
var arr = [1, 3, 5, 7, 9];
arr.reduce(function (x, y) {
    return x + y;
}); // 25

// 利用reduce()求积：
'use strict';

function product(arr) {
    return arr.reduce(function (x, y){
        return x*y;
      });
}
// 测试:
if (product([1, 2, 3, 4]) === 24 && product([0, 1, 2]) === 0 &&
product([99, 88, 77, 66]) === 44274384) {
    console.log('测试通过!');
}
else {
    console.log('测试失败!');
}

//要把[1, 3, 5, 7, 9]变换成整数13579，reduce()也能派上用场：
var arr = [1, 3, 5, 7, 9];
arr.reduce(function (x, y) {
    return x * 10 + y;
}); // 13579
// 转换为字符串
arr.reduce(function (x, y) {
return x.toString() + y.toString();
});
// 更好的方法
arr.join("")
// 把一个字符串13579先变成Array——[1, 3, 5, 7, 9]，
// 再利用reduce()就可以写出一个把字符串转换为Number的函数。
function string2int(s) {
 return s.split('').map(function(x){return +x;}).
 reduce(function(x,y){return 10*x+y;});
}
// 测试:
if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
    if (string2int.toString().indexOf('parseInt') !== -1) {
        console.log('请勿使用parseInt()!');
    } else if (string2int.toString().indexOf('Number') !== -1) {
        console.log('请勿使用Number()!');
    } else {
        console.log('测试通过!');
    }
}
else {
    console.log('测试失败!');
}
// 最简单版 字符串转换成数字
function string2int(s) {
  return +s;
}
// 数字转换成字符串
function int2string(n) {
  return n+'';
}
//请把用户输入的不规范的英文名字，变为首字母大写，其他小写的规范名字。输入：['adam', 'LISA', 'barT']，
//输出：['Adam', 'Lisa', 'Bart']。
function normalize(arr) {
  return arr.map(function(s){
    return s[0].toUpperCase() + s.substring(1).toLowerCase();
});
}
// 测试:
if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
    console.log('测试通过!');
}
else {
    console.log('测试失败!');
}
//利用map()把字符串变成整数
var arr = ['1', '2', '3'];
arr.map(Number);
// 整数转换成字符串
var arr = [1,2,3];
arr.map(String);

// => 函数
var arr = [1,2,3,4,5];
arr.map(x => x*x);
