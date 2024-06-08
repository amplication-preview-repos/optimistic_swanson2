import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  blogPost?: BlogPostWhereUniqueInput | null;
  content?: string | null;
  user?: UserWhereUniqueInput | null;
};
