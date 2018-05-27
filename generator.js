//generator（生成器）是ES6标准引入的新的数据类型。一个generator看上去
//像一个函数，但可以返回多次。
function* foo(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
}

function* fib(max) {
    var
        t,
        a = 0,
        b = 1,
        n = 0;
    while (n < max) {
        yield a;
        [a, b] = [b, a + b];
        n ++;
    }
    return;
}

var f = fib(5);
f.next(); // {value: 0, done: false}
f.next(); // {value: 1, done: false}
f.next(); // {value: 1, done: false}
f.next(); // {value: 2, done: false}
f.next(); // {value: 3, done: false}
f.next(); // {value: undefined, done: true}

//第二个方法是直接用for ... of循环迭代generator对象，
//这种方式不需要我们自己判断done：
for (var x of fib(10)) {
    console.log(x); // 依次输出0, 1, 1, 2, 3, ...
}

//用一个对象来保存状态，得这么写：
try {
    r1 = yield ajax('http://url-1', data1);
    r2 = yield ajax('http://url-2', data2);
    r3 = yield ajax('http://url-3', data3);
    success(r3);
}
catch (err) {
    handle(err);
}
