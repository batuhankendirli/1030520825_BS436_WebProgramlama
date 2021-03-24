import React from "react";
import ReactDOM from "react-dom";
import { init, click } from "./game";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }
  componentDidMount() {
    init();
  }
  render() {
    return (
      <div>
        <h2>Kedi Bulmaca</h2>
        <p>
          Kedi bulmaca oyununa hoş geldin! Kediyi bulmak için kartların üzerine
          tıklaman yeterli.
          <p class="p-1">
            İlk hamlede bulamazsan ikinci bir hamle hakkın oluyor. Bol şans!
          </p>
        </p>

        <div class="row">
          <div class="column">
            <img
              id="img-0"
              class="kart"
              src="cat.jpg"
              style="width: 100%"
              onclick={click()}
            />
          </div>

          <div class="column">
            <img
              id="img-1"
              class="kart"
              src="dog.jpg"
              style="width: 100%"
              onclick={click()}
            />
          </div>

          <div class="column">
            <img
              id="img-2"
              class="kart"
              src="bird.jpg"
              style="width: 100%"
              onclick={click()}
            />
          </div>
        </div>

        <div class="mesaj">
          <p id="alanId">Kedi kartını bulmak için kartın üzerine tıkla.</p>
          <p id="kazandiId" style="display: none">
            Kazandın. Yeniden oynamak için
            <span id="btn-win">buraya</span> tıkla.
          </p>
          <p id="yenildiId" style="display: none">
            Kaybettin. Yeniden oynamak için
            <span id="btn-lose">buraya</span> tıkla.
          </p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
// Önceki yazdığım kodun üzerine uyarlayamadım. Saatlerce uğraş verdim ama çalışmıyor.
