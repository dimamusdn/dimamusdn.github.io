function varDeclaration() {
    var num = prompt('Num=');
    var exp = Math.round(prompt('Exp=',0));
    var res = pow(num, exp);
}
function pow(num, exp) {
    var res = num;
    if (isNaN(exp)) {
        alert('exp is not a number');
    }
    if (exp == 0) {
        res = 1;
    }
    if (isNaN(num)) {
        alert('num is not a number');
    }
    if(exp < 0){
        res = 1/res;
    }
    for (var i = 1; i < exp; i++) {
        res *= num;
    }
    alert(res);
}
varDeclaration();
