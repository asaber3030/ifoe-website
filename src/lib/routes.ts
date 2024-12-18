export const routes = {
  blogs: {
    root: `/admin/blogs`,
    create: `/admin/blogs/create`,
    update: (id: number) => `/admin/blogs/${id}/update`,
    view: (id: number) => `/admin/blogs/${id}`
  },
  users: {
    root: `/admin/users`,
    create: `/admin/users/create`,
    update: (id: number) => `/admin/users/${id}/update`,
    view: (id: number) => `/admin/users/${id}`
  },
  franchises: {
    root: `/admin/franchises`,
    create: `/admin/franchises/create`,
    update: (id: number) => `/admin/franchises/${id}/update`,
    view: (id: number) => `/admin/franchises/${id}`
  },
  partners: {
    root: `/admin/partners`,
    create: `/admin/partners/create`,
    update: (id: number) => `/admin/partners/${id}/update`,
    view: (id: number) => `/admin/partners/${id}`
  }
}
