import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloResolver {
    @Query( ()=> String, {
        name: 'hello',
        description: 'Hola mundo es lo que retorna'
    })
    helloWorld(): string {
        return 'Hola Mundo';
    }

    @Query( ()=> Float, { name: 'randomNumber'})
    getNumberRandom(): Number {
        return Math.random() * 100;
    }

    @Query( ()=> Int, { name: 'randomFromZeroTo'})
    getRandomFromZeroTo(@Args('to',{type: () => Int, nullable: true}) to: number = 6): number {
        return Math.floor(Math.random() * to);
    }
}
