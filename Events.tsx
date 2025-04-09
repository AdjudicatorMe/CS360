import React from "react";
import { Calendar as CalendarIcon, MapPin, Clock } from "lucide-react";

const Events = () => {
  const events = [
    {
      id: "1",
      title: "Web Development Workshop",
      date: "2024-03-15",
      time: "10:00 AM - 2:00 PM",
      location: "Virtual",
      description:
        "Join us for an intensive workshop on modern web development practices.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: "2",
      title: "Data Science Symposium",
      date: "2024-03-20",
      time: "9:00 AM - 5:00 PM",
      location: "Main Campus Auditorium",
      description:
        "A full-day symposium featuring industry experts in data science and AI.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Upcoming Events</h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
          Create Event
        </button>
      </div>

      <div className="space-y-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src={event.image}
                  alt={event.title}
                />
              </div>
              <div className="p-8">
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 text-indigo-500" />
                  <time className="ml-2 text-sm text-gray-500">{event.date}</time>
                  <Clock className="ml-6 h-5 w-5 text-indigo-500" />
                  <span className="ml-2 text-sm text-gray-500">{event.time}</span>
                </div>
                <h2 className="mt-2 text-xl font-semibold text-gray-900">{event.title}</h2>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <MapPin className="h-5 w-5 text-indigo-500" />
                  <span className="ml-2">{event.location}</span>
                </div>
                <p className="mt-4 text-gray-600">{event.description}</p>
                <div className="mt-6">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
