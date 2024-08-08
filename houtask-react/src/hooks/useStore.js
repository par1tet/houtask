import { rootStoreContext } from "../App"
import { useContext } from "react"

export const useStore = () => {
    const rootStore = useContext(rootStoreContext)

    if(rootStore === null){
        throw new Error('The app is not wrapped in context')
    }

    return rootStore
}