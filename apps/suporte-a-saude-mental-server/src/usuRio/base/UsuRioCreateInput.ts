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
import { AvaliaOPessoalCreateNestedManyWithoutUsuRiosInput } from "./AvaliaOPessoalCreateNestedManyWithoutUsuRiosInput";
import { ValidateNested, IsOptional, IsString, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MeditaOCreateNestedManyWithoutUsuRiosInput } from "./MeditaOCreateNestedManyWithoutUsuRiosInput";
import { RecomendaOCreateNestedManyWithoutUsuRiosInput } from "./RecomendaOCreateNestedManyWithoutUsuRiosInput";
import { RecursoAdicionalCreateNestedManyWithoutUsuRiosInput } from "./RecursoAdicionalCreateNestedManyWithoutUsuRiosInput";
import { SessODeMeditaOGuiadaCreateNestedManyWithoutUsuRiosInput } from "./SessODeMeditaOGuiadaCreateNestedManyWithoutUsuRiosInput";
import { SessODeTerapiaCreateNestedManyWithoutUsuRiosInput } from "./SessODeTerapiaCreateNestedManyWithoutUsuRiosInput";

@InputType()
class UsuRioCreateInput {
  @ApiProperty({
    required: false,
    type: () => AvaliaOPessoalCreateNestedManyWithoutUsuRiosInput,
  })
  @ValidateNested()
  @Type(() => AvaliaOPessoalCreateNestedManyWithoutUsuRiosInput)
  @IsOptional()
  @Field(() => AvaliaOPessoalCreateNestedManyWithoutUsuRiosInput, {
    nullable: true,
  })
  avaliaOPessoals?: AvaliaOPessoalCreateNestedManyWithoutUsuRiosInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  idade?: number | null;

  @ApiProperty({
    required: false,
    type: () => MeditaOCreateNestedManyWithoutUsuRiosInput,
  })
  @ValidateNested()
  @Type(() => MeditaOCreateNestedManyWithoutUsuRiosInput)
  @IsOptional()
  @Field(() => MeditaOCreateNestedManyWithoutUsuRiosInput, {
    nullable: true,
  })
  meditaOs?: MeditaOCreateNestedManyWithoutUsuRiosInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  nome?: string | null;

  @ApiProperty({
    required: false,
    type: () => RecomendaOCreateNestedManyWithoutUsuRiosInput,
  })
  @ValidateNested()
  @Type(() => RecomendaOCreateNestedManyWithoutUsuRiosInput)
  @IsOptional()
  @Field(() => RecomendaOCreateNestedManyWithoutUsuRiosInput, {
    nullable: true,
  })
  recomendaOs?: RecomendaOCreateNestedManyWithoutUsuRiosInput;

  @ApiProperty({
    required: false,
    type: () => RecursoAdicionalCreateNestedManyWithoutUsuRiosInput,
  })
  @ValidateNested()
  @Type(() => RecursoAdicionalCreateNestedManyWithoutUsuRiosInput)
  @IsOptional()
  @Field(() => RecursoAdicionalCreateNestedManyWithoutUsuRiosInput, {
    nullable: true,
  })
  recursoAdicionals?: RecursoAdicionalCreateNestedManyWithoutUsuRiosInput;

  @ApiProperty({
    required: false,
    type: () => SessODeMeditaOGuiadaCreateNestedManyWithoutUsuRiosInput,
  })
  @ValidateNested()
  @Type(() => SessODeMeditaOGuiadaCreateNestedManyWithoutUsuRiosInput)
  @IsOptional()
  @Field(() => SessODeMeditaOGuiadaCreateNestedManyWithoutUsuRiosInput, {
    nullable: true,
  })
  sessODeMeditaOGuiadas?: SessODeMeditaOGuiadaCreateNestedManyWithoutUsuRiosInput;

  @ApiProperty({
    required: false,
    type: () => SessODeTerapiaCreateNestedManyWithoutUsuRiosInput,
  })
  @ValidateNested()
  @Type(() => SessODeTerapiaCreateNestedManyWithoutUsuRiosInput)
  @IsOptional()
  @Field(() => SessODeTerapiaCreateNestedManyWithoutUsuRiosInput, {
    nullable: true,
  })
  sessODeTerapias?: SessODeTerapiaCreateNestedManyWithoutUsuRiosInput;
}

export { UsuRioCreateInput as UsuRioCreateInput };