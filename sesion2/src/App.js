import './App.css';
import AntiHeroBox from './components/AntiHeroeBox';
import Heroes from './components/Herobox';
import wonderwoman from './img/wonderwoman.jpg';
import antman from './img/antman.png';
import DrStrange from './img/dr_strange.jpg';
import deathstroke from './img/deathstroke.png';
import elektra from './img/elektra.jpg';

function App() {
  return (
    <div className="App">
      <Heroes className="card doctor-strange" name="Stephen" heroName="Doctor Strange">
        <h2>Biografía de Doctor Strange</h2>
        <img className="picture" src={DrStrange} alt="Doctor Strange" />
        <p>
          Doctor Strange es un superhéroe y cirujano ficticio que aparece en cómics estadounidenses publicados por Marvel Comics. Doctor Strange sirve como el Hechicero Supremo, el principal protector de la Tierra contra las amenazas mágicas y místicas. Inspirado en historias de magia negra y Chandu el Mago, Strange fue creado durante la edad de plata de los cómics para traer un tipo diferente de personajes y temas a Marvel Comics.
        </p>
        <a target="_blank" href="https://es.wikipedia.org/wiki/Doctor_Strange">Doctor Strange</a>
      </Heroes>

      <Heroes className="card antman" name="Scott Lang" heroName="El Hombre hormiga">
        <h2>Biografía del Hombre hormiga</h2>
        <img className="picture" src={antman} alt="Hombre hormiga" />
        <p>
        El Hombre Hormiga original fue el doctor Henry 'Hank' Pym, experto en biofísica y miembro del Centro de Operaciones de Seguridad que decidió convertirse en un superhéroe después de la muerte de su primera esposa, Maria Trovaya, quien había sido disidente política en su natal Hungría.
        </p>
        <a target="_blank" href="https://es.wikipedia.org/wiki/Hombre_Hormiga">Hombre hormiga</a>
      </Heroes>

      <Heroes className="card wonderwoman" name="Diana" heroName="La Mujer Maravilla">
        <h2>Biografía de La Mujer maravilla</h2>
        <img className="picture" src={wonderwoman} alt="Mujer Maravilla" />
        <p>
          La Mujer Maravilla es una princesa guerrera de las Amazonas, pueblo ficticio basado en el de las amazonas de la mitología griega. En su tierra natal es conocida como la princesa Diana de Temiscira pero fuera de esta utiliza la identidad secreta de Diana Prince.
        </p>
        <a target="_blank" href="https://es.wikipedia.org/wiki/Mujer_Maravilla">Mujer Maravilla</a>
      </Heroes>

      <AntiHeroBox className="card deathstroke" name="Slade Wilson" antiHero="Deathstroke">
        <h2>Biografía de Deathstroke</h2>
        <img className="picture" src={deathstroke} alt="Deathstroke" />
        <p>
          Deathstroke es un antihéroe ficticio que aparece en los cómics estadounidenses publicados por DC Comics.2​Creado por Marv Wolfman y George Pérez, el personaje debutó en The New Teen Titans # 2 en diciembre de 1980.3​Generalmente se le representa como un asesino y archienemigo de los Teen Titans, específicamente Damian Wayne; También se ha desempeñado como adversario de otros héroes en el Universo DC, como Batman y la Liga de la Justicia.
        </p>
        <a target="_blank" href="https://es.wikipedia.org/wiki/Deathstroke">Deathstroke</a>
      </AntiHeroBox>

      <AntiHeroBox className="card elektra" name="Elektra" antiHero="Elektra Natchios">
        <h2>Biografía de Elektra</h2>
        <img className="picture" src={elektra} alt="Elektra" />
        <p>
          Elektra es un personaje ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. Creado por Frank Miller, el personaje apareció por primera vez en Daredevil # 168 (enero de 1981). Ella es un interés amoroso del superhéroe Daredevil, pero su naturaleza violenta y estilo de vida mercenario los dividen.
        </p>
        <a target="_blank" href="https://es.wikipedia.org/wiki/Elektra">Elektra</a>
      </AntiHeroBox>
    </div>
  );
}

export default App;
