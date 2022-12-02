import { useState, useEffect } from "react";
import "../index.css";
import Header from "./header/Header.js";
import Main from "./main/Main.js";
import Footer from "./footer/Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import InputText from "./InputText.js";
import InputLink from "./InputLink.js";
import api from "../utils/api.js";
import { userContext } from "./contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";

function App() {
	const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);

	const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);

	const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

	const [selectedCard, setSelectedCard] = useState(null);

	const [currentUser, setCurrentUser] = useState({});

	useEffect(() => {
		api
			.getUserInfo()
			.then((userData) => {
				setCurrentUser(userData);
			})
			.catch((err) => {
				console.log(`Ошибка при загрузке данных с сервера: ${err}`);
			});
	}, []);

	function closeAllPopups() {
		setEditProfilePopupOpen(false);
		setAddPlacePopupOpen(false);
		setEditAvatarPopupOpen(false);
		setSelectedCard(null);
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

	function handleCardClick(selectedCard) {
		setSelectedCard(selectedCard);
	}

	function handleUpdateUser(userInfo) {
		api
			.setUserInfo(userInfo)
			.then((userData) => {
				setCurrentUser(userData);
				closeAllPopups();
			})
			.catch((err) => {
				console.log(`Ошибка при загрузке данных пользователя: ${err}`);
			});
	}

	function handleUpdateUserAvatar(avatarInfo) {
		api
			.setAvatar(avatarInfo)
			.then((userData) => {
				setCurrentUser(userData);
				closeAllPopups();
			})
			.catch((err) => {
				console.log(`Ошибка при загрузке аватара пользователя: ${err}`);
			});
	}

	return (
		<userContext.Provider value={currentUser}>
			<div className="page__content">
				<Header />
				<Main
					onEditProfile={handleEditProfileClick}
					onAddPlace={handleAddPlaceClick}
					onEditAvatar={handleEditAvatarClick}
					onCardClick={handleCardClick}
				/>
				<Footer />

				<EditProfilePopup
					isOpen={isEditProfilePopupOpen}
					onClose={closeAllPopups}
					onUpdateUser={handleUpdateUser}
				/>

				<EditAvatarPopup
					isOpen={isEditAvatarPopupOpen}
					onClose={closeAllPopups}
					onUpdateAvatar={handleUpdateUserAvatar}
				/>

				<PopupWithForm
					name="add-card"
					title="Новое место"
					button="Создать"
					isOpen={isAddPlacePopupOpen}
					onClose={closeAllPopups}
				>
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

				<ImagePopup card={selectedCard} onClose={closeAllPopups} />
			</div>
		</userContext.Provider>
	);
}

export default App;
