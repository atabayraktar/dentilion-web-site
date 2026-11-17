import { site } from "@/content/site";

const toMin = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/** Weekday (0 = Sunday) and minutes since midnight in the clinic's time zone. */
function clinicNow(date: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: site.timezone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return { day: WEEKDAYS.indexOf(get("weekday")), min: Number(get("hour")) * 60 + Number(get("minute")) };
}

const slotsOn = (day: number) => site.hours.filter((h) => (h.days as readonly number[]).includes(day));

export function isOpen(date: Date): boolean {
  const { day, min } = clinicNow(date);
  return slotsOn(day).some((h) => min >= toMin(h.open) && min < toMin(h.close));
}

/** Next opening: offset 0 = later today, 1 = tomorrow, ... */
export function nextOpening(date: Date): { offset: number; day: number; time: string } {
  const { day, min } = clinicNow(date);
  for (let offset = 0; offset <= 7; offset++) {
    const d = (day + offset) % 7;
    const slot = slotsOn(d).find((h) => offset > 0 || toMin(h.open) > min);
    if (slot) return { offset, day: d, time: slot.open };
  }
  return { offset: 0, day, time: site.hours[0].open };
}
