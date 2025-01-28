
function Finalizacao({ setMudarTela, setAcertos, acertos, setEscolhaDeck, escolhaDeck, classIcon, setInputInicio, inputInicio, setClassIcon}) {
    escolhaDeck = JSON.parse(escolhaDeck)

    return (
        <div className="footer">
            <FinalizacaoMensagem acertos={acertos} escolhaDeck={escolhaDeck} inputInicio={inputInicio} classIcon={classIcon} />
            <p className="concluidos">{classIcon.length}/{escolhaDeck.length} CONCLUÍDOS</p>
            <div className="icons">
                {classIcon.map((e) => {
                    return (
                        <ion-icon name={e.icon} class={e.class}></ion-icon>
                    )
                })}
            </div>
            <FinalizacaoButton setMudarTela={setMudarTela} escolhaDeck={escolhaDeck} setAcertos={setAcertos} setEscolhaDeck={setEscolhaDeck} setInputInicio={setInputInicio} setClassIcon={setClassIcon} classIcon={classIcon} />
        </div>
    )
}

function FinalizacaoMensagem({ acertos, escolhaDeck, inputInicio, classIcon }) {
    let mensagemFinal = null
    if (classIcon.length === escolhaDeck.length && acertos >= inputInicio) {
        mensagemFinal = (
            <>
                <p class="finalizacao">🥳 Parabéns!</p>
                <p class="finalizacao-mensagem">Você não esqueceu de nenhum flashcard!</p>
            </>
        )
    } else if (classIcon.length === escolhaDeck.length) {
        mensagemFinal = (
            <>
                <p class="finalizacao">😥 Putz...</p>
                <p class="finalizacao-mensagem">Ainda faltam alguns... Mas não desanime!</p>
            </>
        )
    }

    return mensagemFinal
}

function FinalizacaoButton({ setMudarTela, escolhaDeck, setAcertos, classIcon, setEscolhaDeck, setInputInicio, setClassIcon }) {
    if (classIcon.length === escolhaDeck.length) {
        return (
            <button onClick={() => { setMudarTela('telaprincipal'), setAcertos(0), setEscolhaDeck(null), setInputInicio(''), setClassIcon([]) }}>REINICIAR RECALL</button>
        )
    }
}

export default Finalizacao