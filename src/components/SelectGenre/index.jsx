import { Select } from './styles.js'

export function SelectGenre({ change, value, required }) {

	const changeGenre = (genre) => {
		change(genre.target.value)
	}

	return (
		<Select
			value={value}
			onChange={changeGenre}
			required={required}
		>
			<option></option>
			<option value="feminino">Feminino</option>
			<option value="masculino">Masculino</option>
		</Select>
	)
}
