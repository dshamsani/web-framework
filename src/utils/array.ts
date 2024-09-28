// To filter null values from the array
export const withoutNulls = (array: unknown[]): any => array.filter((item) => item != null);
