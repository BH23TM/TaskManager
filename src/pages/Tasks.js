
// Task Class ----------------------------------------------------------|
class Task {
    _name;
    _dateTime;
    _description;

    constructor(name, date, descr=null) {
        this._name = name;
        this._dateTime = date; 
        this._description = descr;  
    }

    // Getters 
    getName() {
        return this._name;
    }

    getDueDate() {
        return this._dateTime;
    }

    getDescription() {
        return this._description;
    }

    // Setters
    setName(newName) {
        this._name = newName;
    }

    setDueDate(newDate) {
        this._dateTime = newDate;
    }

    setDescription(newDescr) {
        this._description = newDescr;
    }

    valueOf() {
        return `${this._description} | ${this._dateTime}`;
    }

}


const Tasks = () => {
    return (
    <h1>Tasks</h1>)
}

export default Tasks;


