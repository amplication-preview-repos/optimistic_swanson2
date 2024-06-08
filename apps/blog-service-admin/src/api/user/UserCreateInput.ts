import { BlogPostCreateNestedManyWithoutUsersInput } from "./BlogPostCreateNestedManyWithoutUsersInput";
import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  blogPosts?: BlogPostCreateNestedManyWithoutUsersInput;
  comments?: CommentCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
