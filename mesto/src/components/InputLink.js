export default function InputLink(props) {
	return (
		<fieldset className="popup__input-group">
			<input
				id="img-input"
				type="text"
				name="link"
				className="popup__input popup__input_type_img-link"
				placeholder={props.placeholder}
				defaultValue=""
				pattern="https?://.+"
				required=""
			/>
			<span
				id="img-input-error"
				className="img-input-error popup__input-error"
			/>
		</fieldset>
	);
}
