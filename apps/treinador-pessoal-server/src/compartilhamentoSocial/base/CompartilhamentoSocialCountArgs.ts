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
import { CompartilhamentoSocialWhereInput } from "./CompartilhamentoSocialWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CompartilhamentoSocialCountArgs {
  @ApiProperty({
    required: false,
    type: () => CompartilhamentoSocialWhereInput,
  })
  @Field(() => CompartilhamentoSocialWhereInput, { nullable: true })
  @Type(() => CompartilhamentoSocialWhereInput)
  where?: CompartilhamentoSocialWhereInput;
}

export { CompartilhamentoSocialCountArgs as CompartilhamentoSocialCountArgs };