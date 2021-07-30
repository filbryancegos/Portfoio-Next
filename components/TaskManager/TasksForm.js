
import Head from 'next/head'
import React, { useContext, useState , useEffect} from 'react'
import { AppContext } from '../../context/AppContext';

export default function TasksForm({task}) {
	const { addTask, clearList, editTask, editItem } = useContext(AppContext)
	const [title, setTitle] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!editItem) {
			addTask(title)
			setTitle('')
		  } else {
			editTask(title, editItem.id)
		  }
	}

	const handleChange = e => {
		setTitle(e.target.value)
	}

	useEffect(() => {
		if (editItem) {
			setTitle(editItem.title)
		} else {
			setTitle('')
		}
	}, [editItem])

  return (
	<form onSubmit={handleSubmit}>
		<div className="grid grid-cols-1 gap-4 mt-12 flex justify-center">
			<input 
			placeholder="add tasks" 
			className="p-2 rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-gray-600" 
			type="text" 
			id="tasks" 
			name="tasks"
			value={title}
			onChange={handleChange}
			required
			/>

			<div className="flex justify-end space-x-4">
				<button type="submit" className="bg-yellow-300 text-white py-2 px-8 rounded-md cursor-pointer">Add</button>
				<button type="button" className="bg-yellow-500 text-white py-2 px-8 rounded-md cursor-pointer">Clear</button>
			</div>
		</div>
	</form>
  )
}
