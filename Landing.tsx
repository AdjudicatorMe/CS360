import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Users, Award } from 'lucide-react';

const Landing = () => {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
          <div className="relative h-full">
            <svg
              className="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="784" fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)" />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="784" fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)" />
            </svg>
          </div>
        </div>

        <div className="relative pt-6 pb-16 sm:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link to="/" className="flex items-center">
                    <BookOpen className="h-8 w-8 text-indigo-600" />
                    <span className="ml-2 text-xl font-bold text-gray-900">SeetSpace</span>
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex md:space-x-10">
                <Link to="/courses" className="font-medium text-gray-500 hover:text-gray-900">
                  Courses
                </Link>
                <Link to="/events" className="font-medium text-gray-500 hover:text-gray-900">
                  Events
                </Link>
                <Link to="/calendar" className="font-medium text-gray-500 hover:text-gray-900">
                  Calendar
                </Link>
              </div>
              <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                <span className="inline-flex rounded-md shadow">
                  <Link
                    to="/login"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </span>
                <span className="ml-4 inline-flex rounded-md shadow">
                  <Link
                    to="/signup"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign up
                  </Link>
                </span>
              </div>
            </nav>
          </div>

          <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Transform your learning</span>
                <span className="block text-indigo-600">with SeetSpace</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Access world-class courses, connect with peers, and track your progress - all in one place.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <Link
                    to="/signup"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </Link>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <Link
                    to="/courses"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    View courses
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex flex-col">
            <div className="flex-1"></div>
            <div className="flex-1 w-full bg-gray-800"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <img
              className="relative rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="Students collaborating"
            />
          </div>
        </div>
      </div>

      <div className="relative bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-base font-semibold uppercase tracking-wider text-indigo-600">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Features that empower your learning
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Feature
                icon={BookOpen}
                title="Comprehensive Courses"
                description="Access a wide range of courses designed to help you succeed in your learning journey."
              />
              <Feature
                icon={Calendar}
                title="Smart Calendar"
                description="Stay organized with our integrated calendar system for managing your schedule."
              />
              <Feature
                icon={Users}
                title="Collaborative Learning"
                description="Connect with peers and instructors through our interactive learning platform."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Feature: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
}> = ({ icon: Icon, title, description }) => (
  <div className="pt-6">
    <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
      <div className="-mt-6">
        <div>
          <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
            <Icon className="h-6 w-6 text-white" aria-hidden="true" />
          </span>
        </div>
        <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{title}</h3>
        <p className="mt-5 text-base text-gray-500">{description}</p>
      </div>
    </div>
  </div>
);

export default Landing;