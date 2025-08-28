import { FaCheck } from 'react-icons/fa'

function Checkbox({ setTasks, taskId, isChecked }) {
	const toggleTask = () => {
		setTasks(prev =>
			prev.map(t =>
				taskId === t.id ? { ...t, isCompleted: !t.isCompleted } : t
			)
		)
	}

	return (
		<div
			className={`${isChecked ? 'active' : ''} checkbox`}
			onClick={toggleTask}
		>
			{isChecked && <FaCheck size={10} />}
		</div>
	)
}

export default Checkbox
