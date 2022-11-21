import React from "react";
import "../index.css";
import Header from "./header/Header.js";
import Main from "./main/Main.js";
import Footer from "./footer/Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import InputText from "./InputText.js";
import InputLink from "./InputLink.js";

function App() {
	const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
		React.useState(false);

	const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

	const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

	// const [selectedCard, setSelectedCard] = React.useState(null);

	function closeAllPopups() {
		setEditProfilePopupOpen(false);
		setAddPlacePopupOpen(false);
		setEditAvatarPopupOpen(false);
		// setSelectedCard(false);
	}

	function handleEditProfileClick() {
		setEditProfilePopupOpen(!isEditProfilePopupOpen);
	}

	function handleAddPlaceClick() {
		setAddPlacePopupOpen(!isAddPlacePopupOpen);
	}

	function handleEditAvatarClick() {
		setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
	}
	function handleCardClick() {
		// setSelectedCard(true);
	}
	return (
		<div className="page__content">
			<Header />
			<Main
				onEditProfile={handleEditProfileClick}
				onAddPlace={handleAddPlaceClick}
				onEditAvatar={handleEditAvatarClick}
				// onCardClick={handleCardClick}
			/>
			<Footer />

			<PopupWithForm
				name="edit-profile"
				title="Редактировать профиль"
				button="Сохранить"
				isOpen={isEditProfilePopupOpen}
				onClose={closeAllPopups}
			>
				<InputText placeholder="Ваше имя" />
				<InputText placeholder="Чем вы занимаетесь?" />
			</PopupWithForm>

			<PopupWithForm
				name="add-card"
				title="Новое место"
				button="Создать"
				isOpen={isAddPlacePopupOpen}
				onClose={closeAllPopups}
			>
				{" "}
				<InputText placeholder="Описание места" />
				<InputLink placeholder="Ссылка на картинку" />
			</PopupWithForm>
			<PopupWithForm
				name="confirmation"
				title="Вы уверены?"
				button="Да"
				popupContent="popup__container_content_confirmation"
				onClose={closeAllPopups}
			/>

			<PopupWithForm
				name="edit-avatar"
				title="Обновить аватар"
				button="Сохранить"
				popupContent="popup__container_content_edit-avatar"
				isOpen={isEditAvatarPopupOpen}
				onClose={closeAllPopups}
			>
				{" "}
				<InputLink placeholder="Ссылка на картинку" />{" "}
			</PopupWithForm>

			<ImagePopup card={false} onClose={closeAllPopups} />
		</div>
	);
}

export default App;
