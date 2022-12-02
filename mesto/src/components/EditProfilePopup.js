import PopupWithForm from "./PopupWithForm.js";
import InputText from "./InputText.js";
import { useState, useContext, useEffect } from "react";
import { userContext } from "./contexts/CurrentUserContext";

export default function EditProfilePopup(props) {
	const currentUser = useContext(userContext);

	function handleFormSubmit(e) {
		e.preventDefault();
		props.onUpdateUser({
			name,
			about: description,
		});
	}
	const [name, setName] = useState(" ");
	const [description, setDescription] = useState(" ");

	useEffect(() => {
		setName(currentUser.name || "");
		setDescription(currentUser.about || "");
	}, [currentUser]);

	function handleNameChange(e) {
		setName(e.target.value);
	}

	function handleDescChange(e) {
		setDescription(e.target.value);
	}

	return (
		<PopupWithForm
			name="edit-profile"
			title="Редактировать профиль"
			button="Сохранить"
			isOpen={props.isOpen}
			onClose={props.onClose}
			onSubmit={handleFormSubmit}
		>
			<InputText
				placeholder="Ваше имя"
				value={name}
				onChange={handleNameChange}
			/>
			<InputText
				placeholder="Чем вы занимаетесь?"
				value={description}
				onChange={handleDescChange}
			/>
		</PopupWithForm>
	);
}
