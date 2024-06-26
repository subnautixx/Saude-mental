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
import { DesempenhoDoUsuRioUpdateManyWithoutExercCiosInput } from "./DesempenhoDoUsuRioUpdateManyWithoutExercCiosInput";
import { ValidateNested, IsOptional, IsInt, IsString } from "class-validator";
import { Type } from "class-transformer";
import { PlanoDeTreinoWhereUniqueInput } from "../../planoDeTreino/base/PlanoDeTreinoWhereUniqueInput";

@InputType()
class ExercCioUpdateInput {
  @ApiProperty({
    required: false,
    type: () => DesempenhoDoUsuRioUpdateManyWithoutExercCiosInput,
  })
  @ValidateNested()
  @Type(() => DesempenhoDoUsuRioUpdateManyWithoutExercCiosInput)
  @IsOptional()
  @Field(() => DesempenhoDoUsuRioUpdateManyWithoutExercCiosInput, {
    nullable: true,
  })
  desempenhoDoUsuRios?: DesempenhoDoUsuRioUpdateManyWithoutExercCiosInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  duraOMinutos?: number | null;

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
    type: () => PlanoDeTreinoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PlanoDeTreinoWhereUniqueInput)
  @IsOptional()
  @Field(() => PlanoDeTreinoWhereUniqueInput, {
    nullable: true,
  })
  planoDeTreino?: PlanoDeTreinoWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  tipo?: string | null;
}

export { ExercCioUpdateInput as ExercCioUpdateInput };
