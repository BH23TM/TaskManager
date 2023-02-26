"use strict";

// Task Class ----------------------------------------------------------|
class Task {
    _dateTime
    _description;
    
    constructor(descr, date) {
        this._description = descr;
        this._dateTime = date;
    }

    // Getters 
    getDueDate() {
        return this._dateTime;
    }

    getDescription() {
        return this._description;
    }

    // Setters
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


let newTask = new Task("Wash Butt", new Date(2023, 5, 20, 5, 0, 0));

let anotherTask = new Task("Wash Butt", new Date(2023, 5, 20, 5, 0, 0));

console.log(newTask.getDueDate());
console.log(newTask.valueOf(), anotherTask.valueOf())
console.log(JSON.stringify(newTask) === JSON.stringify(anotherTask));
console.log(newTask == anotherTask);

