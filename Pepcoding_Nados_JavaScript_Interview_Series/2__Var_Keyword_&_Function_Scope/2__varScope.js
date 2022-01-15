var a;
console.log("line number 2 => ", a); // global scope
a = 10;

function fn() {
    
    console.log("line number 4 =>", a); // functional scope
    var a;
    console.log("line number 8 =>", a); // functional scope
    a = 20;
    console.log("line number 10 =>", a); // functional scope

    if(a) {
        console.log("line number 13 =>", a); // functional scope
        var a = 30;
        a++;
        console.log("line number 14 =>", a);
    }

    console.log("line number 18 =>", a); // function scope

}

console.log("line number 16 =>", a); // global scope

fn();