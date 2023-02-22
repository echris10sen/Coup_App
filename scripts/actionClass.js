export class actionHandler {
    // variables
    
    action;

    // constructor
    actionHandler(arg) {
        switch (arg) {
            case 1:
            // Ambassador
                break;
            case 2:
            // Assassin
                break;
            case 3:
            // Captain
                break;
            case 4:
            // Contessa
                break;
            case 5:
            // Duke
                break;
            default:
                break;
        }
    }

    // Methods
    takeAction() {

    }

    // Getters and Setters
    getAction() {
        return this.action;
    }

    setAction(arg) {
        this.action = arg;
    }
}