import logoMascaraObri from '../../../../_material/images/required-mask.png'
import logoMascaraReco from '../../../../_material/images/recommended-mask.png'
import logoToalhaObri from '../../../../_material/images/required-towel.png'
import logoToalhaReco from '../../../../_material/images/recommended-towel.png'
import logoBebedouroParcial from '../../../../_material/images/partial-fountain.png'
import logoBebedouroProibido from '../../../../_material/images/forbidden-fountain.png'
import logoVestiarioLiberado from '../../../../_material/images/required-lockerroom.png'
import logoVestiarioParcial from '../../../../_material/images/partial-lockerroom.png'
import logoVestiarioProibido from '../../../../_material/images/forbidden-lockerroom.png'
import './Card.css'
import { academiaProp } from '../../interfaces/types'
const Card = ({ academia }: { academia: academiaProp }) => {

  function removerTagsEspeciais(texto:string) {
    // Remove as tags HTML utilizando expressão regular
    let textoSemTags = texto.replace(/<[^>]+>/g, '');

    // Substitui o código especial "&#8211;" pelo caractere correspondente "-"
    textoSemTags = textoSemTags.replace(/&#8211;/g, '-');

    return textoSemTags;
  }

  return (
    <div className='cards'>
          <div className='card'>
            <div>
              {academia.opened ? <h4 className='h4Verde'>Aberto</h4> : <h4 className='h4Vermelho'>Fechado</h4>}
              <h2>{academia.title}</h2>
              {academia.content && removerTagsEspeciais(academia.content)}
            </div>
            <div className='traco'></div>
            <div className='divImagensCards'>
              {academia.mask == undefined ? null :
              academia.mask === 'required' ? <img className='imagens' src={logoMascaraObri}/> : <img className='imagens' src={logoMascaraReco}/>}
              {academia.towel == undefined ? null :
              academia.towel === 'required' ? <img className='imagens' src={logoToalhaObri}/> : <img className='imagens' src={logoToalhaReco}/>}
              {academia.fountain == undefined ? null :
              academia.fountain === 'partial' ? <img className='imagens' src={logoBebedouroParcial}/> : <img className='imagens' src={logoBebedouroProibido}/>}
              {academia.locker_room == undefined ? null :
                (() => {
                  if (academia.locker_room === 'allowed') {
                    return <img className='imagens' src={logoVestiarioLiberado} />;
                  } else if (academia.locker_room === 'partial') {
                    return <img className='imagens' src={logoVestiarioParcial} />;
                  } else if (academia.locker_room === 'closed') {
                    return <img className='imagens' src={logoVestiarioProibido} />;
                  }
                  return null;
                })()
              }
            </div>
            <div className='divTextosHorarios'>
              <div>
                <h3>{academia.schedules && academia.schedules.length > 0 ? academia.schedules[0].weekdays : 'Horários não disponíveis'}</h3>
                <p>{academia.schedules && academia.schedules.length > 0 ? academia.schedules[0].hour : ''}</p>
              </div>
            </div>
          </div>
        </div> 
  )
}

export default Card