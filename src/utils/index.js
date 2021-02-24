export function getInitials(fullname) {
  if (!fullname) return null;
  return fullname
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();
}
