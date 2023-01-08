import { CharacterUI } from "../UI/CharacterUI";
import { usePubsub } from "../states/use-pub-sub";
import { usePubsubActions } from "../states/use-pub-sub-atck";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Character = ({characterData, turn}) => {

    const { publish } = usePubsub();
    const { publishAttack, publishSpecial } = usePubsubActions();
    const navigate = useNavigate()
    const refresh = () => window.location.reload(true)

    const [rerender, setRerender] = useState(false);


    const onAttack = () => { publish(); publishAttack()}
    const onSpecialAbility = () => {publishSpecial(), setRerender(!rerender)}

  if(characterData.health > 0){
  return (
    <>
    <CharacterUI characterData = {characterData}/>
    <button  disabled={!turn} onClick={onAttack}>Attack</button>
    <button style={{marginLeft: '1rem'}} disabled={!turn} onClick={onSpecialAbility}>Use Special Ability</button>
    </>
  )}
  else{
    refresh()
    navigate('../game-over')
  }
}

export default Character