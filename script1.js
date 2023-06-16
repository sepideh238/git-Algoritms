let n=7;
let sum=0;
for(let i=1;i<=n;i++){
   if(n % i === 0){
      sum+=1
   }
}
console.log(sum);
if(sum === 2){
   console.log("Prime")
}else{
   console.log("Not Prime")
}