const Oncefn = () => {
    const add = (a,b) => {
    return a + b;           
}

const once = (fn) => {
    let called = false;
    let result;

    return function(...args) {
        if (!called) {
            called = true;
            result = fn.apply(this, args);
        }
        return result;
    };
}

const onceAdd = once(add);
return (
        <div>
            <h1>Once Function Example</h1>
            <p>{onceAdd(5,8)}</p>
        </div>
    );
};

export default Oncefn;

