import PopupWithForm from "./PopupWithForm.js";
import InputLink from "./InputLink.js";
import { useState, useContext, useEffect, useRef } from "react";
import { userContext } from "./contexts/CurrentUserContext";

export default function EditAvatarPopup(props) {
	const inputLink = useRef("");

	function handleFormSubmit(e) {
		e.preventDefault();
		props.onUpdateAvatar({
			avatar: inputLink.current.value,
		});
		inputLink.current.value = "";
	}

	return (
		<PopupWithForm
			name="edit-avatar"
			title="Обновить аватар"
			button="Сохранить"
			popupContent="popup__container_content_edit-avatar"
			isOpen={props.isOpen}
			onClose={props.onClose}
			onSubmit={handleFormSubmit}
		>
			<InputLink placeholder="Ссылка на картинку" link={inputLink} />
		</PopupWithForm>
	);
}
