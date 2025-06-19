import { useEffect, useRef } from 'react'
export default function usePreviousHook(val){
    const ref = useRef();

    useEffect(() => {
        ref.current = val;
    });

    return ref.current;

}