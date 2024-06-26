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
  IsInt,
  IsOptional,
  IsString,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumSessODeMeditaOGuiadaTipo } from "./EnumSessODeMeditaOGuiadaTipo";
import { UsuRio } from "../../usuRio/base/UsuRio";

@ObjectType()
class SessODeMeditaOGuiada {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  duraO!: number | null;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  objetivo!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumSessODeMeditaOGuiadaTipo,
  })
  @IsEnum(EnumSessODeMeditaOGuiadaTipo)
  @IsOptional()
  @Field(() => EnumSessODeMeditaOGuiadaTipo, {
    nullable: true,
  })
  tipo?: "Option1" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => UsuRio,
  })
  @ValidateNested()
  @Type(() => UsuRio)
  @IsOptional()
  usuRio?: UsuRio | null;
}

export { SessODeMeditaOGuiada as SessODeMeditaOGuiada };
