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
import { RecomendaOWhereUniqueInput } from "./RecomendaOWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RecomendaOUpdateInput } from "./RecomendaOUpdateInput";

@ArgsType()
class UpdateRecomendaOArgs {
  @ApiProperty({
    required: true,
    type: () => RecomendaOWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RecomendaOWhereUniqueInput)
  @Field(() => RecomendaOWhereUniqueInput, { nullable: false })
  where!: RecomendaOWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => RecomendaOUpdateInput,
  })
  @ValidateNested()
  @Type(() => RecomendaOUpdateInput)
  @Field(() => RecomendaOUpdateInput, { nullable: false })
  data!: RecomendaOUpdateInput;
}

export { UpdateRecomendaOArgs as UpdateRecomendaOArgs };
