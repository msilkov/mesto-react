import PopupWithForm from "./PopupWithForm.js";
import InputText from "./InputText.js";
import InputLink from "./InputLink.js";

import { useState } from "react";

export default function AddPlacePopup(props) {
	function handleFormSubmit(e) {
		e.preventDefault();
		props.onAddPlace({
			name: place,
			link: placeLink,
		});
	}

	const [place, setPlace] = useState("");
	const [placeLink, setPlaceLink] = useState("");

	function handlePlaceChange(e) {
		setPlace(e.target.value);
	}

	function handlePlaceLinkChange(e) {
		setPlaceLink(e.target.value);
	}

	return (
		<PopupWithForm
			name="add-card"
			title="Новое место"
			button="Создать"
			isOpen={props.isOpen}
			onClose={props.onClose}
			onSubmit={handleFormSubmit}
		>
			<InputText
				placeholder="Описание места"
				value={place}
				onChange={handlePlaceChange}
			/>
			<InputLink
				placeholder="Ссылка на картинку"
				value={placeLink}
				onChange={handlePlaceLinkChange}
			/>
		</PopupWithForm>
	);
}
