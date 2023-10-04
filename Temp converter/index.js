var cel = document.getElementById("cel");
var fah = document.getElementById("fah");
var kev = document.getElementById("kev");

cel.addEventListener('input', function () {
    let c = this.value;
    let k = parseFloat(c) + 273.15;
    let f = (c * 9 / 5) + 32;

    fah.value = f;
    kev.value = k;
});
fah.addEventListener('input', function () {
    let f = this.value;
    let c = (parseFloat(f) - 32) * 5 / 9; 
    let k = c + 273.15;
   
    cel.value = c;
    kev.value =k;
});
kev.addEventListener('input', function () {
    let k = parseFloat(this.value);
    let c= k - 273.15;
    let f= c * 9/5 + 32;

    cel.value = c;
    fah.value = f;
   
    
});
