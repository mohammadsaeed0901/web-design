import moment from "moment-jalaali";

export const toPersianDigit = (digits: number | string): string => {
    const fa = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return digits.toString().replace(/[0-9]/g, function (w) {
      return fa[+w];
    });
  };

export const FaDate = (standardTime: string) => {
    try {
      moment.loadPersian({
        dialect: "persian-modern",
      });
      return toPersianDigit(moment(standardTime, "YYYY-MM-DDTHH:mm:ssZ").format("HH:mm:ss  .  jDD jMMMM jYYYY"));
    } catch {
      return "_";
    }
  };

export const priceSeparator = (number: number) => {
  const str = number.toString().split(".");
  if (str[0].length >= 4) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  }
  if (str[1] && str[1].length >= 4) {
    str[1] = str[1].replace(/(\d{3})/g, "$1 ");
  }
  return str.join(".");
};