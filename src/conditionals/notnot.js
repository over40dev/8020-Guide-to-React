console.log('double bang')
console.log(false, !!false);        //false false
console.log(null, !!null);          //null false
console.log(undefined, !!undefined);//undefined false
console.log('', !!'');              //  false
console.log(0, !!0);                //0 false`;
console.log(NaN, !!NaN);            //NaN false

console.log('single bang')
console.log(false, !false);        //false true
console.log(null, !null);          //null true
console.log(undefined, !undefined);//undefined true
console.log('', !'');              //  true
console.log(0, !0);                //0 true`;
console.log(NaN, !NaN);            //NaN true
