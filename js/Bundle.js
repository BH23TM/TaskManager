class Task{

}

class Bundle{
    constructor(){
        this.task_list = [];
        bundle_name = '';
    }
    constructor(bundle_name){
        this.task_list = [];
        this.bundle_name = bundle_name;
    }

    addTask(t){
        this.task_list.push(t);
    }
    
    removeTask(t){
        for (i = 0; i < this.task_list.length();i++){
            if( t == task_list[i]){
                this.task_list.splice(i,1);
            }
        }
    }
    
}