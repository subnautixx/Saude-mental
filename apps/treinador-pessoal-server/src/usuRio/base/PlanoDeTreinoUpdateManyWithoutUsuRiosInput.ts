/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PlanoDeTreinoWhereUniqueInput } from "../../planoDeTreino/base/PlanoDeTreinoWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PlanoDeTreinoUpdateManyWithoutUsuRiosInput {
  @Field(() => [PlanoDeTreinoWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlanoDeTreinoWhereUniqueInput],
  })
  connect?: Array<PlanoDeTreinoWhereUniqueInput>;

  @Field(() => [PlanoDeTreinoWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlanoDeTreinoWhereUniqueInput],
  })
  disconnect?: Array<PlanoDeTreinoWhereUniqueInput>;

  @Field(() => [PlanoDeTreinoWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlanoDeTreinoWhereUniqueInput],
  })
  set?: Array<PlanoDeTreinoWhereUniqueInput>;
}

export { PlanoDeTreinoUpdateManyWithoutUsuRiosInput as PlanoDeTreinoUpdateManyWithoutUsuRiosInput };
