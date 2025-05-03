function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if(success){
                resolve("Data fetched Successfully")
            } else{
                reject("Error fetching data")
            }
        }, 2000);
    })
}

// let response = fetchData();
// console.log(response);

fetchData()
    .then((data) => {
        console.log(data)
        console.log(data.toLowerCase());
        return "Abhishek keep on going."
    })
    .then((value) => {
        console.log(value);
    })
    .catch((error) => console.error(error))