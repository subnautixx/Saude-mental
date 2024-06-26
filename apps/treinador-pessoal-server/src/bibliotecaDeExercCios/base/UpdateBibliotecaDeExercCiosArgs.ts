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
import { BibliotecaDeExercCiosWhereUniqueInput } from "./BibliotecaDeExercCiosWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BibliotecaDeExercCiosUpdateInput } from "./BibliotecaDeExercCiosUpdateInput";

@ArgsType()
class UpdateBibliotecaDeExercCiosArgs {
  @ApiProperty({
    required: true,
    type: () => BibliotecaDeExercCiosWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BibliotecaDeExercCiosWhereUniqueInput)
  @Field(() => BibliotecaDeExercCiosWhereUniqueInput, { nullable: false })
  where!: BibliotecaDeExercCiosWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BibliotecaDeExercCiosUpdateInput,
  })
  @ValidateNested()
  @Type(() => BibliotecaDeExercCiosUpdateInput)
  @Field(() => BibliotecaDeExercCiosUpdateInput, { nullable: false })
  data!: BibliotecaDeExercCiosUpdateInput;
}

export { UpdateBibliotecaDeExercCiosArgs as UpdateBibliotecaDeExercCiosArgs };
