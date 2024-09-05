function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const resultSuccess = true;
            if (resultSuccess) {
                resolve("Data fetched successfully")
            } else {
                reject('Failed to fetch data')
            }
        },2000);
    })
}

fetchData()
.then((data) =>{
    console.log(data)
})
.catch((error) => {
    console.error(error)
})