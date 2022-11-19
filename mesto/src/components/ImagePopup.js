export default function ImagePopup() {
	return (
		<article className="popup popup_type_zoom-img">
			<div className="popup__container popup__container_content_image">
				<img className="popup__img" src="#" alt="" />
				<p className="popup__img-desc" />
				<button type="reset" className="popup__close-btn" />
			</div>
		</article>
	);
}
