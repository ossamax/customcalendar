import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showYears, setShowYears] = useState(false);
  const [showMonths, setShowMonths] = useState(false);

  const handleDateChange = (event: any) => {
    const { name, value } = event.target;
    console.log(value);
    const newDate = new Date(selectedDate);
    switch (name) {
      case "month":
        newDate.setMonth(value);
        break;
      case "day":
        newDate.setDate(value);
        break;
      case "year":
        newDate.setFullYear(value);
        break;
      default:
        break;
    }

    setSelectedDate(newDate);
  };
  const handleBlur: any = (event: any) => {
    const { name, value } = event.target;
    const newDate = new Date(selectedDate);

    switch (name) {
      case "day":
        newDate.setDate(value);
        break;
      case "year":
        newDate.setFullYear(value);
        break;
      default:
        break;
    }

    setSelectedDate(newDate);
  };
  const daysInMonth = (month: any, year: any) => {
    return new Date(year, month + 1, 0).getDate();
  };
  const getMonthDays = (year: any, month: any) => {
    const days = [];
    for (let i = 1; i <= daysInMonth(month, year); i++) {
      const date = new Date(year, month, i);
      days.push(date);
    }
    return days;
  };
  const monthDays = getMonthDays(
    selectedDate.getFullYear(),
    selectedDate.getMonth()
  );
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const Months = [
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
  const currentYear = new Date().getFullYear();

  const yearOptions = [];
  for (let year = currentYear; year <= currentYear + 2; year++) {
    yearOptions.push(
      <div
        className={
          selectedDate.getFullYear() == year ? styles.current : undefined
        }
        onClick={() => {
          handleDateChange({
            target: {
              name: "year",
              value: `${year}`,
            },
          });
          setShowYears(false);
        }}
      >
        {year}
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Custom date Picker in Next js</title>
        <meta name="description" content="Custom date Picker in Next js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={styles.main}
        onClick={() => {
          if (showMonths) {
            setShowMonths(false);
          }
          if (showYears) {
            setShowYears(false);
          }
        }}
      >
        <form className={styles.form}>
          <div className={styles.calendarpicker}>
            <div className={styles.months}>
              <div
                className={styles.selected_month}
                onClick={() => {
                  setShowMonths(!showMonths);
                }}
              >
                {Months[selectedDate.getMonth()]}{" "}
                {!showMonths ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z"
                    />
                  </svg>
                )}
              </div>
              {showMonths && (
                <div className={styles.months_list}>
                  {Months.map((month, key) => (
                    <div
                      key={key}
                      className={
                        selectedDate.getMonth() == Months.indexOf(month)
                          ? styles.current
                          : undefined
                      }
                      onClick={() => {
                        handleDateChange({
                          target: {
                            name: "month",
                            value: `${key}`,
                          },
                        });
                        setShowMonths(false);
                      }}
                    >
                      {month}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className={styles.years}>
              <div
                className={styles.selected_year}
                onClick={() => {
                  setShowYears(!showYears);
                }}
              >
                {selectedDate.getFullYear()}{" "}
                {!showYears ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z"
                    />
                  </svg>
                )}
              </div>
              {showYears && (
                <div className={styles.years_list}>{yearOptions}</div>
              )}
            </div>
            {/* <select
              name="month"
              value={selectedDate.getMonth()}
              onChange={handleDateChange}
            >
              <option value="0">January</option>
              <option value="1">February</option>
              <option value="2">March</option>
              <option value="3">April</option>
              <option value="4">May</option>
              <option value="5">June</option>
              <option value="6">July</option>
              <option value="7">August</option>
              <option value="8">September</option>
              <option value="9">October</option>
              <option value="10">November</option>
              <option value="11">December</option>
            </select> */}
          </div>
          <div className={styles.months_days}>
            <div className={styles.days}>
              {daysOfWeek.map((day) => (
                <div
                  key={day}
                  className={
                    selectedDate.getDay() == daysOfWeek.indexOf(day)
                      ? styles.current_day
                      : undefined
                  }
                >
                  {day}
                </div>
              ))}
            </div>
            <div className={styles.grid}>
              {monthDays.map((date) => (
                <input
                  key={date.toISOString()}
                  className={
                    selectedDate.getDate() == date.getDate()
                      ? styles.selected
                      : styles.day
                  }
                  type="number"
                  name="day"
                  readOnly
                  value={date.getDate()}
                  onClick={handleDateChange}
                  onBlur={handleBlur}
                  min="1"
                  max={daysInMonth(
                    selectedDate.getMonth(),
                    selectedDate.getFullYear()
                  )}
                />
              ))}
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
