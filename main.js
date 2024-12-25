var f;
var c;
function fah(c){
    var f = c*(9/5) + 32;
    //console.log(f);
    return f;
}
var f_value = fah(27);
console.log("The fahrenhiet value is "+f_value);

function cel(f){
    var c =(f - 32) * 5/9
    //console.log(c);
    return c;
}
var c_value = cel(100);
console.log("The Celsius value is " + c_value); 