import { TodoListComponent } from './todo-list/todo-list.component'
import { TodoFormComponent } from './todo-form/todo-form.component'

export const todoRouting = [
    {
        path: '',
        children: [
            {
                path: '',
                component: TodoListComponent
            },
            {
                path: ':id',
                component: TodoFormComponent
            }
        ]
    }
]