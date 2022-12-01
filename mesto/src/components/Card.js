import { useContext } from "react";
import { userContext } from "./contexts/CurrentUserContext.js";

export default function Card(props) {
	const currentUser = useContext(userContext);

	const isOwn = props.card.ownerId === currentUser._id;
	console.log(currentUser._id)
	console.log(props.card.ownerId)
	console.log(isOwn)
	const cardDeleteButtonClassName = (
		`card__remove-btn ${isOwn ? 'card__remove-btn_type_visible' : 'card__remove-btn_type_hidden'}`
	); 

	function handleClick() {
		props.onClick(props.card);
	}

	return (
		<article className="card">
			<img
				onClick={handleClick}
				src={props.card.link}
				alt={props.card.alt ? props.card.alt : props.card.name}
				className="card__image"
			/>
			<div className="card__description">
				<h2 className="card__title">{props.card.name}</h2>
				<div className="card-likes">
					<button type="button" className="card__like-btn" />
					<p
						className={`card__like-counter ${
							props.card.likes.length ? " card__like-counter_active" : ""
						}`}
					>
						{props.card.likes.length ? props.card.likes.length : ""}
					</p>
				</div>
			</div>
			<button type="button" className={cardDeleteButtonClassName} />
		</article>
	);
}
