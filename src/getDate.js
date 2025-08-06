export default function getFormattedDate() {
  const today = new Date();
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return today.toLocaleDateString("en-US", options);
}
