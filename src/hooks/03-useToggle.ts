import { useCallback, useState } from "react";

// export const useToggle = (initialValue: boolean) => {

//     const [state, setState] = useState(initialValue);

//     const toggle = useCallback(() => {
//         setState(prevState => !prevState)
//     }, [])

//     return [state, toggle] as const;

// }

export const useToggle = (initialValue: boolean) => {

    const [state, setState] = useState(initialValue);

    const toggle = useCallback(() => {
        setState(prevState => !prevState)
    }, [])

    return [state, toggle] as const;

}