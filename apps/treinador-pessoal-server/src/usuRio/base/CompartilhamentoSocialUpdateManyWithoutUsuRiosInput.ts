/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CompartilhamentoSocialWhereUniqueInput } from "../../compartilhamentoSocial/base/CompartilhamentoSocialWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CompartilhamentoSocialUpdateManyWithoutUsuRiosInput {
  @Field(() => [CompartilhamentoSocialWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CompartilhamentoSocialWhereUniqueInput],
  })
  connect?: Array<CompartilhamentoSocialWhereUniqueInput>;

  @Field(() => [CompartilhamentoSocialWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CompartilhamentoSocialWhereUniqueInput],
  })
  disconnect?: Array<CompartilhamentoSocialWhereUniqueInput>;

  @Field(() => [CompartilhamentoSocialWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CompartilhamentoSocialWhereUniqueInput],
  })
  set?: Array<CompartilhamentoSocialWhereUniqueInput>;
}

export { CompartilhamentoSocialUpdateManyWithoutUsuRiosInput as CompartilhamentoSocialUpdateManyWithoutUsuRiosInput };