let n=4;
let sum=0;
for(let i=1;i<=n;i++){
    if(i % 2 == 0){
        let m=i+1;
       sum-=i/m;}else if(i % 2 == 1){
        let m=i+1;
        sum+=i/m;
       }

}
console.log(sum);





