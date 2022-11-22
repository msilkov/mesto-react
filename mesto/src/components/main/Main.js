import { useState, useEffect } from "react";
import reactApi from "../../utils/api.js";
import Card from "../Card.js";

export default function Main(props) {
	const [userName, setUserName] = useState("");
	const [userDescription, setUserDescription] = useState("");
	const [userAvatar, setUserAvatar] = useState("");
	const [cards, setCards] = useState([]);

	useEffect(() => {
		Promise.all([reactApi.getCards(), reactApi.getUserInfo()])
			.then(([cards, { name, about, avatar, _id }]) => {
				setCards(
					cards.map((card) => ({
						id: card._id,
						likes: card.likes,
						name: card.name,
						link: card.link,
						ownerId: card.owner._id,
					}))
				);
				setUserName(name);
				setUserDescription(about);
				setUserAvatar(avatar);
			})
			.catch((err) => {
				console.log(`Ошибка при загрузке данных с сервера: ${err}`);
			});
	}, []);

	return (
		<main className="content section">
			<section
				className="profile section section_size_narrow page__section"
				aria-label="Секция профиль пользователя"
			>
				<div className="profile__avatar-wrapper">
					<img src={userAvatar} alt="аватарка" className="profile__avatar" />
					<div className="profile__avatar-overlay">
						<button
							type="button"
							className="profile__avatar-btn"
							onClick={props.onEditAvatar}
						/>
					</div>
				</div>
				<div className="profile__info">
					<div className="profile__name-wrapper">
						<h1 className="profile__name">{userName}</h1>
						<button
							type="button"
							className="profile__edit-btn"
							onClick={props.onEditProfile}
						/>
					</div>
					<p className="profile__desc">{userDescription}</p>
				</div>
				<button
					type="button"
					className="profile__add-btn"
					onClick={props.onAddPlace}
				/>
			</section>
			<section
				className="cards-layout section section_size_narrow page__section"
				aria-label="Блок с фотокарточками"
			>
				{cards.map(({ id, ...card }) => (
					<Card key={id} {...card} onClick={props.onCardClick} />
				))}
			</section>
		</main>
	);
}
