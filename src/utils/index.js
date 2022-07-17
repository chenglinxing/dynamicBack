const dyajs = require("dayjs");

export const formatDate = (day, format = "YYYY-MM-DD HH:mm:ss") => {
  return dyajs(day).format(format);
};

export const errMsgTip = (code) => {
  if (!code) return "请求错误";

  switch (code) {
    case 504:
      return "服务未启动！";
      break;
    default:
      break;
  }
};
