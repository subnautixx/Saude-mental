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
import { SessODeMeditaOGuiadaWhereInput } from "./SessODeMeditaOGuiadaWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SessODeMeditaOGuiadaListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SessODeMeditaOGuiadaWhereInput,
  })
  @ValidateNested()
  @Type(() => SessODeMeditaOGuiadaWhereInput)
  @IsOptional()
  @Field(() => SessODeMeditaOGuiadaWhereInput, {
    nullable: true,
  })
  every?: SessODeMeditaOGuiadaWhereInput;

  @ApiProperty({
    required: false,
    type: () => SessODeMeditaOGuiadaWhereInput,
  })
  @ValidateNested()
  @Type(() => SessODeMeditaOGuiadaWhereInput)
  @IsOptional()
  @Field(() => SessODeMeditaOGuiadaWhereInput, {
    nullable: true,
  })
  some?: SessODeMeditaOGuiadaWhereInput;

  @ApiProperty({
    required: false,
    type: () => SessODeMeditaOGuiadaWhereInput,
  })
  @ValidateNested()
  @Type(() => SessODeMeditaOGuiadaWhereInput)
  @IsOptional()
  @Field(() => SessODeMeditaOGuiadaWhereInput, {
    nullable: true,
  })
  none?: SessODeMeditaOGuiadaWhereInput;
}
export { SessODeMeditaOGuiadaListRelationFilter as SessODeMeditaOGuiadaListRelationFilter };
