/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BibliotecaDeExercCiosWhereInput } from "./BibliotecaDeExercCiosWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class BibliotecaDeExercCiosCountArgs {
  @ApiProperty({
    required: false,
    type: () => BibliotecaDeExercCiosWhereInput,
  })
  @Field(() => BibliotecaDeExercCiosWhereInput, { nullable: true })
  @Type(() => BibliotecaDeExercCiosWhereInput)
  where?: BibliotecaDeExercCiosWhereInput;
}

export { BibliotecaDeExercCiosCountArgs as BibliotecaDeExercCiosCountArgs };
