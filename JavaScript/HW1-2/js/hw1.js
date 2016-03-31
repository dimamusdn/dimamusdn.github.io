function pow(a, b) {
    var res;
        res = Math.pow(a, b);
            return res;
}
var a = prompt('Число=');
if (Math.round(a) == a) {
    var b = prompt('Степень=');
        if (Math.round(b) != b) {
            alert = ("Not integer");
        }
    } else {
        alert("Not integer");
    }
console.log(pow(a, b));
