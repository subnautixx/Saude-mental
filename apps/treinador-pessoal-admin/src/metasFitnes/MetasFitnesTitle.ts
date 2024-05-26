import { MetasFitnes as TMetasFitnes } from "../api/metasFitnes/MetasFitnes";

export const METASFITNES_TITLE_FIELD = "metaDeCurtoPrazo";

export const MetasFitnesTitle = (record: TMetasFitnes): string => {
  return record.metaDeCurtoPrazo?.toString() || String(record.id);
};
