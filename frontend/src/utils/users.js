export function getInitials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function formatPostCount(count) {
  return count === 1 ? "1 post" : `${count} posts`;
}