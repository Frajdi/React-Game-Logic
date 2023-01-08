import React from 'react'
import { wizzard } from '../characters.js/wizzard'
import { knight } from '../characters.js/knight'
import Character from '../components/Character'

const LayoutUI = ({turn}) =><>
    <Character characterData={wizzard} turn={turn}/>
    <Character characterData={knight} turn={!turn}/>
    </>


export default LayoutUI