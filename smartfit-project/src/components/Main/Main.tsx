import './Main.css'
import { GlobalContext } from "../../contexts/GlobalContext";
import logoRelogio from '../../../../_material/images/icon-hour.png'
import logoMascaraObri from '../../../../_material/images/required-mask.png'
import logoMascaraReco from '../../../../_material/images/recommended-mask.png'
import logoToalhaObri from '../../../../_material/images/required-towel.png'
import logoToalhaReco from '../../../../_material/images/recommended-towel.png'
import logoBebedouroParcial from '../../../../_material/images/partial-fountain.png'
import logoBebedouroProibido from '../../../../_material/images/forbidden-fountain.png'
import logoVestiarioLiberado from '../../../../_material/images/required-lockerroom.png'
import logoVestiarioParcial from '../../../../_material/images/partial-lockerroom.png'
import logoVestiarioProibido from '../../../../_material/images/forbidden-lockerroom.png'
import { useContext } from 'react'
import Card from '../Cards/Card';
import { academiaProp } from '../../interfaces/types';

const Main = ({ academia }: { academia: academiaProp }) => {
  const context = useContext(GlobalContext);
  const { academias, sum, setSum, currentPage, setCurrentPage, totalPages } = context || { academias: [], sum: 0, setSum: () => {}, currentPage: 1, setCurrentPage: () => {}, totalPages: 1 };
  
  const ITEMS_PER_PAGE = 6;
  
  const academiasUnicas = academias.filter((academia, index, self) =>
  index === self.findIndex(a => a.id === academia.id)
  );

  const currentItems = academiasUnicas.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  function retornaUnidadesAbertas() {
    let contador = 0;
    academias.forEach((academia) => {
      if (academia.opened === true) {
        contador++;
      }
    });

    setSum(contador); // Atualiza o estado sum no contexto
  }

  function limpaUnidadesAbertas() {
    let contador = 0; // Inicializa o contador
    setSum(contador); // Atualiza o estado sum no contexto
  }


  return (
    <div className="containerMain">
        <div>
          <h1>
              REABERTURA <br /> SMART FIT
          </h1>
          <p>
              O horário de funcionamento das nossas unidades está seguindo os decretos de cada municipio.
              Por isso, confira aqui <br /> se a sua unidade está aberta e as medidas de segurança que estamos seguindo.
          </p>

        </div>
        <div className='divHorario'>
            <div className='divRelogio'>
              <img className='relogio' src={logoRelogio}/>
              <p>Horário</p>
            </div>
            <div className='divPeriodo'>
              <h1 className='h1Treino'>
                Qual período quer treinar?
              </h1>
              <div className='traco'></div>
              <div className='divAgenda'>
                <div className='divCheckBox'>
                  <input type='radio' name='periodo'/>
                  <p>Manhã</p>
                </div>
                <p>06:00 às 12:00</p>
              </div>
              <div className='traco'></div>
              <div className='divAgenda'>
                <div className='divCheckBox'>
                  <input type='radio' name='periodo'/>
                  <p>Tarde</p>
                </div>
                <p>12:01 às 18:00</p>
              </div>
              <div className='traco'></div>
              <div className='divAgenda'>
                <div className='divCheckBox'>
                  <input type='radio' name='periodo'/>
                  <p>Noite</p>
                </div>
                <p>18:01 às 23:00</p>
              </div>
            </div>
            <div className='traco'></div>
            <div className='divUnidades'>
              <div className='divCheckBox'>
                <input type='checkbox'/>
                <p>Exibir unidades fechadas</p>
              </div>
              <p>Resultados encontrados: {sum}</p>
            </div>
            <div className='divBotoes'>
              <button className='botaoAmarelo' onClick={retornaUnidadesAbertas}>ENCONTRAR UNIDADE</button>
              <button className='botaoBranco' onClick={limpaUnidadesAbertas}>LIMPAR</button>
            </div>
        </div>
        <div className='divAvisos'>
          <div className='divsInternas'>
            <h3>Máscara</h3>
            <div className='divImagens'>
              <img className='imagens' src={logoMascaraObri}/>
              <img className='imagens' src={logoMascaraReco}/>
            </div>
            <div className='divTextos'>
              <p>Obrigatório</p>
              <p>Recomendado</p>
            </div>
          </div>
          <div className='divsInternas'>
            <h3>Toalha</h3>
            <div className='divImagens'>
              <img className='imagens' src={logoToalhaObri}/>
              <img className='imagens' src={logoToalhaReco}/>
            </div>
            <div className='divTextos'>
              <p>Obrigatório</p>
              <p>Recomendado</p>
            </div>
          </div> 
          <div className='divsInternas'>
            <h3>Bebedouro</h3>
            <div className='divImagens'>
              <img className='imagens' src={logoBebedouroParcial}/>
              <img className='imagens' src={logoBebedouroProibido}/>
            </div>
            <div className='divTextos'>
              <p>Parcial</p>
              <p>Proibido</p>
            </div>
          </div>
          <div className='divsInternas'>
            <h3>Máscara</h3>
            <div className='divImagens'>
              <img className='imagens' src={logoVestiarioLiberado}/>
              <img className='imagens' src={logoVestiarioParcial}/>
              <img className='imagens' src={logoVestiarioProibido}/>
            </div>
            <div className='divTextos'>
              <p>Liberado</p>
              <p>Parcial</p>
              <p>Proibido</p>
            </div>
          </div>   
        </div>
        <div className='cards'>
          {currentItems.map((academia:academiaProp) => {
            return <Card key={academia.id} academia={academia}/>
          })}     
        </div>
        <div>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
          <span>{currentPage} / {totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div> 
    </div>
  )
}

export default Main