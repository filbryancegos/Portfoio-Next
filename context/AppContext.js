import React, {createContext, useReducer, useEffect, useState} from 'react'
import { v4 as uuidv4 } from 'uuid'

const appReducer = (state, action) => {
	switch(action.type) {
		case 'TOOGLE_MENU':
			return {
				isMobile: !state.isMobile
			}
		default:
			return state
	}
}


const initialState = {
	isMobile: false,
}

export const AppContext = createContext()

export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(appReducer, initialState);

	const initialStateTasks = []

	const [tasks, setTasks] = useState(initialStateTasks)

	useEffect(() => {
		setTasks(tasks)
	}, [tasks])

	const [editItem, setEditItem] = useState(null)

	// Add tasks
	const addTask = title => {
		setTasks([...tasks, { title, id: uuidv4() }])
	}

	// Remove tasks
	const removeTask = id => {
		setTasks(tasks.filter(task => task.id !== id))
	}

	// Clear tasks
	const clearList = () => {
		setTasks([])
	}

	// Find task
	const findItem = id => {
		const item = tasks.find(task => task.id === id)
		console.log(item)
		setEditItem(item)
	}

	// Edit task
	const editTask = (title, id) => {
		const newTasks = tasks.map(task => (task.id === id ? { title, id } : task))

		setTasks(newTasks)
		setEditItem(null)
	}



	return (
		<AppContext.Provider value={{
			isMobile: state.isMobile,
			dispatch,
			tasks,
			addTask,
			removeTask,
			clearList,
			findItem,
			editTask,
			editItem
		}}>
			{props.children}
		</AppContext.Provider>
	)
}

