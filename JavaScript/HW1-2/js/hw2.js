var names=[];
for (var i = 0; i < 5; i++) {
    names.push(prompt('Имя=', names[i]));
}
console.log(names);
var name = prompt("Ваше имя=");
var correctName = false;
for (var c = 0; c < 5; c++) {
    if (names[c] == name) {
        correctName = true;
    }
}
while (correctName) {
    alert(name + ' Вы успешно вошли');
    break;
}
if (correctName == false) {
    alert('Error');
}
