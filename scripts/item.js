//validateName function which takes a name as its argument. Throw a TypeError with the message "Name must not be blank" if name does not exist
function validateName(name){
    if(!name){
        throw new TypeError("Name must not be blank");
    }
}

//create function that will be a factory function. It should take a name as its argument.
function create(names){
    return {
        id: cuid(),
        name: names,
        checked: false
    };
}







export default {
    validateName,
    create
};

