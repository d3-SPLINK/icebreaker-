class Sessions{
    constructor(id, host, userFile, formFile){
        this.id = id;
        this.host = host;
        this.userFile = userFile;
        this.formFile = formFile;
    }

    GenerateID(){
        return Math.random()*999999;
    }

    join(player) {

    }


}