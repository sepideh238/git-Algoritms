let a=36;
let b=27;
let r=0;
let BMM=0;
let KMM=0; 
while(r === 0){
    r+=a % b;
a=b;
b=r;
}
BMM+=b;
KMM+=(a*b)/BMM;
console.log(BMM);
console.log(KMM);




