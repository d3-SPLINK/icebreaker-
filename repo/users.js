class users{
    constructor(id, firstName, lastName, email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    GenerateID() {
        return Math.random()*999999;
    }
}