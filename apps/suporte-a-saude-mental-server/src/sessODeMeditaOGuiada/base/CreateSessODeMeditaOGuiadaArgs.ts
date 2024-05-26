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
import { SessODeMeditaOGuiadaCreateInput } from "./SessODeMeditaOGuiadaCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateSessODeMeditaOGuiadaArgs {
  @ApiProperty({
    required: true,
    type: () => SessODeMeditaOGuiadaCreateInput,
  })
  @ValidateNested()
  @Type(() => SessODeMeditaOGuiadaCreateInput)
  @Field(() => SessODeMeditaOGuiadaCreateInput, { nullable: false })
  data!: SessODeMeditaOGuiadaCreateInput;
}

export { CreateSessODeMeditaOGuiadaArgs as CreateSessODeMeditaOGuiadaArgs };
