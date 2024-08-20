function main(input){
    let lines = input.trim().split('\n');
    let t=parseInt(lines[0]);
    let i=1;
    while(t--){
        let n=parseInt(lines[i]);
        let arrIA = lines[i+1].split(' ').map(Number);
        let arrIR = lines[i+2].split(' ').map(Number);
        let flag = true;
        if(JSON.stringify(arrIA) === JSON.stringify(arrIR)){
            flag = false;
        }
        else{
            let res=[];
            for(let j=n; j>0; j--){
                res.push(j);
            }
            
            for(let ele=n-1; ele>=0; ele--){
                if(res[arrIA[ele]]===undefined){
                    flag = false;
                    break;
                }
                else{
                    let ind = arrIA[ele];
                    arrIA[ele] = res[ind];
                    res.splice(ind,1);
                }
            }
            
        }
        if(!flag){
            process.stdout.write('-1'+'\n');
        }
        else{
            process.stdout.write(arrIA.join(' ')+'\n');
        }
        i+=3;
    }
}


let input = "2\n2\n0 1\n0 1\n2\n0 1\n0 0";
main(input);
