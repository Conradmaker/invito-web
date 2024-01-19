import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import ko from "dayjs/locale/ko";
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.locale(ko);

const appDayjs = dayjs;

export default appDayjs;
