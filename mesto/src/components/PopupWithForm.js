export default function PopupWithForm(props) {
	return (
		<article
			className={`popup popup_type_${props.name} ${
				props.isOpen ? "popup_opened" : ""
			}`}
		>
			<div className={`popup__container ${props.popupContent}`}>
				<h2 className="popup__title">{props.title}</h2>
				<form
					name={props.name}
					className="popup__form"
					onSubmit={props.onSubmit}
				>
					{props.children}
					<button type="submit" className="popup__submit-btn">
						{props.button}
					</button>
				</form>
				<button
					onClick={props.onClose}
					type="reset"
					className="popup__close-btn"
				/>
			</div>
		</article>
	);
}
