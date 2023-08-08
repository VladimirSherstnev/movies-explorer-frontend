import hoverAvatar from "../../images/avatar.jpg";

function AboutMe() {

    return (
        <div className="aboutMe" id="student">
          <h3 className="title">Студент</h3>
          <div className="aboutMe__info">
            <h2 className="aboutMe__title">Владимир</h2>
            <p className="aboutMe__subtitle">Фронтенд-разработчик, 33 года</p>
            <p className="aboutMe__text">Я родился и живу в Москве, закончил факультет экономики СГУ. У меня есть жена 
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь мотокроссом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          </div>
          <a href="https://github.com/VladimirSherstnev" className="aboutMe__git">Github</a>
          <img src={hoverAvatar} className="aboutMe__avatar" alt="Аватар"></img>
        </div>
    );
  }
  
  export default AboutMe;