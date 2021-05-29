//处理时间
export const dateFormatFn = (date, format = "YYYY-MM-DD HH:mm:ss") => {
    let config = {
        YYYY: date.getFullYear(),
        MM: date.getMonth() + 1 > 10 ?
            date.getMonth() + 1 : "0" + (date.getMonth() + 1),
        DD: date.getDate(),
        HH: date.getHours() > 10 ? date.getHours() : "0" + date.getHours(),
        mm: date.getMinutes(),
        ss: date.getSeconds()
    };
    for (const key in config) {
        format = format.replace(key, config[key]);
    }
    return format;
};
export const fmtDate = (obj) => {
    var date = new Date(obj);
    var y = 1900 + date.getYear();
    var m = "0" + (date.getMonth() + 1);
    var d = "0" + date.getDate();
    return y + "-" + m.substring(m.length - 2, m.length) + "-" + d.substring(d.length - 2, d.length);
}