import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString, Max, MaxLength } from "class-validator";

@InputType()
export class CreateTodoInput {
    @Field(()=> String)
    @IsNotEmpty()
    @IsString()
    @MaxLength(60)
    description: string;
}