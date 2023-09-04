import { Resolver, Args, Int, Mutation } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';
import { createTodoInput } from './dto/inputs/create-todo.input';
import { UpdateTodoInput } from './dto/inputs/update-todo.input';

@Resolver()
export class TodoResolver {
    constructor(
        private readonly todoService:TodoService
    ){}

    @Query(() => [Todo], {name:'todos'})
    findAll(): Todo[] {
        return this.todoService.findAll();
    }

    @Query(() => Todo, {name:'todo'})
    findOne(@Args('id',{type: () => Int}) id: number) {
        return this.todoService.findOne(id);
    }

    @Mutation(() => Todo, {name:'createTodo'})
    createTodo(
        @Args('createTodoInput') createTodoInput:createTodoInput
    ) {
        return this.todoService.create(createTodoInput);
    }

    @Mutation(() => Todo, {name: 'updateTodo'})
    UpdateTodo(
        @Args('updateTodoInput') updateTodoInput:UpdateTodoInput
    ) {
        return this.todoService.update(updateTodoInput);
    }

    @Mutation(() => Boolean, {name: 'removeTodo'})
    removeTodo(
        @Args('id',{type: () => Int}) id:number
    ) {
        return this.todoService.remove(id);
    }
}
