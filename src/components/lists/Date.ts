export const monthLarge: string[] = [
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
const monthSmall: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const daysLarge: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getDate = new Date();
const date: number = getDate.getDate();
const Month: number = getDate.getMonth();
const Year: number = getDate.getFullYear();
const Hour: number = getDate.getHours();
const Minutes: number = getDate.getMinutes();
const Seconds: number = getDate.getSeconds();
const Day: number = getDate.getDay();

export const ArrivingDate: string = `${date+1} ${monthSmall[Month]} ${Year}`;

export const ArrivingDateDash: string = `${daysLarge[Day]}, ${date+1} ${monthLarge[Month]}`;
