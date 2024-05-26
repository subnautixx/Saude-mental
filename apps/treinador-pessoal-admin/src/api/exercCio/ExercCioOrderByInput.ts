import { SortOrder } from "../../util/SortOrder";

export type ExercCioOrderByInput = {
  createdAt?: SortOrder;
  duraOMinutos?: SortOrder;
  id?: SortOrder;
  nome?: SortOrder;
  planoDeTreinoId?: SortOrder;
  tipo?: SortOrder;
  updatedAt?: SortOrder;
};
