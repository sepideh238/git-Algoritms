let N=12;
let M=36;
let R=0;
for(i=N;i<= M;i++){
    R=i % 3;
    if( R === 0){
        console.log(i);
    }
}