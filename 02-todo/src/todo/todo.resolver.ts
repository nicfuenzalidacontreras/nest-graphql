import { Resolver, Args, Int } from '@nestjs/graphql';
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

    @Query(()=> Todo, {name:'todo'})
    findOne(@Args('id',{type: () => Int}) id: number) {
        return this.todoService.findOne(id);
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
