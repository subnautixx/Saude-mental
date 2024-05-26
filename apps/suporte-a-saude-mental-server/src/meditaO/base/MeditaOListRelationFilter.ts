/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MeditaOWhereInput } from "./MeditaOWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MeditaOListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MeditaOWhereInput,
  })
  @ValidateNested()
  @Type(() => MeditaOWhereInput)
  @IsOptional()
  @Field(() => MeditaOWhereInput, {
    nullable: true,
  })
  every?: MeditaOWhereInput;

  @ApiProperty({
    required: false,
    type: () => MeditaOWhereInput,
  })
  @ValidateNested()
  @Type(() => MeditaOWhereInput)
  @IsOptional()
  @Field(() => MeditaOWhereInput, {
    nullable: true,
  })
  some?: MeditaOWhereInput;

  @ApiProperty({
    required: false,
    type: () => MeditaOWhereInput,
  })
  @ValidateNested()
  @Type(() => MeditaOWhereInput)
  @IsOptional()
  @Field(() => MeditaOWhereInput, {
    nullable: true,
  })
  none?: MeditaOWhereInput;
}
export { MeditaOListRelationFilter as MeditaOListRelationFilter };