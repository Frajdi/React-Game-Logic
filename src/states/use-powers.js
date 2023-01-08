export const usePowers = () => {
    
    function heal(){
        if(this.specialPowers > 0){
            this.health += 100;
            return  this.specialPowers --
        }
        else{
            return
        }
    }
        
    function supperAttack() {
        if(this.specialPowers > 0){
            this.attack = this.attack * 2;
            return  this.specialPowers --
        }
        else{
            return
        }
    }

    function attacked(attackPower){
         return this.health = this.health - attackPower
    }

    return {
        heal,
        supperAttack,
        attacked
    }
}