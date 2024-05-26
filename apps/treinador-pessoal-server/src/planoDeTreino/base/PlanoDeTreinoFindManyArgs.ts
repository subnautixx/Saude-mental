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
import { PlanoDeTreinoWhereInput } from "./PlanoDeTreinoWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PlanoDeTreinoOrderByInput } from "./PlanoDeTreinoOrderByInput";

@ArgsType()
class PlanoDeTreinoFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PlanoDeTreinoWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PlanoDeTreinoWhereInput, { nullable: true })
  @Type(() => PlanoDeTreinoWhereInput)
  where?: PlanoDeTreinoWhereInput;

  @ApiProperty({
    required: false,
    type: [PlanoDeTreinoOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PlanoDeTreinoOrderByInput], { nullable: true })
  @Type(() => PlanoDeTreinoOrderByInput)
  orderBy?: Array<PlanoDeTreinoOrderByInput>;

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

export { PlanoDeTreinoFindManyArgs as PlanoDeTreinoFindManyArgs };