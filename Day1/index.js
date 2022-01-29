function fibbo(n){
    var a=0;
    var b=1;
    var count=1;
    var list=[];
    if(n===1){
            list=[0];
        }else if(n===2){
            list=[0,1];
        }else{
            list=[0,1];
            while(count<=n-2){
                var sum=a+b;
                list.push(sum);
                a=b;
                b=sum;
                count++;
                }
        }
        return list;

}
console.log(fibbo(15));