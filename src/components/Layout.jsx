import { wizzard } from "../characters.js/wizzard";
import { knight } from "../characters.js/knight";
import { useState, useEffect } from "react";
import { usePubsub } from "../states/use-pub-sub";
import { usePubsubActions } from "../states/use-pub-sub-atck";
import { usePowers } from "../states/use-powers";
import LayoutUI from "../UI/LayoutUI";

const Layout = () =>{

    const { subscribe } = usePubsub();
    const {subscribeAttack, subscribeSpecial} = usePubsubActions();
    const {attacked, heal, supperAttack} = usePowers();


    const [turn, setTurn] = useState(true)
   
    
    const onChangeTurn = () => setTurn((curr) => !curr)
    const attack = () => {attacked.call(turn? knight : wizzard, turn ? wizzard.attack : knight.attack)}
    //curring two functions
    const specialAbilitieUse = (turn) => (currentCharacter = turn ? wizzard : knight) => currentCharacter === wizzard ? heal.call(currentCharacter) : supperAttack.call(currentCharacter)
    //the outcome function
    const assignAbilityToCharacter = specialAbilitieUse(turn)


    useEffect(() => {
        subscribe(onChangeTurn)
    },[])
    useEffect(() => {
        subscribeAttack(attack)
        subscribeSpecial(assignAbilityToCharacter)
    },[turn])


return <LayoutUI turn ={turn}/>
}

export default Layout