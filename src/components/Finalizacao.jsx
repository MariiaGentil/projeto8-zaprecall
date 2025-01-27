
function Finalizacao({setMudarTela, acertos, escolhaDeck, concluidos}) {
    escolhaDeck = JSON.parse(escolhaDeck)
    console.log(acertos)
    console.log(concluidos)
    return (
        <div className="footer">
            {/* <p className="finalizacao">🥳 Parabéns!</p>
            <p className="finalizacao-mensagem">Você não esqueceu de nenhum flashcard!</p> */}
            <p className="concluidos">{concluidos}/{escolhaDeck.length} CONCLUÍDOS</p>
            <div className="icons">
                {/* {concluidos.map()} */}
                {/* <ion-icon name="close-circle" className="nao"></ion-icon>
                <ion-icon name="close-circle" className="nao"></ion-icon>
                <ion-icon name="close-circle" className="nao"></ion-icon>
                <ion-icon name="close-circle" className="nao"></ion-icon> */}
            </div>
            {/* <button>REINICIAR RECALL</button> */}
        </div>
    )
}


export default Finalizacao