import { useState } from 'react'
import FormSection from './components/FormSection'
import TaskSection from './components/TaskSection'

function App() {
	const [tasks, setTasks] = useState([])

	return (
		<div className='wrapper'>
			<h1>To-Do List</h1>

			<FormSection setTasks={setTasks} />
			<TaskSection tasks={tasks} setTasks={setTasks} />
		</div>
	)
}

export default App
