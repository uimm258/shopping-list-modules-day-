import item from './item.js';


let items = [];
let hideCheckedItems = false;

function findById(id){
    return this.items.find(item => item.id === id);
}

function addItem(name){
    try{
        item.validateName(name);
        this.items.push(item.create(name));
    }catch(e){
        console.log(`${e.message}`)
    }
}

function findAndToggleChecked(id){
    this.findById(id).checked = !this.findById(id).checked;
}

function findAndUpdateName(id, newName){
    try{
        item.validateName(newName);
        this.findById(id).name = newName;
    }catch(e){
        console.log(`Cannot update name: ${error.message}`)
    }
}

function findAndDelete(id){
    this.items = this.items.filter(item => item.id !== id);
}

function toggleCheckedFilter(){
    this.hideCheckedItems = !this.hideCheckedItems;
}






export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter
};

