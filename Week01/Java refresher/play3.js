const fetchData = () => {
    const promise = new Promise((resolve, reject) => { // similar to locks to make sure we wait when necessary
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => { // asyncronous code
    console.log('Timer is done!');
    fetchData()
    .then(text => {
        console.log(text);
        return fetchData()
    })
    .then(text2 => {
        console.log(text2);
    });
}, 2000);

console.log('Hello!'); // syncronous code
console.log('Hi!');   // syncronous code