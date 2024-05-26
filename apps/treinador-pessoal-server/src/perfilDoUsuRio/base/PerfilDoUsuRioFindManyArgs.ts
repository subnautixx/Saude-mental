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
import { PerfilDoUsuRioWhereInput } from "./PerfilDoUsuRioWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PerfilDoUsuRioOrderByInput } from "./PerfilDoUsuRioOrderByInput";

@ArgsType()
class PerfilDoUsuRioFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PerfilDoUsuRioWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PerfilDoUsuRioWhereInput, { nullable: true })
  @Type(() => PerfilDoUsuRioWhereInput)
  where?: PerfilDoUsuRioWhereInput;

  @ApiProperty({
    required: false,
    type: [PerfilDoUsuRioOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PerfilDoUsuRioOrderByInput], { nullable: true })
  @Type(() => PerfilDoUsuRioOrderByInput)
  orderBy?: Array<PerfilDoUsuRioOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PerfilDoUsuRioFindManyArgs as PerfilDoUsuRioFindManyArgs };