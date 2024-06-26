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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { UsuRioWhereUniqueInput } from "../../usuRio/base/UsuRioWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class RealizaEsERecompensasCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  realizaO?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  recompensa?: string | null;

  @ApiProperty({
    required: false,
    type: () => UsuRioWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UsuRioWhereUniqueInput)
  @IsOptional()
  @Field(() => UsuRioWhereUniqueInput, {
    nullable: true,
  })
  usuRio?: UsuRioWhereUniqueInput | null;
}

export { RealizaEsERecompensasCreateInput as RealizaEsERecompensasCreateInput };
