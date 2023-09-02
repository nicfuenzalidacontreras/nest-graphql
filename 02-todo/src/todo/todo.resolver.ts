import { Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';

@Resolver()
export class TodoResolver {
    constructor(
        private readonly todoService:TodoService
    ){}


    @Query(()=> [Todo], {name:'todos'})
    findAll(): Todo[] {
        return this.todoService.findAll();
    }

    findOne() {
        return '';
    }

    createTodo() {
        return '';
    }

    UpdateTodo() {
        return '';
    }

    removeTodo() {
        return '';
    }
}
