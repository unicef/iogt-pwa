export const formatUrl = (text:string) => text.toLowerCase().replace(/[\W]+/g, ' ').trim().replace(/\s/g, '-');
