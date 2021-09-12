function superbowlWin(record){
    let retVal = record.find(({result}) => result === 'W');
    if(retVal){
        return retVal.year;
    }else{
        return retVal;
    }
}
