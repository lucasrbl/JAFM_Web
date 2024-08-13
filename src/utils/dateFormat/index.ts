export const dateFormat = (date: string) => {
    return date.replace(/\//g, '-').split('-').reverse().join('-')
};