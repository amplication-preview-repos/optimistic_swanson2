import { Category } from "../category/Category";
import { Comment } from "../comment/Comment";
import { User } from "../user/User";

export type BlogPost = {
  category?: Category | null;
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  published: boolean | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
