/**
 * accessing local storage
 */
// eslint-disable-next-line import/prefer-default-export
export const storageEngine = {
  set: (key: any, data: any) => {
    if (typeof data === 'object') {
      return localStorage.setItem(key, JSON.stringify(data));
    }
    return localStorage.setItem(key, data);
  },
  get: (key: any) => JSON.parse(localStorage.getItem(key)!),
  unset: (key: any) => localStorage.removeItem(key),
};

/* eslint-disable import/prefer-default-export */
export const randomBGColor = () => {
  const bgColor = ['bg-red-300', 'bg-orange-300', 'bg-yellow-300', 'bg-green-300', 'bg-teal-300', 'bg-blue-300', 'bg-indigo-300', 'bg-purple-300', 'bg-pink-300'];
  const randomIndex = Math.floor(Math.random() * bgColor.length);
  const item = bgColor[randomIndex];
  return item;
};

// Converts a iso string to mm-dd-yyyy format
export const isoToDate = (isoString: string) => {
  const date = new Date(isoString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  // eslint-disable-next-line prefer-template
  return day + '-' + month + '-' + year;
};

// Get name initial from full name
export const getInitial = (name: string) => name?.split(' ').map((n) => n[0]);

// Returns a flat array from a tree
export const treetoList = (tree: any) => flatten(
  extractChildren(tree), extractChildren,
).map(
  // eslint-disable-next-line no-param-reassign
  (x: any) => delete x.children && x,
);

const flatten = (children: any, extractChildren: any) => Array.prototype.concat.apply(
  children,
  children.map((x: any) => flatten(extractChildren(x) || [], extractChildren)),
);

const extractChildren = (x: any) => x.children;
