export const adminRoutes = {
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
  countries: {
    root: `/admin/countries`,
    create: `/admin/countries/create`,
    update: (id: number) => `/admin/countries/${id}/update`,
    view: (id: number) => `/admin/countries/${id}`
  },
  categories: {
    root: `/admin/categories`,
    create: `/admin/categories/create`,
    update: (id: number) => `/admin/categories/${id}/update`,
    view: (id: number) => `/admin/categories/${id}`
  },
  partners: {
    root: `/admin/partners`,
    create: `/admin/partners/create`,
    update: (id: number) => `/admin/partners/${id}/update`,
    view: (id: number) => `/admin/partners/${id}`
  }
}

export const routes = {
  blogs: {
    root: `/blogs`,
    view: (id: number) => `/blogs/${id}`
  },
  franchises: {
    root: `/franchises`,
    view: (id: number) => `/franchises/${id}`
  },
  partners: {
    root: `/partners`,
    view: (id: number) => `/partners/${id}`
  }
}
