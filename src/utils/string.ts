export function convertStringToBoolean(input: string) {
  if (typeof input === "boolean") return input
  return input === "true"
}
