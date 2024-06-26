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
import { AvaliaOPessoalListRelationFilter } from "../../avaliaOPessoal/base/AvaliaOPessoalListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { MeditaOListRelationFilter } from "../../meditaO/base/MeditaOListRelationFilter";
import { RecomendaOListRelationFilter } from "../../recomendaO/base/RecomendaOListRelationFilter";
import { RecursoAdicionalListRelationFilter } from "../../recursoAdicional/base/RecursoAdicionalListRelationFilter";
import { SessODeMeditaOGuiadaListRelationFilter } from "../../sessODeMeditaOGuiada/base/SessODeMeditaOGuiadaListRelationFilter";
import { SessODeTerapiaListRelationFilter } from "../../sessODeTerapia/base/SessODeTerapiaListRelationFilter";

@InputType()
class UsuRioWhereInput {
  @ApiProperty({
    required: false,
    type: () => AvaliaOPessoalListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AvaliaOPessoalListRelationFilter)
  @IsOptional()
  @Field(() => AvaliaOPessoalListRelationFilter, {
    nullable: true,
  })
  avaliaOPessoals?: AvaliaOPessoalListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  idade?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => MeditaOListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MeditaOListRelationFilter)
  @IsOptional()
  @Field(() => MeditaOListRelationFilter, {
    nullable: true,
  })
  meditaOs?: MeditaOListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  nome?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => RecomendaOListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RecomendaOListRelationFilter)
  @IsOptional()
  @Field(() => RecomendaOListRelationFilter, {
    nullable: true,
  })
  recomendaOs?: RecomendaOListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => RecursoAdicionalListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RecursoAdicionalListRelationFilter)
  @IsOptional()
  @Field(() => RecursoAdicionalListRelationFilter, {
    nullable: true,
  })
  recursoAdicionals?: RecursoAdicionalListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SessODeMeditaOGuiadaListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SessODeMeditaOGuiadaListRelationFilter)
  @IsOptional()
  @Field(() => SessODeMeditaOGuiadaListRelationFilter, {
    nullable: true,
  })
  sessODeMeditaOGuiadas?: SessODeMeditaOGuiadaListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SessODeTerapiaListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SessODeTerapiaListRelationFilter)
  @IsOptional()
  @Field(() => SessODeTerapiaListRelationFilter, {
    nullable: true,
  })
  sessODeTerapias?: SessODeTerapiaListRelationFilter;
}

export { UsuRioWhereInput as UsuRioWhereInput };
