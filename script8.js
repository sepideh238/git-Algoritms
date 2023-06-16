let n=234;
let sum=0;
let  counter=0;
let R=0;
let quotient=0;
while (n > 0) {
    R = n % 10;
  quotient+=(n-R)/10;
  counter++;
  sum+=R;
    n=quotient;   
}
  console.log(' counter:' ,counter,'sum:',sum) ;
