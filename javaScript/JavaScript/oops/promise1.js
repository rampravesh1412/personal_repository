let oneFun = (para) => {
    return new Promise((resolved , rejected) => {
        if(para === true){
            resolved("My sahi hu Bakki sab fake hai");

        }else{
            rejected("ye galat hai... ")

        }

    })
}

oneFun(false).then((res)=> {
    console.log(res)
}).catch((err) => {
    console.log(err)
})