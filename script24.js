let sum=0;
let r=0;
for(i=2;i<=7;i++){
    for(j=1;j<=i/2;j++){
r+=i % j;
if(r === 0){
    sum+=j;
} 
}console.log(sum);
if(sum=i)
{  console.log(i,"whole number");
}else{
    console.log(i,"Not");
}}

// whole number
// let m=8;
// let sum=0;
//     for(j=1;j<=m/2;j++){
// if(m % j === 0){
//     sum+=j;
//     }
// }
// console.log(sum);
// if( sum=m){
//     console.log(m,"whole number");
// }else {
//     console.log(m,"Not");
// }


// prime
// let sum=0;
// for(i=2;i<=10;i++){
// for(let j=1;j<=i;j++){
//    if(i % j === 0){
//       sum+=1
//    }
// }
// console.log(sum);
// if(sum === 2){
//    console.log(i,"Prime")
// }else{
//    console.log(i,"Not Prime")}
//    sum=0;
// }
