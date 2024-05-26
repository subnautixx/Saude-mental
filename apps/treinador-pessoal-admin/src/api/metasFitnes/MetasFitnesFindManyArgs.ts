import { MetasFitnesWhereInput } from "./MetasFitnesWhereInput";
import { MetasFitnesOrderByInput } from "./MetasFitnesOrderByInput";

export type MetasFitnesFindManyArgs = {
  where?: MetasFitnesWhereInput;
  orderBy?: Array<MetasFitnesOrderByInput>;
  skip?: number;
  take?: number;
};
