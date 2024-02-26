import { useState } from "react"

// as const => tipos são inferidos de forma literal, exatamente como o mesmo é visto.

// export const useNumber = (initialValue: number) => {

//     const [number, setNumber] = useState(initialValue)

//     return [number, setNumber] as const
// }


// De forma de reduzida.
export const useNumber = (initialValue: number) =>  useState(initialValue)