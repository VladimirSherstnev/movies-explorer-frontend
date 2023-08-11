import { Link } from "react-router-dom";

function Profile() {

    return (
      <div className="profile">
        <h1 className="profile__title">Привет, Владимир</h1>
        <div className="profile__info">
          <div className="profile__name">
            <p className="profile__name_title">Имя</p>
            <p className="profile__name_user">Владимир</p>
          </div>
          <div className="profile__email">
            <p className="profile__email_title">Email</p>
            <p className="profile__email_user">test@test.ru</p>
          </div>
        </div>
        <div className="profile__edit">
          <button type="button" className="profile__change">Редактировать</button>
          <Link to="/" className="profile__signOut">Выйти из аккаунта</Link>
        </div>
      </div>
    );
  }
  
  export default Profile;
  