export class card {
    name;
    cardType;

    card (arg) {
        switch (arg) {
            case 0:
            case 1:
            case 2:
                this.name = "Ambassador";
                this.cardType = 1;
                break;
            case 3:
            case 4:
            case 5:
                this.name = "Assassin";
                this.cardType = 2;
                break;
            case 6:
            case 7:
            case 8:
                this.name = "Captain";
                this.cardType = 3;
                break;
            case 9:
            case 10:
            case 11:
                this.name = "Contessa";
                this.cardType = 4;
                break;
            case 12:
            case 13:
            case 14:
                this.name = "Duke";
                this.cardType = 5;
                break;
            default:
                break;
        }
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}