export const blogUrls = {
  list: (queryString?: string) => `/blogs/blogs/?${queryString}`,
  details: (blogId: string) => `/blogs/blogs/${blogId}`,
}
