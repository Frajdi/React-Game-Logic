import { createContext, useRef } from "react";


export const PubsubContext = createContext();

const PubsubContextProvider = (props) => {
    const subscribers = useRef([])

    const publish = () => subscribers.current.forEach(($) => $());
    
    const unsubscribe = (fn) =>  subscribers.current = subscribers.current.filter(($) => $ !== fn)

    const subscribe = (fn) => {
        unsubscribe(fn)
        return subscribers.current.push(fn)
    }

    return (
        <PubsubContext.Provider
          {...props}
          value={{
            publish,
            subscribe,
            unsubscribe
          }}
        />
      );
}

export default PubsubContextProvider;