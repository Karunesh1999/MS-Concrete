import * as React from "react"
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils"

interface DatePickerProps {
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date) => void;
  className?: string;
  placeholder?: string;
  minDate?: Date;
}

const CURRENT_DATE = new Date();
const TODAY_DAY = CURRENT_DATE.getDate();
const TODAY_MONTH = CURRENT_DATE.getMonth();
const TODAY_YEAR = CURRENT_DATE.getFullYear();

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const MONTH_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const YEARS = [2024, 2025, 2026, 2027, 2028, 2029, 2030];

export function DatePicker({
  value: controlledValue,
  defaultValue,
  onChange,
  className,
  placeholder = "Pick a date",
  minDate,
}: DatePickerProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [internalDate, setInternalDate] = React.useState<Date | undefined>(
    defaultValue || (controlledValue ? undefined : new Date(2026, 10, 14))
  );
  const [isOpen, setIsOpen] = React.useState(false);
  const [mode, setMode] = React.useState<"days" | "month-year">("days");

  const selectedDate = controlledValue !== undefined ? controlledValue : internalDate;

  const [viewDate, setViewDate] = React.useState<Date>(() => {
    const initial = selectedDate || new Date(2026, 10, 1);
    return new Date(initial.getFullYear(), initial.getMonth(), 1);
  });

  const toggleOpen = () => {
    if (!isOpen && selectedDate) {
      setViewDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1));
      setMode("days");
    }
    setIsOpen((prev) => !prev);
  };

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const daysInCurrentMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    setViewDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    setViewDate(new Date(year, month + 1, 1));
  };

  const handleSelectDay = (day: number) => {
    const newDate = new Date(year, month, day);
    if (minDate && newDate < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())) {
      return;
    }
    setInternalDate(newDate);
    onChange?.(newDate);
    setIsOpen(false);
    setMode("days");
  };

  const handleSelectToday = () => {
    const now = new Date();
    setInternalDate(now);
    setViewDate(new Date(now.getFullYear(), now.getMonth(), 1));
    onChange?.(now);
    setIsOpen(false);
    setMode("days");
  };

  const isToday = (day: number) => {
    return (
      TODAY_DAY === day &&
      TODAY_MONTH === month &&
      TODAY_YEAR === year
    );
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year
    );
  };

  const isPast = (day: number) => {
    if (!minDate) return false;
    const testDate = new Date(year, month, day);
    return testDate < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
  };

  const formatDisplayDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "w-full transition-all duration-200 box-border",
        isOpen
          ? "rounded-[12px] border-2 border-[#075cae] bg-white shadow-[0_4px_16px_rgba(7,92,174,0.10)] overflow-hidden"
          : "rounded-[10px] border border-[#e4ebf3] bg-[#fbfcfe] hover:border-[#b8ddf5]",
        className
      )}
    >
      {/* Unified Trigger Bar */}
      <button
        type="button"
        onClick={toggleOpen}
        className={cn(
          "flex h-9.5 w-full items-center justify-between px-3 py-1.5 text-[11.5px] text-[#132d4d] outline-none transition-colors",
          isOpen ? "bg-[#f8fafc] border-b border-[#edf2f7]" : "bg-transparent"
        )}
      >
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-3.5 w-3.5 text-[#075cae] shrink-0" />
          <span className="font-semibold text-[#132d4d]">
            {selectedDate ? formatDisplayDate(selectedDate) : placeholder}
          </span>
        </div>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 text-[#8a9bab] transition-transform duration-200",
            isOpen && "rotate-180 text-[#075cae]"
          )}
        />
      </button>

      {/* Unified Integrated Calendar Body */}
      {isOpen && (
        <div className="p-2.5 bg-white box-border animate-in fade-in-0 duration-150">
          {mode === "days" ? (
            <>
              {/* Header: Month/Year button + Prev/Next navigation */}
              <div className="flex items-center justify-between pb-1.5 mb-1 border-b border-[#f0f4f8]">
                <button
                  type="button"
                  onClick={() => setMode("month-year")}
                  className="flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[12px] font-bold text-[#132d4d] hover:bg-[#edf5fb] hover:text-[#075cae] transition-colors"
                  title="Click to select month and year"
                >
                  <span>{MONTH_NAMES[month]} {year}</span>
                  <ChevronDown className="h-3 w-3 text-[#075cae]" />
                </button>

                <div className="flex items-center gap-0.5">
                  <button
                    type="button"
                    onClick={handlePrevMonth}
                    className="flex h-6 w-6 items-center justify-center rounded-md text-[#6f7d8d] hover:bg-[#edf4fb] hover:text-[#075cae] transition-colors"
                    aria-label="Previous month"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextMonth}
                    className="flex h-6 w-6 items-center justify-center rounded-md text-[#6f7d8d] hover:bg-[#edf4fb] hover:text-[#075cae] transition-colors"
                    aria-label="Next month"
                  >
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Days of Week Row */}
              <div className="grid grid-cols-7 mb-0.5 text-center">
                {WEEKDAYS.map((wd) => (
                  <div
                    key={wd}
                    className="py-0.5 text-[10px] font-semibold text-[#8a9bab]"
                  >
                    {wd}
                  </div>
                ))}
              </div>

              {/* Days Grid */}
              <div className="grid grid-cols-7 gap-0.5">
                {/* Previous month filler days */}
                {Array.from({ length: firstDayOfWeek }).map((_, i) => {
                  const dayNum = daysInPrevMonth - firstDayOfWeek + i + 1;
                  return (
                    <div
                      key={`prev-${i}`}
                      className="flex h-7 w-7 items-center justify-center text-[10px] text-[#ccd6e0] select-none mx-auto"
                    >
                      {dayNum}
                    </div>
                  );
                })}

                {/* Current month days */}
                {Array.from({ length: daysInCurrentMonth }).map((_, i) => {
                  const dayNum = i + 1;
                  const selected = isSelected(dayNum);
                  const today = isToday(dayNum);
                  const disabled = isPast(dayNum);

                  return (
                    <button
                      key={`current-${dayNum}`}
                      type="button"
                      disabled={disabled}
                      onClick={() => handleSelectDay(dayNum)}
                      className={cn(
                        "flex h-7 w-7 items-center justify-center rounded-md text-[11px] font-medium transition-all mx-auto",
                        selected
                          ? "bg-[#075cae] text-white font-bold shadow-[0_2px_6px_rgba(7,92,174,0.35)]"
                          : today
                          ? "border border-[#075cae] text-[#075cae] font-semibold bg-[#f0f6fc]"
                          : "text-[#132d4d] hover:bg-[#edf5fb] hover:text-[#075cae]",
                        disabled && "opacity-35 cursor-not-allowed hover:bg-transparent hover:text-[#132d4d]"
                      )}
                    >
                      {dayNum}
                    </button>
                  );
                })}
              </div>

              {/* Quick Footer */}
              <div className="mt-1.5 pt-1 border-t border-[#f0f4f8] flex items-center justify-between text-[10.5px]">
                <button
                  type="button"
                  onClick={handleSelectToday}
                  className="font-semibold text-[#075cae] hover:underline"
                >
                  Today
                </button>
                <span className="text-[#8a9bab] font-medium">
                  {selectedDate ? selectedDate.toLocaleDateString("en-US", { month: "short", day: "numeric" }) : ""}
                </span>
              </div>
            </>
          ) : (
            /* Month & Year Selection View */
            <div className="py-0.5">
              <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[#f0f4f8]">
                <span className="text-[11.5px] font-bold text-[#132d4d]">Select Month & Year</span>
                <button
                  type="button"
                  onClick={() => setMode("days")}
                  className="flex items-center gap-1 text-[10.5px] font-semibold text-[#075cae] hover:underline"
                >
                  <ChevronLeft className="h-3 w-3" /> Back
                </button>
              </div>

              {/* Year Selector Pills */}
              <div className="text-[9.5px] font-semibold text-[#8a9bab] uppercase tracking-wider mb-1 px-0.5">
                Year
              </div>
              <div className="flex items-center gap-1 overflow-x-auto pb-1.5 mb-2 scrollbar-none">
                {YEARS.map((y) => (
                  <button
                    key={y}
                    type="button"
                    onClick={() => setViewDate(new Date(y, month, 1))}
                    className={cn(
                      "px-2 py-0.5 rounded-md text-[10.5px] font-semibold transition-all shrink-0",
                      year === y
                        ? "bg-[#075cae] text-white shadow-sm font-bold"
                        : "bg-[#f4f7fa] text-[#6f7d8d] hover:bg-[#edf5fb] hover:text-[#075cae]"
                    )}
                  >
                    {y}
                  </button>
                ))}
              </div>

              {/* Month 3x4 Grid */}
              <div className="text-[9.5px] font-semibold text-[#8a9bab] uppercase tracking-wider mb-1 px-0.5">
                Month
              </div>
              <div className="grid grid-cols-3 gap-1">
                {MONTH_SHORT.map((mShort, idx) => {
                  const isCurrentMonth = idx === month;
                  return (
                    <button
                      key={mShort}
                      type="button"
                      onClick={() => {
                        setViewDate(new Date(year, idx, 1));
                        setMode("days");
                      }}
                      className={cn(
                        "py-1.5 rounded-md text-[11px] font-medium transition-all text-center",
                        isCurrentMonth
                          ? "bg-[#075cae] text-white shadow-sm font-bold"
                          : "bg-[#f8fafc] text-[#132d4d] border border-[#eef2f6] hover:bg-[#edf5fb] hover:border-[#b8ddf5] hover:text-[#075cae]"
                      )}
                    >
                      {mShort}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DatePicker;
