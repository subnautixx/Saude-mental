import { MeditaOWhereInput } from "./MeditaOWhereInput";
import { MeditaOOrderByInput } from "./MeditaOOrderByInput";

export type MeditaOFindManyArgs = {
  where?: MeditaOWhereInput;
  orderBy?: Array<MeditaOOrderByInput>;
  skip?: number;
  take?: number;
};
