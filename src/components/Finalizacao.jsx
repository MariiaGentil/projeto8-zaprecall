
function Finalizacao({receberRespostas}) {
    console.log(receberRespostas)

    return (
        <div className="footer">
            <p className="finalizacao">🥳 Parabéns!</p>
            <p className="finalizacao-mensagem">Você não esqueceu de nenhum flashcard!</p>
            <p className="concluidos">0/4 CONCLUÍDOS</p>
            <div className="icons">
                <ion-icon name="close-circle" className="nao"></ion-icon>
                <ion-icon name="close-circle" className="nao"></ion-icon>
                <ion-icon name="close-circle" className="nao"></ion-icon>
                <ion-icon name="close-circle" className="nao"></ion-icon>
            </div>
            <button>REINICIAR RECALL</button>
        </div>
    )

}


export default Finalizacao