import { useContext } from "react"
import { PubsubContext } from "./pubsubContext"

export const usePubsub = () => {
   const pubsub = useContext(PubsubContext)


    return {
        publish: pubsub.publish.bind(pubsub),
        subscribe: pubsub.subscribe.bind(pubsub),
        unsubscribe : pubsub.unsubscribe.bind(pubsub)
    }
}