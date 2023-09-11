const fnAsync = () => {
    return new Promise((res, rej)=>{
        (true)
        ? setTimeout(() => res('Async!!'),2000)
        : rej(new err('error!'));
    })
}

const anotherFn = async ()=>{
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!');
}

console.log('Before');
anotherFn();
console.log('After');