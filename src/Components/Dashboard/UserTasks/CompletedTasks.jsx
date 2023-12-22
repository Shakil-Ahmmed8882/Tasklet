import { BiCalendarCheck, BiCheck, BiSolidCheckCircle } from "react-icons/bi";
import { UseAuth } from "../../../Hooks/UseAuth";
import { useGetData } from "../../../Hooks/useGetData";
import TitleDescription from "../../../Shared/TitleDescription";
// import Progress from "./Progress";
import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import TaskModal from "../../Ui/Modal/Modal";
import SkeletonListLoader from "../../Ui/Skeleton/SkeletonListLoader";
import { useContext, useState } from "react";
import { TaskContext } from "../../../Providers/TaskProvider";

const CompletedTasks = () => {
  const {user} = UseAuth()
  
  const {data:tasks,isLoading,refetch} = useGetData(`/tasks?email=${user?.email}&state=completed`,user?.email)

  
  console.log(tasks)

  const { handleDeleteTask } = useContext(TaskContext);

  // Editing modal handling here..
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskId, setTaskId] = useState("");

  const handleModalOpen = (_id) => {
    refetch();
    // Function to set the modal as open
    setIsModalOpen(true); 
    setTaskId(_id);
  };
  
  if(isLoading) return "loading"
  console.log(tasks)
  return (
    <div>
      <TitleDescription title={"Completed tasks"} />
      <ul className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* maping the newly added task */}

          {tasks?.length > 0 ? (
            tasks?.map((task, index) => (
              <li
                key={index}
                className={` relative  bg-[white] shadow-lg  rounded-lg p-5`}>
                <div>
                  <div className="flex items-center gap-1">
                    <h2 className="text-[20px] mb-1 font-semibold">
                      {task.title} 
                    </h2>
                    <span className="text-[20px] font-bold">
                      {task.priority === "High" ? (
                        <BiSolidCheckCircle className={`text-greenAccent`} />
                      ) : task.priority === "Moderate" ? (
                        <BiCalendarCheck className="text-[orange]" />
                      ) : (
                        <BiCheck className="text-[red]" />
                      )}
                    </span>
                  </div>
                  <span className="bg-[#E4F4FD] p-1 text-[13px] text-accentColor rounded-lg">
                    {task.deadline}
                  </span>
                  {/* task status todo, ongoing,completed */}
                </div>
                <p className="text-[#767575] mt-2 ">{task.description} </p>
                <div className="flex gap-1 pt-4">
                  {/* <Progress state={task.progress} id={task?._id} /> */}
                </div>
                <div className="flex gap-2 absolute top-2 right-2 ">
                  <AiFillDelete
                    onClick={() => handleDeleteTask(task._id, refetch)}
                    className=" cursor-pointer text-[#ff6c6c] text-[20px] "
                  />
                  <AiTwotoneEdit
                    onClick={() => handleModalOpen(task._id)}
                    className=" cursor-pointer text-[20px]"
                  />

                  {/* when click on edit this below modal will be displayed */}
                  <TaskModal
                    refresh={refetch}
                    isOpen={isModalOpen}
                    setIsOpen={setIsModalOpen}
                    taskId={taskId}
                  />
                </div>
              </li>
            ))
          ) : (
            <div className="w-full h-full flex flex-col  justify-center">
              <h1 className="text-4xl mb-8">Add your To-do here..</h1>

              <SkeletonListLoader />
              <SkeletonListLoader />
              <SkeletonListLoader />
            </div>
          )}
        </ul>
    </div>
  );
};

export default CompletedTasks;
