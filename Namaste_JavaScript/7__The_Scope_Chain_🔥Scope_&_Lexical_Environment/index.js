function a() {

    console.log(e); // e is not defined
    function c() {
        var b = 10;
        var e = 100;
    }
    c();
}

console.log(b); // b is not defined
a();