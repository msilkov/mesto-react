export default function ImputText(props) {
	return (
		<fieldset className="popup__input-group">
			<input
				id="place-input"
				type="text"
				name="name"
				className="popup__input popup__input_type_img-title"
				placeholder={props.placeholder}
				minLength={2}
				maxLength={30}
				required=""
				value={props.value}
				onChange={props.onChange}
			/>
			<span
				id="place-input-error"
				className="place-input-error popup__input-error"
			/>
		</fieldset>
	);
}
