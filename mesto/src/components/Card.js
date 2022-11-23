export default function Card(props) {
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
			<button type="button" className="card__remove-btn" />
		</article>
	);
}
