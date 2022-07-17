const dyajs = require("dayjs")

export const formatDate = (day,format="YYYY-MM-DD HH:mm:ss") => {
    return dyajs(day).format(format)
}