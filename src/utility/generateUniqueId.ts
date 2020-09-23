export default function generateUniqueId(prefix: string = "") {
  return `${prefix}_${Date.now()}`;
}
