import { SortOrder } from "../../util/SortOrder";

export type BlogPostOrderByInput = {
  categoryId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  published?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
