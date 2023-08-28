import Background from "./components/Background";
import Copyright from "./components/Copyright";
import Form from "./components/Form";
import Logo from "./components/Logo";

export default function App() {
  return (
    <div className="sing-in">
      <div className="sing-in__info">
        <Logo />
        <Form />
        <Copyright />
      </div>

      <div className="sing-in__bg">
        <Background src="bg.png" alt="bg"/>
      </div>
    </div>
  );
}

