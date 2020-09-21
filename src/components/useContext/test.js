
const request = async () => {
    const response = await fetch('https://swapi.dev/api/people/1');
    const json = await response.json()
    console.log(json)

    return 'this should print last'
}

request().then(console.log).catch(err => console.log(err));