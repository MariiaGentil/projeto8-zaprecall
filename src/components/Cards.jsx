import { useState } from "react"

function Cards({ escolhaDeck, setAcertos, acertos, setConcluidos, concluidos }) {
    escolhaDeck = JSON.parse(escolhaDeck)
    return (
        <>
            {escolhaDeck.map((elem, i) => (
                <Card i={i} elem={elem} setAcertos={setAcertos} acertos={acertos} setConcluidos={setConcluidos} concluidos={concluidos} />
            ))}
        </>
    )
}

function Card({ elem, i, setAcertos, acertos, setConcluidos, concluidos }) {
    const [estadoCard, setEstadoCard] = useState('card')
    return (
        <div class={estadoCard}>
            <MudarCard estadoCard={estadoCard} i={i} setEstadoCard={setEstadoCard} elem={elem} setAcertos={setAcertos} acertos={acertos} setConcluidos={setConcluidos} concluidos={concluidos} />
        </div>
    )
}

function MudarCard({ estadoCard, i, setEstadoCard, elem, setAcertos, acertos, setConcluidos, concluidos }) {
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
                <div class="alternativas">
                    <button class="resposta nao" onClick={() => { setConcluidos(concluidos + 1), setEstadoCard('card respondido') }}>Não lembrei</button>
                    <button class="resposta quase" onClick={() => { setConcluidos(concluidos + 1), setEstadoCard('card respondido') }}>Quase não lembrei</button>
                    <button class="resposta sim" onClick={() => { setConcluidos(concluidos + 1); setAcertos(acertos + 1), setEstadoCard('card respondido') }}>Zap!</button>
                </div>
            </>
        )
    } else {
        card = (
            <>
                <p class="nao">Pergunta {++i}</p>
                <ion-icon name="close-circle" class="nao"></ion-icon>
            </>
        )
    }

    return card
}




export default Cards