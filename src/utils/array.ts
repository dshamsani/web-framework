// To filter null values from the array
export const withoutNulls = (array: unknown[]) => array.filter((item) => item != null);
