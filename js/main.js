"use strict";

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


/*
task class test code
let newTask = new Task("Wash Butt", new Date(2023, 5, 20, 5, 0, 0));

let anotherTask = new Task("Wash Butt", new Date(2023, 5, 20, 5, 0, 0));

console.log(newTask.getDueDate());
console.log(newTask.valueOf() == anotherTask.valueOf())
*/

let taskList = []
let newTask = new Task("Wash Butt", new Date(2023, 5, 20, 5, 0, 0), "Clean my butthole.");
let anotherTask = new Task("Wash Butt", new Date(2023, 5, 20, 5, 0, 0));
let yetAnotherTask = new Task("Wash Butt", new Date(2023, 5, 20, 5, 0, 0));

taskList.push(newTask);
taskList.push(anotherTask);
console.log(taskList[0]);