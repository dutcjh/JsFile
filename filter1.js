/*
ilter也是一个常用的操作，它用于把Array的某些元素过滤掉，然后返回剩下的元素。

和map()类似，Array的filter()也接收一个函数。和map()不同的是，filter()把传入
的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素。
*/
// 在一个Array中，删掉偶数，只保留奇数，可以这么写：
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
// 或者
var r = arr.filter(x => x%2);

// 把一个Array中的空字符串删掉，可以这么写：
var arr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = arr.filter(s => s && s.trim());
/*
回调函数

filter()接收的回调函数，其实可以有多个参数。通常我们仅使用第一个参数，
表示Array的某个元素。回调函数还可以接收另外两个参数，表示元素的位置和
数组本身：
*/
var arr = ['A', 'B', 'C'];
var r = arr.filter(function (element, index, self) {
    console.log(element); // 依次打印'A', 'B', 'C'
    console.log(index); // 依次打印0, 1, 2
    console.log(self); // self就是变量arr
    return true;
});
// 利用filter，可以巧妙地去除Array的重复元素：
var
    r,
    arr = ['apple', 'strawberry', 'banana', 'pear',
    'apple', 'orange', 'orange', 'strawberry'];
r = arr.filter(function (element, index, self) {
        return self.indexOf(element) === index;
    });
console.log(r.toString());

//尝试用filter()筛选出素数：
function get_primes(arr) {
  return arr.filter(function(x) {
    if (x <= 1) return false;
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (!(x % i)) {return false;}
    }
    return true;
});
}
// 测试:
var
    x,
    r,
    arr = [];
for (x = 1; x < 100; x++) {
    arr.push(x);
}
r = get_primes(arr);
if (r.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
    console.log('测试通过!');
} else {
    console.log('测试失败: ' + r.toString());
}
