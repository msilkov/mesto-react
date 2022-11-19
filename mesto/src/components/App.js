import React from "react";
import "../index.css";
import Header from "./header/Header.js";
import Main from "./main/Main.js";
import Footer from "./footer/Footer.js";
import PopupWithForm from "./PopupWithForm";

function App() {
	return (
		<div className="page__content">
			<Header />
			<Main />
			<Footer />

			<PopupWithForm
				name="edit-profile"
				title="Редактировать профиль"
				children={
					<React.Fragment>
						<fieldset className="popup__input-group">
							<input
								id="place-input"
								type="text"
								name="name"
								className="popup__input popup__input_type_img-title"
								placeholder="Название"
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
						<fieldset className="popup__input-group">
							<input
								id="img-input"
								type="text"
								name="link"
								className="popup__input popup__input_type_img-link"
								placeholder="Ссылка на картинку"
								defaultValue=""
								pattern="https?://.+"
								required=""
							/>
							<span
								id="img-input-error"
								className="img-input-error popup__input-error"
							/>
						</fieldset>
					</React.Fragment>
				}
				button="Сохранить"
			/>

			<PopupWithForm
				name="add-card"
				title="Новое место"
				children={
					<React.Fragment>
						<fieldset className="popup__input-group">
							<input
								id="place-input"
								type="text"
								name="name"
								className="popup__input popup__input_type_img-title"
								placeholder="Название"
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
						<fieldset className="popup__input-group">
							<input
								id="img-input"
								type="text"
								name="link"
								className="popup__input popup__input_type_img-link"
								placeholder="Ссылка на картинку"
								defaultValue=""
								pattern="https?://.+"
								required=""
							/>
							<span
								id="img-input-error"
								className="img-input-error popup__input-error"
							/>
						</fieldset>
					</React.Fragment>
				}
				button="Создать"
			/>
			<PopupWithForm
				name="confirmation"
				title="Вы уверены?"
				button="Да"
				popupContent="popup__container_content_confirmation"
			/>

			<PopupWithForm
				name="edit-avatar"
				title="Обновить аватар"
				children={
					<React.Fragment>
						<fieldset className="popup__input-group">
							<input
								id="owner-avatar"
								type="url"
								name="avatar"
								className="popup__input popup__input_type_img-link"
								placeholder="Ссылка на картинку"
								defaultValue=""
								pattern="https?://.+"
								required=""
							/>
							<span
								id="owner-avatar-error"
								className="img-input-error popup__input-error"
							/>
						</fieldset>
					</React.Fragment>
				}
				button="Сохранить"
				popupContent="popup__container_content_edit-avatar"
			/>

			<article className="popup popup_type_zoom-img">
				<div className="popup__container popup__container_content_image">
					<img className="popup__img" src="#" alt="" />
					<p className="popup__img-desc" />
					<button type="reset" className="popup__close-btn" />
				</div>
			</article>
		</div>
	);
}

export default App;
