import { useState } from 'react'

function FormSection({ setTasks }) {
	const [taskTitle, setTaskTitle] = useState('')

	function addTodo() {
		setTasks(prev => [
			{
				id: crypto.randomUUID(),
				title: taskTitle,
				isCompleted: false,
			},
			...prev,
		])

		setTaskTitle('')
	}

	function handleInputChange(event) {
		setTaskTitle(event.target.value)
	}

	return (
		<section className='form-section'>
			<input
				type='text'
				placeholder='Title'
				value={taskTitle}
				onChange={handleInputChange}
			/>
			<button className='create-btn' onClick={addTodo}>
				Создать
			</button>
		</section>
	)
}

export default FormSection
