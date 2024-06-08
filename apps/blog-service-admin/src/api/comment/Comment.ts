import { BlogPost } from "../blogPost/BlogPost";
import { User } from "../user/User";

export type Comment = {
  blogPost?: BlogPost | null;
  content: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
