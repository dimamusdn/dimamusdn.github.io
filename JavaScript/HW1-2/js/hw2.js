var names=[];
for (var i = 0; i < 5; i++) {
    names.push(prompt('Имя=',names[i]));
}
console.log(names);
var name=prompt("Ваше имя=");
var correctName=false;
for (var c = 0; c < 5; c++) {
    if(names[c]==name){
        correctName=true;
    }
}
    while (correctName) {
        alert(name + ' Вы успешно вошли');
        break;
    }
if (correctName==false){
    alert('Error');
}




// var names=[];
// for(var i=0;i<=5;i++){
//     names.push(prompt(names[i]));
// }
// console.log(names);
// var name=prompt("Имя");
// var yesName = false;
//
// for ( var n = 0; n < 5; n++ ){
//   if (names[n] == name){
//       yesName = true;
//   }
// }
//     while(yesName){
//         alert( name + ' вы успешно вошли');
//         break;
//     }
// if (yesName == false){
//     alert(' Error');
// }
