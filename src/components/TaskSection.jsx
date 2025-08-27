function TaskSection({ tasks, setTasks }) {
	const deleteTask = taskId => {
		setTasks(prev => prev.filter(el => el.id !== taskId))
	}

	const toggleTask = taskId => {
		setTasks(prev =>
			prev.map(t =>
				taskId === t.id ? { ...t, isCompleted: !t.isCompleted } : t
			)
		)
	}

	return (
		<section className='task-section'>
			{tasks.length > 0 ? (
				tasks.map(task => (
					<div key={task.id} className='task-card'>
						<span>{task.title}</span>
						<div className='task-card__actions'>
							<input
								type='checkbox'
								checked={task.isCompleted}
								onChange={() => toggleTask(task.id)}
							/>
							<button className='edit-btn'>Edit</button>
							<button
								className='delete-btn'
								onClick={() => deleteTask(task.id)}
							>
								Delete
							</button>
						</div>
					</div>
				))
			) : (
				<p>Not Tasks</p>
			)}
		</section>
	)
}

export default TaskSection
