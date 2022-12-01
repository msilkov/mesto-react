import { useState, useEffect, useContext } from "react";
import api from "../../utils/api.js";
import Card from "../Card.js";
import { userContext } from "../contexts/CurrentUserContext.js";

export default function Main(props) {
	const currentUser = useContext(userContext);
	const [cards, setCards] = useState([]);

	useEffect(() => {
		api
			.getCards()
			.then((cards) => {
				setCards(
					cards.map((card) => ({
						_id: card._id,
						likes: card.likes,
						name: card.name,
						link: card.link,
						ownerId: card.owner._id,
					}))
				);
			})
			.catch((err) => {
				console.log(`Ошибка при загрузке данных с сервера: ${err}`);
			});
	}, []);

	function handleCardLike(card) {
		const isOwnLiked = card.likes.some((i) => i._id === currentUser._id);
		api
			.toggleCardLikeStatus(card._id, isOwnLiked ? "DELETE" : "PUT")
			.then((newCard) => {
				setCards((state) =>
					state.map((c) => (c._id === card._id ? newCard : c))
				);
			});
	}

	return (
		<main className="content section">
			<section
				className="profile section section_size_narrow page__section"
				aria-label="Секция профиль пользователя"
			>
				<div className="profile__avatar-wrapper">
					<img
						src={currentUser.avatar}
						alt="аватарка"
						className="profile__avatar"
					/>
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
						<h1 className="profile__name">{currentUser.name}</h1>
						<button
							type="button"
							className="profile__edit-btn"
							onClick={props.onEditProfile}
						/>
					</div>
					<p className="profile__desc">{currentUser.about}</p>
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
				{cards.map((card) => (
					<Card
						key={card._id}
						card={card}
						onClick={props.onCardClick}
						onCardLike={handleCardLike}
					/>
				))}
			</section>
		</main>
	);
}
