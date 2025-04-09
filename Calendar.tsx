import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isToday, isSameMonth } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const events = [
    {
      date: '2024-03-15',
      title: 'Web Development Workshop',
      type: 'workshop',
    },
    {
      date: '2024-03-20',
      title: 'Data Science Symposium',
      type: 'event',
    },
  ];

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
        <div className="md:pr-14">
          <div className="flex items-center">
            <h2 className="flex-auto text-gray-900 font-semibold">
              {format(currentDate, 'MMMM yyyy')}
            </h2>
            <button
              type="button"
              onClick={previousMonth}
              className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextMonth}
              className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Next month</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div className="mt-2 grid grid-cols-7 text-sm">
            {days.map((day, dayIdx) => (
              <div
                key={day.toString()}
                className={`py-2 ${
                  dayIdx === 0 ? `col-start-${day.getDay() + 1}` : ''
                }`}
              >
                <button
                  type="button"
                  className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full ${
                    isToday(day)
                      ? 'text-white bg-indigo-600'
                      : isSameMonth(day, currentDate)
                      ? 'text-gray-900'
                      : 'text-gray-400'
                  } hover:bg-gray-200`}
                >
                  <time dateTime={format(day, 'yyyy-MM-dd')}>
                    {format(day, 'd')}
                  </time>
                </button>
              </div>
            ))}
          </div>
        </div>
        <section className="mt-12 md:mt-0 md:pl-14">
          <h2 className="font-semibold text-gray-900">
            Upcoming Events
          </h2>
          <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
            {events.map((event, index) => (
              <li
                key={index}
                className="group flex items-center space-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100"
              >
                <div className="flex-auto">
                  <p className="text-gray-900">{event.title}</p>
                  <p className="mt-0.5">
                    <time dateTime={event.date}>{event.date}</time>
                  </p>
                </div>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    event.type === 'workshop'
                      ? 'bg-indigo-100 text-indigo-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {event.type}
                </span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
};

export default Calendar;