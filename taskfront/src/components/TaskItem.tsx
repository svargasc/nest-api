import { useTasks } from "../context/useTasks"
import { Task } from "../interfaces/task.interface"
import { IoCheckmarkSharp, IoCloseSharp} from "react-icons/io5";

interface Props {
    task: Task
}

function TaskItem({task}:Props) {

  const {deleteTask, updateTask} = useTasks()

  return (
    <div key = {task._id} className="bg-gray-900 p-2 my-2 flex justify-between 
    hover:bg-gray-800 hover:cursor-pointer">
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>
        <div className="flex items-center gap-x-2">
            {
              task.done ? (
              <IoCheckmarkSharp 
                className="text-green-500"
                onClick={()=>{
                  updateTask(task._id,{
                    done: !task.done,
                  })
                 }}
              />) : (
                <IoCheckmarkSharp 
                className="text-red-500"
                onClick={()=>{
                  updateTask(task._id,{
                    done: !task.done,
                  })
                 }}
              />
              )
            }
            <IoCloseSharp onClick={async () => {
            if(!window.confirm('Are you sure you want to delete this task?')) return;
              await deleteTask(task._id)
            }}
              />
        </div>
    </div>  
  )
}

export default TaskItem
