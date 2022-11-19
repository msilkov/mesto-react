export default function Main() {
	function handleEditAvatarClick() {
		const popupEditAvatar = document.querySelector(".popup_type_edit-avatar");
		popupEditAvatar.classList.add("popup_opened");

		console.log("ava");
	}
	function handleEditProfileClick() {
		const popupEditProfile = document.querySelector(".popup_type_edit-profile");
		popupEditProfile.classList.add("popup_opened");
	}

	function handleAddPlaceClick() {
		const popupAddCard = document.querySelector(".popup_type_add-card");
		popupAddCard.classList.add("popup_opened");

		console.log("place card");
	}
	return (
		<main className="content section">
			<section
				className="profile section section_size_narrow page__section"
				aria-label="Секция профиль пользователя"
			>
				<div className="profile__avatar-wrapper">
					<img
						src="<%=require('./images/avatars/avatar-01.jpg')%>"
						alt="аватарка"
						className="profile__avatar"
					/>
					<div className="profile__avatar-overlay">
						<button
							type="button"
							className="profile__avatar-btn"
							onClick={handleEditAvatarClick}
						/>
					</div>
				</div>
				<div className="profile__info">
					<div className="profile__name-wrapper">
						<h1 className="profile__name" />
						<button
							type="button"
							className="profile__edit-btn"
							onClick={handleEditProfileClick}
						/>
					</div>
					<p className="profile__desc" />
				</div>
				<button
					type="button"
					className="profile__add-btn"
					onClick={handleAddPlaceClick}
				/>
			</section>
			<section
				className="cards-layout section section_size_narrow page__section"
				aria-label="Блок с фотокарточками"
			></section>
		</main>
	);
}
