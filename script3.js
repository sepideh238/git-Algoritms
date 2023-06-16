const n=5;
let sum=0;
let temp=1;

for( let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
    temp*=j;
}sum+=temp;
temp=1};
console.log(sum);