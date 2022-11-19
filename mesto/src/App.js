import React from "react";
import "./index.css";

function App() {
	return (
		<div className="page__content">
			<header className="header section section_size_narrow page__header">
				<a href="#" className="logo">
					<img
						src="<%=require('./images/logo/logo.svg')%>"
						alt="Место - Россия"
						className="logo__icon"
					/>
				</a>
			</header>
			<main className="content section">
				<section
					className="profile section section_size_narrow page__section"
					aria-label="Секция профиль пользователя"
				>
					<div className="profile__avatar-wrapper">
						<img
							src="<%=require('./images/avatars/avatar-01.jpg')%>"
							alt="аватарка"
							className="profile__avatar"
						/>
						<div className="profile__avatar-overlay">
							<button type="button" className="profile__avatar-btn" />
						</div>
					</div>
					<div className="profile__info">
						<div className="profile__name-wrapper">
							<h1 className="profile__name" />
							<button type="button" className="profile__edit-btn" />
						</div>
						<p className="profile__desc" />
					</div>
					<button type="button" className="profile__add-btn" />
				</section>
				<section
					className="cards-layout section section_size_narrow page__section"
					aria-label="Блок с фотокарточками"
				></section>
			</main>
			<footer className="footer page__footer section section_size_narrow">
				<p className="footer__copyright">© 2022 Mesto Russia</p>
			</footer>
			<article className="popup popup_type_edit-profile">
				<div className="popup__container">
					<h2 className="popup__title">Редактировать профиль</h2>
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
			<article className="popup popup_type_add-card">
				<div className="popup__container">
					<h2 className="popup__title">Новое место</h2>
					<form name="create-card" className="popup__form">
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
						<button type="submit" className="popup__submit-btn">
							Создать
						</button>
					</form>
					<button type="reset" className="popup__close-btn" />
				</div>
			</article>
			<article className="popup popup_type_confirmation">
				<div className="popup__container popup__container_content_confirmation">
					<h2 className="popup__title">Вы уверены?</h2>
					<form name="confirm" className="popup__form">
						<button type="submit" className="popup__submit-btn">
							Да
						</button>
					</form>
					<button type="reset" className="popup__close-btn" />
				</div>
			</article>
			<article className="popup popup_type_edit-avatar">
				<div className="popup__container popup__container_content_edit-avatar">
					<h2 className="popup__title">Обновить аватар</h2>
					<form name="confirm" className="popup__form">
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
						<button type="submit" className="popup__submit-btn">
							Сохранить
						</button>
					</form>
					<button type="reset" className="popup__close-btn" />
				</div>
			</article>
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
