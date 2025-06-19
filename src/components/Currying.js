const Currying = () => {
    const curringExample = (a) => {
        return (b) => {
            return a + b;
        }
    }

    const curry = (fn) => {
        return function curried(...args) {
            if (args.length >= fn.length) {
                return fn(...args);
            } else {
                return function (...args2) {
                    return curried(...args, ...args2);
                };
            }
        };
    };

    const add = (a, b, c) => a + b + c;
    const curriedAdd = curry(add);

    return (
        <div>
            <h1>Curring Example</h1>
            <p>{curringExample(5)(10)}</p>
            <p>{curriedAdd(1)(2)(3)}</p>
            <p>{curriedAdd(1, 2)(3)}</p>
            <p>{curriedAdd(1)(2, 3)}</p>
            <p>{curriedAdd(1, 2, 3)}</p>
        </div>
    )
}

export default Currying;

