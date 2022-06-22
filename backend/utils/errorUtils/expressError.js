class ExpressError extends Error{
    constructor(name){
        super();
        this.name = name;
       
    }
}

module.exports = ExpressError;