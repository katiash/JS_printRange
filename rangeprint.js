

function printRange(sp, ep, sk){

    if(arguments.length===3){
        console.log(`Counting up from ${sp} through ${ep-1}, given a stop number of ${sp}, and skipping by ${sk} each time.`);
        for(sp; sp<ep; sp+=sk){
            console.log(`Current number is: ${sp}`);
        }
    }
    else if(arguments.length===2){
        console.log(`Counting up from ${sp} through ${ep-1}, given a stop number of ${sp}, and skipping by ${1} each time.`);
        for(sp; sp<ep; sp++){
            console.log(`Current number is: ${sp}`);
        } 
    }
    else{
        console.log(`Counting up from 0 to ${sp-1}, given a stop number of ${sp}, and skipping by 1 each time.`);
        for(let i=0; i<sp; i++){
            console.log(`Current number is: ${i}`);
        }
    }

}

printRange(2, 10, 2);
printRange(4,8);
printRange(4);
