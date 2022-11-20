export default function Card({ card }) {
	// function handleClick() {
	// 	props.onCardClick(props.card);
	// }

	return (
		<article className="card">
			<img src={card.link} alt="img" className="card__image" />
			<div className="card__description">
				<h2 className="card__title">{card.name}</h2>
				<div className="card-likes">
					<button type="button" className="card__like-btn" />
					<p className="card__like-counter">{card.likes.length}</p>
				</div>
			</div>
			<button type="button" className="card__remove-btn" />
		</article>
	);
}
