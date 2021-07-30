import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TasksList from '../components/TaskManager/TasksList'
import TasksForm from '../components/TaskManager/TasksForm'


export default function TasksManager() {
  return (
    <div className="container p-6">
      <h1 className="text-xl text-white">Tasks Manager</h1>
		<div>
			<TasksForm/>
			<TasksList />
		</div>
    </div>
  )
}
