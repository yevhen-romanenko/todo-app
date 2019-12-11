export interface ITodo {
    title: string
    id: number
    completed: boolean
}

export interface TodoListProps {
    todos: ITodo[]
    onComplete(id: number) : void
    onRemove(id: number) : void
    onUpdate(id: number): void
}

export interface TodoFormProps {
    onAdd(title: string) : void
}

export interface NavbarProps {
    todos: ITodo[];
}