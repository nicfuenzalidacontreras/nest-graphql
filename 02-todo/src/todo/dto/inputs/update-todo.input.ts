import { Field, InputType, Int } from "@nestjs/graphql";
import { IsString, MaxLength, IsInt, IsOptional } from "class-validator";

@InputType()
export class UpdateTodoInput {
    @Field(()=> Int,)
    @IsInt()
    id: number;

    @Field(()=> String, {nullable:true })ß
    @IsString()
    @MaxLength(60)
    @IsOptional()
    description?: string;

    @Field(()=> Boolean, {nullable:true })
    @IsOptional()
    done?: boolean;
}