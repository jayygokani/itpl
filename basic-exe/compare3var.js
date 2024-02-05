/*
Combinations:
abc, acb, bca, bac, cab, cba
*/

var a = 0, b = -1, c = 4;

if (true){
    if (a > b){
        if (a > c && c > b){
            console.log(a + ", " + c + ", " + b); //acb
        } 
        if (a > c && b > c) {
            console.log(a + ", " + b + ", " + c); //abc
        }
        if (a < c){
            console.log(c + ", " + a + ", " + b); //cab
        }
    }

    if (b > a) {
        if (b > c && c > a) {
            console.log(b + ", " + c + ", " + a); //bca
        } 
        if (b > c && a > c) {
            console.log(b + ", " + a + ", " + c); //bac
        }
        if (b < c) {
            console.log(c + ", " + b + ", " + a); //cba
        }
    }
}