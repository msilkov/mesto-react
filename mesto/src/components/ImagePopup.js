export default function ImagePopup(props) {
	return (
		<article
			className={`popup popup_type_zoom-img ${
				props.card ? "popup_opened" : ""
			}`}
		>
			<div className="popup__container popup__container_content_image">
				<img className="popup__img" src={props.link} alt="" />
				<p className="popup__img-desc" />
				<button
					onClick={props.onClose}
					type="reset"
					className="popup__close-btn"
				/>
			</div>
		</article>
	);
}
