import "./styles.css";
import user from "../../assets/user.png";
import LinkInfo from "../../components/linkInfo";
const Leftbar = () => {
  const info = [
    {
      name: "Sobre mim",
    },
    {
      name: "Sobre mim",
    },
    {
      name: "Sobre mim",
    },
  ];

  return (
    <div className="screen">
      <p className="title">Igor Pereira</p>
      <img src={user} alt="Igor Pereira" className="userImage" />
      <p className="info">
        Olá meu nome é Igor, sou desenvolvedor front end. Bem vindo ao meu
        portifólio
      </p>
      <hr></hr>
      <div className="linkInfo">
        {info.map(() => {
          return <LinkInfo/>;
        })}
      </div>
    </div>
  );
};

export default Leftbar;
