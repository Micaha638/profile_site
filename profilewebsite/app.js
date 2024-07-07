fetch("https://swapi.dev/api/people/1/")
    .then((res) => {
        console.log("resolved!",res);
        rerure
    })
    .catch((e)=> {
        console.log("ERROR!",e)
    });