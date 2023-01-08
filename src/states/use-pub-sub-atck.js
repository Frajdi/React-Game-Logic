import { useContext } from "react"
import { PubsubActionsContext } from "./pubsubActionsContext"

export const usePubsubActions = () => {
   const pubsub = useContext(PubsubActionsContext)

    return {
        publishAttack: pubsub.publishAttack.bind(pubsub),
        subscribeAttack: pubsub.subscribeAttack.bind(pubsub),
        publishSpecial: pubsub.publishSpecial.bind(pubsub),
        subscribeSpecial: pubsub.subscribeSpecial.bind(pubsub)
    }
}