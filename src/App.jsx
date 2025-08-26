import { useState } from 'react'

function App() {
	const [taskTitle, setTaskTitle] = useState('')
	const [tasks, setTasks] = useState([])

	function addTodo() {
		setTasks(prev => [
			{
				id: crypto.randomUUID(),
				title: taskTitle,
				isCompleted: false,
			},
			...prev,
		])
	}

	function handleInputChange(event) {
		console.log(event.target)
		setTaskTitle(event.target.value)
	}

	return (
		<div className='wrapper'>
			<h1>To-Do List</h1>

			<section className='form-section'>
				<input type='text' placeholder='Title' onChange={handleInputChange} />
				<button className='create-btn' onClick={addTodo}>
					Создать
				</button>
			</section>

			<section className='task-section'>
				{tasks.length > 0 ? (
					tasks.map(task => (
						<div key={task.id} className='task-card'>
							<span>{task.title}</span>
							<div className='task-card__actions'>
								<input type='checkbox' checked={task.isCompleted} />
								<button className='edit-btn'>Edit</button>
								<button className='delete-btn'>Delete</button>
							</div>
						</div>
					))
				) : (
					<p>Not Tasks</p>
				)}
			</section>
		</div>
	)
}

export default App
