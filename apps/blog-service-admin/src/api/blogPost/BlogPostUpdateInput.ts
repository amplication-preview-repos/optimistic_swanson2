import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentUpdateManyWithoutBlogPostsInput } from "./CommentUpdateManyWithoutBlogPostsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BlogPostUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutBlogPostsInput;
  content?: string | null;
  published?: boolean | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
