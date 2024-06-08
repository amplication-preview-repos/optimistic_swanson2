import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  blogPostId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
