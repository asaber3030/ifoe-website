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
  equipmentCost: {
    root: `/admin/training-period`,
    create: `/admin/equipment-cost/create`,
    update: (id: number) => `/admin/equipment-cost/${id}/update`,
    view: (id: number) => `/admin/equipment-cost/${id}`
  },
  trainingPeriod: {
    root: `/admin/training-period`,
    create: `/admin/training-period/create`,
    update: (id: number) => `/admin/training-period/${id}/update`,
    view: (id: number) => `/admin/training-period/${id}`
  },
  spaceRequired: {
    root: `/admin/space-required`,
    create: `/admin/space-required/create`,
    update: (id: number) => `/admin/space-required/${id}/update`,
    view: (id: number) => `/admin/space-required/${id}`
  },
  contractPeriod: {
    root: `/admin/contract-period`,
    create: `/admin/contract-period/create`,
    update: (id: number) => `/admin/contract-period/${id}/update`,
    view: (id: number) => `/admin/contract-period/${id}`
  },
  franchiseCharacteristics: {
    root: `/admin/franchise-characteristics`,
    create: `/admin/franchise-characteristics/create`,
    update: (id: number) => `/admin/franchise-characteristics/${id}/update`,
    view: (id: number) => `/admin/franchise-characteristics/${id}`
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
