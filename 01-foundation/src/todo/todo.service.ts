import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    {id: 1, description: 'Piedra del alma', done: false},
    {id: 2, description: 'Piedra del tiempo', done: false},
    {id: 3, description: 'Piedra del realidad', done: true},
    {id: 4, description: 'Piedra del poder', done: false},
    {id: 5, description: 'Piedra del mente', done: false},
  ]

  create({description}: CreateTodoDto) {
    const todo = new Todo();
    todo.id = Math.max(...this.todos.map(todo => todo.id),0) + 1;
    todo.description = description;

    this.todos.push(todo);

    return todo;
  }

  findAll() {
    this.todos;
  }

  findOne(id: number) {
    const todo =this.todos.find(todo => todo.id === id);
    if(!todo) throw new NotFoundException(`TODO with id #${id} not found`);
    
    return todo
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    const { done, description } = updateTodoDto;
    const todo = this.findOne(id);
    if(done !== undefined) todo.done = done;
    if(description) todo.description = description;

    this.todos.map((dbTodo) => {
      if(dbTodo.id === id ) return todo
    });

    return todo;
  }

  remove(id: number) {
    this.findOne(id);
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
