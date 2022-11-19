export default function PopupWithForm(props) {
	return (
		<article className={`popup popup_type_${props.name}`}>
			<div className="popup__container">
				<h2 className="popup__title">{props.title}</h2>
				<form name="edit-form" className="popup__form">
					<fieldset className="popup__input-group">
						<input
							id="name-input"
							type="text"
							name="name"
							className="popup__input popup__input_type_name"
							placeholder="Ваше Имя"
							defaultValue=""
							minLength={2}
							maxLength={40}
							required=""
						/>
						<span
							id="name-input-error"
							className="name-input-error popup__input-error"
						/>
					</fieldset>
					<fieldset className="popup__input-group">
						<input
							id="prof-input"
							type="text"
							name="about"
							className="popup__input popup__input_type_profession"
							placeholder="Ваша профессия"
							defaultValue=""
							minLength={2}
							maxLength={200}
							required=""
						/>
						<span
							id="prof-input-error"
							className="prof-input-error popup__input-error"
						/>
					</fieldset>
					<button type="submit" className="popup__submit-btn">
						Сохранить
					</button>
				</form>
				<button type="reset" className="popup__close-btn" />
			</div>
		</article>
	);
}
