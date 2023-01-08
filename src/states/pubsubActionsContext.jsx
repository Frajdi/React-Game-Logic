import { createContext, useRef } from "react";


export const PubsubActionsContext = createContext();

const PubsubActionsContextProvider = (props) => {
    const attacks = useRef([])
    const specialAbilities = useRef([])

    const publishAttack = () => attacks.current.forEach(($) => $());
    
    const cleanUpAttacks = () =>  attacks.current.length = 0

    const subscribeAttack = (fn) => {
      cleanUpAttacks()
        return attacks.current.push(fn)
    }

    const publishSpecial = () => specialAbilities.current.forEach(($) => $())

    const cleanUpSpecial = () => specialAbilities.current.length = 0

    const subscribeSpecial = (fn) => {
      cleanUpSpecial()
      return specialAbilities.current.push(fn)
    }

    return (
        <PubsubActionsContext.Provider
          {...props}
          value={{
            publishAttack,
            subscribeAttack,
            publishSpecial,
            subscribeSpecial
          }}
        />
      );
}

export default PubsubActionsContextProvider;