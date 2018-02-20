// @flow
export function humanNumber(num: number) {
  const parts = num.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return parts.join(".");
}

export const dollar = (num: number) => `$${num.toFixed(2)}`;

export const price = (num: number) => (num === 0 ? "Free!" : dollar(num));

export const yesNo = (bool: boolean) => (bool ? "Yes" : "No");

export function padNumber(num: number) {
  return `${num >= 0 && num <= 9 ? "0" : ""}${num}`;
}

export function monthName(monthNumber: number = new Date().getMonth()) {
  const names = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return names[monthNumber];
}
