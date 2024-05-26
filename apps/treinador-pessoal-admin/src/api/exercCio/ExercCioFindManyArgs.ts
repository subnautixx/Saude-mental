import { ExercCioWhereInput } from "./ExercCioWhereInput";
import { ExercCioOrderByInput } from "./ExercCioOrderByInput";

export type ExercCioFindManyArgs = {
  where?: ExercCioWhereInput;
  orderBy?: Array<ExercCioOrderByInput>;
  skip?: number;
  take?: number;
};
