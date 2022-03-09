import { useState } from 'react';
const NameEntry = () => {
	const [input, setInput] = useState([]);

	const handleChange = (e) => {
		setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
	};
	return (
		<>
			<input
				type="text"
				name="input"
				placeholder="testing"
				onChange={handleChange}
			/>
		</>
	);
};

export default NameEntry;
