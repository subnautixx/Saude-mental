/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  ValidateNested,
  IsOptional,
  IsInt,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { DesempenhoDoUsuRio } from "../../desempenhoDoUsuRio/base/DesempenhoDoUsuRio";
import { PlanoDeTreino } from "../../planoDeTreino/base/PlanoDeTreino";

@ObjectType()
class ExercCio {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [DesempenhoDoUsuRio],
  })
  @ValidateNested()
  @Type(() => DesempenhoDoUsuRio)
  @IsOptional()
  desempenhoDoUsuRios?: Array<DesempenhoDoUsuRio>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  duraOMinutos!: number | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  nome!: string | null;

  @ApiProperty({
    required: false,
    type: () => PlanoDeTreino,
  })
  @ValidateNested()
  @Type(() => PlanoDeTreino)
  @IsOptional()
  planoDeTreino?: PlanoDeTreino | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  tipo!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { ExercCio as ExercCio };
