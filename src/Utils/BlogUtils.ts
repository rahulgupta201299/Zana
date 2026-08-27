export function stripHtml(value?: string): string {
  if (!value) return "";
  const documentValue = new DOMParser().parseFromString(value, "text/html");
  return (documentValue.body.textContent || "").replace(/\s+/g, " ").trim();
}

export function createBlogSlug(value?: string): string {
  return stripHtml(value)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getBlogRouteSlug(blog?: { _id?: string; slug?: string; title?: string }): string {
  return blog?.slug || createBlogSlug(blog?.title) || blog?._id || "";
}

export function getBlogRoutePath(blog?: { _id?: string; slug?: string; title?: string }): string {
  const slug = getBlogRouteSlug(blog);
  const id = blog?._id || "";

  if (slug && id) return `/blog/${slug}/${id}`;
  return slug ? `/blog/${slug}` : "/blogs";
}

export function isMongoObjectId(value?: string): boolean {
  return /^[a-f\d]{24}$/i.test(value || "");
}
