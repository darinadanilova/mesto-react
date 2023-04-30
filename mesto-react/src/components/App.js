

import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from '../components/Footer.js';

function App() {
  document.body.classList.add('page');
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <div className="popup popup_edit">
        <div className="popup__container">
          <button className="popup__close" aria-label="Close" type="button" name="close" id="close">
          </button>
          <h2 className="popup__title">Редактировать профиль
          </h2>
          <form className="popup__inform" name="information" novalidate>
          <input required type="text" minlength="2" maxlength="40" className="popup__form popup__form_input_name" id="name" name="name" placeholder="Имя" />
          <span id="name-error" className="popup__error"></span>
          <input required type="text" minlength="2" maxlength="200" className="popup__form popup__form_input_profession" id="profession" name="profession" placeholder="Профессия" />
          <span id="profession-error" className="popup__error"></span>
          <button className="popup__button-rectangle" aria-label="Save" type="submit" name="save" id="save">Сохранить
          </button>
        </form>
      </div>
    </div>
    <div className="popup popup_add">
        <div className="popup__container">
          <button className="popup__close" aria-label="Close" type="button" name="close" id="closeadd">
          </button>
          <h2 className="popup__title">Новое место
          </h2>
          <form className="popup__inform" name="informations" novalidate>
            <input required type="text" minlength="2" maxlength="30" className="popup__form popup__form_input_place" id="place" name="place" placeholder="Название" />
            <span id="place-error" className="popup__error"></span>
            <input required type="url" className="popup__form popup__form_input_link" id="link" name="link" placeholder="Сcылка на картинку" />
            <span id="link-error" className="popup__error"></span>
            <button className="popup__button-rectangle" aria-label="Create" type="submit" name="create" id="create">Создать
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_open popup_open_img">
        <div className="popup__container-open">
          <button className="popup__close" aria-label="Close" type="button" name="close" id="closeimg">
          </button>
          <img className="popup__image" src="#" alt="#" />
          <p className="popup__caption"></p>
        </div>
      </div>
      <div className="popup popup_delete">
        <div className="popup__container-delete">
          <button className="popup__close" aria-label="Close" type="button" name="close" id="closedelete">
          </button>
          <h2 className="popup__title">Вы уверены?
          </h2>
          <button className="popup__button-delete" aria-label="Approve" type="submit" name="approve" id="approve">Да
          </button>
        </div>
      </div>
      <div className="popup popup_avatar">
        <div className="popup__container">
          <button className="popup__close" aria-label="Close" type="button" name="close" id="closeavatar">
          </button>
          <h2 className="popup__title">Обновить аватар
          </h2>
          <form className="popup__inform" name="avatar" novalidate>
            <input required type="url" className="popup__form popup__form_input_avatar" id="avatar" name="avatar" placeholder="Сcылка на фото" />
            <span id="avatar-error" className="popup__error"></span>
            <button className="popup__button-rectangle" aria-label="Change" type="submit" name="change" id="change">Сохранить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
