export const formatDate = (date: string) => {
  return date.replace(/\//g, '-').split('-').reverse().join('-');
};
