export class player {
    // Variables
    isDead;
    card1;
    card2;
    
    // Constructors
    player(card1, card2) {
        this.setisDead(false);
        this.setcard1(card1);
        this.setcard2(card2)
    }
    // Getters and Setters
    getisDead(){
        return this.isDead;
    }

    setisDead(isDead){
        this.isDead = isDead;
    }

    getcard1(){
        return this.card1;
    }

    setcard1(card1){
        this.card1 = card1
    }

    getcard2(){
        return this.card2
    }
    setcard2(card2){
        this.card2 = card2
    }
}