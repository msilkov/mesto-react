export default function ImputText(props) {
	return (
		<fieldset className="popup__input-group">
			<input
				id="place-input"
				type="text"
				name="name"
				className="popup__input popup__input_type_img-title"
				placeholder={props.placeholder}
				defaultValue=""
				minLength={2}
				maxLength={30}
				required=""
			/>
			<span
				id="place-input-error"
				className="place-input-error popup__input-error"
			/>
		</fieldset>
	);
}
