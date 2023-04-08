export const deleteProduct = (list, id) => {
  const filter = list.filter((item) => item.id !== id);
  return filter;
};

export const findProductIndexById = (list, id) => {
  const index = list.findIndex((item) => item.id === id);
  return index;
};

export const findProductIndex = (list, slug) => {
  const index = list.findIndex((item) => item.slug === slug);
  return index;
};
