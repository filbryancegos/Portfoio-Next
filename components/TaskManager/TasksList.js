import Head from 'next/head'
import React, {useContext} from 'react'
import { FiTrash, FiEdit2 } from "react-icons/fi";
import { AppContext } from '../../context/AppContext';
import Tasks from "./Tasks";

export default function TasksList() {
const { tasks } = useContext(AppContext);
  return (
    <div>
		{tasks.length ? (
			<div className="mt-5">
				{tasks.map(task => {
					return <Tasks task={task} key={task.id}/>
				})}
			</div>
		) : (
			<div className="no-tasks">No Tasks</div>
		)
	}
	</div>
  )
}
