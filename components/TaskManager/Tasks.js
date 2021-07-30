import Head from 'next/head'
import React, {useContext} from 'react'
import { FiTrash, FiEdit2 } from "react-icons/fi";
import { AppContext } from '../../context/AppContext';


export default function Tasks({task}) {
	const { removeTask, findItem } = useContext(AppContext)
	return (
		<div className="flex justify-between bg-gray-900 p-2 text-white rounded-md mb-3">
			<div className="taskName">{task.title}</div>
			<div className="flex items-center space-x-1">
				<span onClick={() => findItem(task.id)}><FiEdit2></FiEdit2></span>
				<span onClick={() => removeTask(task.id)}><FiTrash></FiTrash></span>
			</div>
		</div>
	)
}
