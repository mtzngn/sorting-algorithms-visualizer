const randomArrCreate = () => {
    let randomArr = [];

    while(randomArr.length < 60){
        let randNum = (Math.floor(Math.random() * 99)) + 1;
        !randomArr.includes(randNum) && randomArr.push(randNum);
    }
    return randomArr;
}




export default randomArrCreate;
