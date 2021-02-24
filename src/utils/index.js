export function getInitials(fullname) {
  return fullname
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();
}
