export function cloneObject(obj) {
  return (typeof obj === 'object' || Array.isArray(obj)) ? JSON.parse(JSON.stringify(obj)) : obj;
}
