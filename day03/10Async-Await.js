function fetchData() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const resultSuccess = true;
            if(resultSuccess){
                resolve('Data fetched successfully');
            }else{
                reject('Failed to fetch data');
            }
        }, 2000);
    })
}

async function getData(){
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getData()