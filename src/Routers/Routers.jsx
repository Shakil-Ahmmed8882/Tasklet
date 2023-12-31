import { createBrowserRouter } from "react-router-dom";
import App from "../Layout/App";
import Home from "../pages/Home";

import Tasks from "../Components/Dashboard/Tasks/Tasks";
import Notes from "../Components/Dashboard/Notes/Notes";
import Archive from "../Components/Dashboard/Archive/Archive";
import Calendar from "../Components/Dashboard/Calendar/Calender";
import Categories from "../Components/Dashboard/Categories/Categories";
import Statistics from "../Components/Dashboard/Statistics/Statistics";
import Template from "../Components/Dashboard/Template/Template";
import Remainder from "../Components/Remainder/Remainder";
import Notification from "../Components/Dashboard/Notification/Notification";
import Setting from "../Components/Dashboard/Setting/Setting";
import ProgressTracker from "../Components/Progress/ProgressTracker";
import DeadlineTracker from "../Components/Dashboard/Deadline/DeadlineTracker";
import Collaboration from "../Components/Dashboard/Collaboration/Collaboration";
import QuickStart from "../Components/Dashboard/QuickStart/QuickStart";
import InitialLandingPage from "../Layout/LandingPage/InitialLandingPage";
import Banner from "../pages/Banner";
import Login from "../Components/Ui/Form/Login";
import SignUp from "../Components/Ui/Form/Signup";
import MyDashboard from "../Components/Dashboard/UserTasks/MyDashboard";
import OngoingTasks from "../Components/Dashboard/UserTasks/OngoingTasks";
import CompletedTasks from "../Components/Dashboard/UserTasks/CompletedTasks";
import Guard from "../Components/Private/Guard";
import Page404 from "../Components/Ui/PageNotFount/Page404";
import CreateToDo from "../Components/Dashboard/UserTasks/CreateToDo";
import ToDoList from "../Components/Dashboard/UserTasks/ToDoList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <InitialLandingPage />,
    children: [{ index: true, element: <Banner /> }],
  },
  {
    path: "/dashboard",
    element: (
      <Guard>
        <App />
      </Guard>
    ),
    children: [
      {
        index: true,
        element: <MyDashboard />,
      },
      // Users routes
      {
        path: "create_to_do",
        element: <CreateToDo />,
      },
      {
        path: "to-do-list",
        element: <ToDoList />,
      },
      {
        path: "ongoing_tasks",
        element: <OngoingTasks />,
      },
      {
        path: "completed_tasks",
        element: <CompletedTasks />,
      },
      {
        path: "quick_start",
        element: <QuickStart />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "notes",
        element: <Notes />,
      },
      {
        path: "archive",
        element: <Archive />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "template",
        element: <Template />,
      },
      {
        path: "remainders",
        element: <Remainder />,
      },
      {
        path: "collaboration",
        element: <Collaboration />,
      },
      {
        path: "deadline_tracker",
        element: <DeadlineTracker />,
      },
      {
        path: "progress_tracker",
        element: <ProgressTracker />,
      },
      {
        path: "notifications",
        element: <Notification />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);
