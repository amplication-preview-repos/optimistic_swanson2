import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentCreateNestedManyWithoutBlogPostsInput } from "./CommentCreateNestedManyWithoutBlogPostsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BlogPostCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutBlogPostsInput;
  content?: string | null;
  published?: boolean | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
