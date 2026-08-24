import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import Network from "@/Configurations/Network";
import { getAdminApiBody } from "../Utils/ApiUtils";

const network = new Network();

export type AdminBlog = {
  _id: string;
  title: string;
  description: string;
  content: string;
  imageUrl?: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type AdminBlogFormValues = {
  title: string;
  description: string;
  content: string;
  isActive: boolean;
  image: File | null;
};

export type AdminBlogPagination = {
  totalPages?: number;
  currentPage?: number;
  total?: number;
  totalItems?: number;
  limit?: number;
};

export type AdminBlogListResult = {
  blogs: AdminBlog[];
  pagination: AdminBlogPagination;
};

type BlogListData = AdminBlog[] | {
  data?: AdminBlog[];
  blogs?: AdminBlog[];
  docs?: AdminBlog[];
};

function parseBlogList(raw: unknown): AdminBlogListResult {
  const body = getAdminApiBody<BlogListData>(raw);
  const rawBody = raw && typeof raw === "object" ? raw as Record<string, unknown> : {};
  const data = body.data;

  let blogs: AdminBlog[] = [];
  if (Array.isArray(data)) {
    blogs = data;
  } else if (data && typeof data === "object") {
    blogs = data.blogs ?? data.data ?? data.docs ?? [];
  }

  const pagination = (
    rawBody.pagination ||
    (data && !Array.isArray(data) && "pagination" in data ? data.pagination : undefined) ||
    {}
  ) as AdminBlogPagination;

  return { blogs, pagination };
}

function appendBlogFormValue(
  formData: FormData,
  field: string,
  value: string | boolean,
) {
  formData.append(field, String(value));
}

function buildBlogFormData(values: AdminBlogFormValues) {
  const formData = new FormData();
  appendBlogFormValue(formData, "title", values.title.trim());
  appendBlogFormValue(formData, "description", values.description.trim());
  appendBlogFormValue(formData, "content", values.content);
  appendBlogFormValue(formData, "isActive", values.isActive);

  if (values.image) {
    formData.append("image", values.image);
  }

  return formData;
}

export async function getAdminBlogs({
  page,
  limit,
}: {
  page: number;
  limit: number;
}): Promise<AdminBlogListResult> {
  const response = await network.request({
    url: "/api/v1/blog",
    method: API_METHOD_ENUM.GET,
    params: { page, limit, all: true },
    cache: false,
  });

  return parseBlogList(response);
}

export async function createAdminBlog(values: AdminBlogFormValues) {
  const response = await network.request({
    url: "/api/v1/blog",
    method: API_METHOD_ENUM.POST,
    data: buildBlogFormData(values),
  });

  return getAdminApiBody<AdminBlog>(response);
}

export async function updateAdminBlog(
  blogId: string,
  values: AdminBlogFormValues,
) {
  const response = await network.request({
    url: `/api/v1/blog/update/${blogId}`,
    method: API_METHOD_ENUM.POST,
    data: buildBlogFormData(values),
  });

  return getAdminApiBody<AdminBlog>(response);
}
