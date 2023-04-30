import profileAvatar from '../images/image.jpg';

function Main() {
    return (
        <main className="main">
        <section className="profile">
          <div className="profile__container">
            <img className="profile__avatar-image" src={profileAvatar} alt="Фото мужчины" />
            <button className="profile__button-avatar" aria-label="Edit" type="button" name="avatar" id="avatars">
            </button>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button className="profile__button-rectangle" aria-label="Edit" type="button" name="edit" id="edit">
            </button>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
          <button className="profile__button-vector" aria-label="Add" type="button" name="add" id="add">
          </button>
        </section>
        <section className="groups">
        </section>
      </main>
    );
  }
 export default Main;