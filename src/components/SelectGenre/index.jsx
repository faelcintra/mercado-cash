import React from 'react'

export function SelectGenre({ change, value }) {
	const changeGenre = (genre) => {
		change(genre.target.value)
	}

	return (
		<select
			value={value}
			name=""
			id=""
			onChange={changeGenre}
		>
			<option value="feminino">Feminino</option>
			<option value="masculino">Masculino</option>
		</select>
	)
}
