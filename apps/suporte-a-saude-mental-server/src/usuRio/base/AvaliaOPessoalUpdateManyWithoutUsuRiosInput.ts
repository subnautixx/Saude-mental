/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AvaliaOPessoalWhereUniqueInput } from "../../avaliaOPessoal/base/AvaliaOPessoalWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AvaliaOPessoalUpdateManyWithoutUsuRiosInput {
  @Field(() => [AvaliaOPessoalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AvaliaOPessoalWhereUniqueInput],
  })
  connect?: Array<AvaliaOPessoalWhereUniqueInput>;

  @Field(() => [AvaliaOPessoalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AvaliaOPessoalWhereUniqueInput],
  })
  disconnect?: Array<AvaliaOPessoalWhereUniqueInput>;

  @Field(() => [AvaliaOPessoalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AvaliaOPessoalWhereUniqueInput],
  })
  set?: Array<AvaliaOPessoalWhereUniqueInput>;
}

export { AvaliaOPessoalUpdateManyWithoutUsuRiosInput as AvaliaOPessoalUpdateManyWithoutUsuRiosInput };
