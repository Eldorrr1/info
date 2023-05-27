var age1 = prompt('Birinchi sonni kiriting')
var age2 = prompt('Ikkinchi sonni kiriting')
var age3 = prompt('Uchinchi sonni kiriting')

if(age1 < age2 && age1 > age3 || age1 > age2 && age1 < age3 ){
    console.log(age1);
}
else if(age2 < age1 && age2 > age3 || age2 > age1 && age2 < age3){
    console.log(age2);
}else if(age3 < age1 && age3 > age2 || age3 > age1 && age3 < age2 ){
    console.log(age3);
}
alert("Natijani ko'ring")
