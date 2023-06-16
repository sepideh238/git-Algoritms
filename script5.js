let R=15;
let M=3;
let rest=0;
if(M<6){
 rest+=(M-1)*31+R;
 console.log(rest);
}else if(M<11){
    rest+=186+(M-6)*30+R;
    console.log(rest);
}else if(M=12){rest+=366+R;
    console.log(rest);
}