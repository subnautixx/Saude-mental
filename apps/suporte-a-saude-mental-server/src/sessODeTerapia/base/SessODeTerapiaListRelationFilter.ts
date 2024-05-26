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
import { SessODeTerapiaWhereInput } from "./SessODeTerapiaWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SessODeTerapiaListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SessODeTerapiaWhereInput,
  })
  @ValidateNested()
  @Type(() => SessODeTerapiaWhereInput)
  @IsOptional()
  @Field(() => SessODeTerapiaWhereInput, {
    nullable: true,
  })
  every?: SessODeTerapiaWhereInput;

  @ApiProperty({
    required: false,
    type: () => SessODeTerapiaWhereInput,
  })
  @ValidateNested()
  @Type(() => SessODeTerapiaWhereInput)
  @IsOptional()
  @Field(() => SessODeTerapiaWhereInput, {
    nullable: true,
  })
  some?: SessODeTerapiaWhereInput;

  @ApiProperty({
    required: false,
    type: () => SessODeTerapiaWhereInput,
  })
  @ValidateNested()
  @Type(() => SessODeTerapiaWhereInput)
  @IsOptional()
  @Field(() => SessODeTerapiaWhereInput, {
    nullable: true,
  })
  none?: SessODeTerapiaWhereInput;
}
export { SessODeTerapiaListRelationFilter as SessODeTerapiaListRelationFilter };