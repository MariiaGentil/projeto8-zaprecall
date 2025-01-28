import { useState } from "react"

function Cards({ escolhaDeck, setAcertos, acertos, setClassIcon, classIcon }) {
    escolhaDeck = JSON.parse(escolhaDeck)
    return (
        <>
            {escolhaDeck.map((elem, i) => (
                <Card i={i} elem={elem} setAcertos={setAcertos} acertos={acertos}  setClassIcon={setClassIcon} classIcon={classIcon} />
            ))}
        </>
    )
}

function Card({ elem, i, setAcertos, acertos, setClassIcon, classIcon }) {
    const [estadoCard, setEstadoCard] = useState('card')
    return (
        <div className={estadoCard}>
            <MudarCard estadoCard={estadoCard} i={i} setEstadoCard={setEstadoCard} elem={elem} setAcertos={setAcertos} acertos={acertos}  setClassIcon={setClassIcon} classIcon={classIcon} />
        </div>
    )
}

function MudarCard({ estadoCard, i, setEstadoCard, elem, setAcertos, acertos, setClassIcon, classIcon }) {
    const icons = [{ class: 'nao', icon: 'close-circle' }, { class: 'quase', icon: 'help-circle' }, { class: 'sim', icon: 'checkmark-circle' }]
    let card = null;
    if (estadoCard === 'card') {
        card = (
            <>
                <p>Pergunta {++i}</p>
                <ion-icon name="play-outline" onClick={() => { setEstadoCard('card open') }}></ion-icon>
            </>
        )
    } else if (estadoCard === 'card open') {
        card = (
            <>
                <p>{elem.pergunta}</p>
                <ion-icon name="repeat-outline" onClick={() => { setEstadoCard('card open respostas') }} ></ion-icon>
            </>
        )
    } else if (estadoCard === 'card open respostas') {
        card = (
            <>
                <p>{elem.resposta}</p>
                <div className="alternativas">
                    <button className="resposta nao" onClick={() => { setEstadoCard('card respondido'), setClassIcon([...classIcon, { ...icons[0], index: i }]) }}>Não lembrei</button>
                    <button className="resposta quase" onClick={() => { setEstadoCard('card respondido'), setClassIcon([...classIcon, { ...icons[1], index: i }]) }}>Quase não lembrei</button>
                    <button className="resposta sim" onClick={() => { setAcertos(acertos + 1), setEstadoCard('card respondido'), setClassIcon([...classIcon, { ...icons[2], index: i }]) }}>Zap!</button>
                </div>
            </>
        )
    } else {
        let icone = classIcon.filter(c => c.index === i)[0].icon
        let classe = classIcon.filter(c => c.index === i)[0].class
        card = (
            <>
                <p className={classe}>Pergunta {++i}</p>
                <ion-icon name={icone} class={classe}></ion-icon>
            </>
        )
    }

    return card
}

export default Cards