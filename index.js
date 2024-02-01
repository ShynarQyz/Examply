async function getUsers(){
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(data);
}


