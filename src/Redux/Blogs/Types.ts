export type T_BLOG_REDUCER = {
  blogList: blogDataType[];
  blogDetail: blogDataType
};
export type blogDataType = {
  _id: string;
  slug?: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  createdAt: string;
  __v: number;
};
