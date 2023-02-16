export class IModel {
    user:string
    items:any

    constructor(){
        this.user = "Mustafa"
        this.items = [
            new TodoItem("Breakfast", true),
            new TodoItem("Sport", false),
            new TodoItem("Cinema", false)
        ]
    }
}

export class TodoItem {
    description:string
    action:boolean

    constructor(description, action){
        this.description = description
        this.action = action
    }
}