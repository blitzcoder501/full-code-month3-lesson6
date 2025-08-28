import { BsFillPencilFill } from 'react-icons/bs'
import { FaTrash } from 'react-icons/fa'
import Checkbox from './Checkbox'

function TaskSection({ tasks, setTasks }) {
	const deleteTask = taskId => {
		setTasks(prev => prev.filter(el => el.id !== taskId))
	}

	return (
		<section className='task-section'>
			{tasks.length > 0 ? (
				tasks.map(task => (
					<div key={task.id} className='task-card'>
						<span>{task.title}</span>
						<div className='task-card__actions'>
							<Checkbox
								setTasks={setTasks}
								taskId={task.id}
								isChecked={task.isCompleted}
							/>
							<button className='edit-btn'>
								<BsFillPencilFill size={12} />
							</button>
							<button
								className='delete-btn'
								onClick={() => deleteTask(task.id)}
							>
								<FaTrash size={12} />
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
