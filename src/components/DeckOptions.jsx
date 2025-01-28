function DeckOptions({setEscolhaDeck, escolhaDeck}) {
    const deckHTML = [
        {
            pergunta: 'O que significa HTML?',
            resposta: 'HyperText Markup Language'
        },
        {
            pergunta: 'Qual a função das tags no HTML?',
            resposta: 'Delimitar e estruturar os elementos de uma página web'
        },
        {
            pergunta: 'Qual tag é usada para criar links?',
            resposta: '<a>'
        },
        {
            pergunta: 'Qual é a tag principal que envolve todo o conteúdo visível de uma página?',
            resposta: '<body>'
        },
        {
            pergunta: 'Qual tag usamos para criar um parágrafo?',
            resposta: '<p>'
        },
        {
            pergunta: 'Como adicionamos uma imagem no HTML?',
            resposta: 'Usamos a tag <img> com os atributos src e alt'
        },
        {
            pergunta: 'Qual tag é usada para criar uma lista não ordenada?',
            resposta: '<ul>'
        },
        {
            pergunta: 'Qual é a função do atributo "id" em uma tag?',
            resposta: 'Identificar um elemento de forma única na página'
        }
    ];

    const deckCSS = [
        {
            pergunta: 'O que significa CSS?',
            resposta: 'Cascading Style Sheets'
        },
        {
            pergunta: 'Para que serve o CSS?',
            resposta: 'Para estilizar e definir o layout de elementos HTML'
        },
        {
            pergunta: 'Como aplicamos CSS em um arquivo HTML?',
            resposta: 'Usamos a tag <style> ou vinculamos um arquivo externo com <link>'
        },
        {
            pergunta: 'O que é um seletor no CSS?',
            resposta: 'É usado para selecionar elementos HTML que serão estilizados'
        },
        {
            pergunta: 'Qual propriedade usamos para mudar a cor de fundo de um elemento?',
            resposta: 'background-color'
        },
        {
            pergunta: 'Como deixamos um texto em negrito usando CSS?',
            resposta: 'Usamos a propriedade font-weight com o valor "bold"'
        },
        {
            pergunta: 'Qual a diferença entre "id" e "class" no CSS?',
            resposta: 'id é único para cada elemento, enquanto class pode ser usada em vários elementos'
        }
    ];

    const deckJavaScript = [
        {
            pergunta: 'O que é JavaScript?',
            resposta: 'Uma linguagem de programação usada para criar interatividade em páginas web'
        },
        {
            pergunta: 'Onde podemos inserir JavaScript em um arquivo HTML?',
            resposta: 'Dentro das tags <script>, no <head> ou no final do <body>'
        },
        {
            pergunta: 'Como declaramos uma variável em JavaScript?',
            resposta: 'Usando var, let ou const'
        },
        {
            pergunta: 'O que é um array em JavaScript?',
            resposta: 'Uma estrutura de dados usada para armazenar uma lista de elementos'
        },
        {
            pergunta: 'Qual a diferença entre == e === em JavaScript?',
            resposta: '== compara valores, enquanto === compara valores e tipos'
        },
        {
            pergunta: 'Como criamos uma função em JavaScript?',
            resposta: 'Usamos a palavra-chave function ou uma arrow function (=>)'
        },
        {
            pergunta: 'O que é um objeto em JavaScript?',
            resposta: 'Uma coleção de pares chave-valor que representam propriedades e métodos'
        }
    ];

    const deckReact = [
        {
            pergunta: 'O que é JSX?',
            resposta: 'Uma extensão de linguagem do JavaScript'
        }, {
            pergunta: 'O React é __',
            resposta: 'Uma biblioteca JavaScript para construção de interfaces'
        }, {
            pergunta: 'Componentes devem iniciar com __',
            resposta: 'Letra maiúscula'
        }, {
            pergunta: 'Podemos colocar __ dentro do JSX',
            resposta: 'Expressões'
        }, {
            pergunta: 'O ReactDOM nos ajuda __',
            resposta: 'Interagindo com a DOM para colocar componentes React na mesma'
        }, {
            pergunta: 'Usamos o npm para __',
            resposta: 'Gerenciar os pacotes necessários e suas dependências'
        }
    ];

    return (
        <form>
            <select name="plataforma" className="option" onChange={e => {setEscolhaDeck(e.target.value)}}>
                <option value={JSON.stringify(null)}>Escolha seu deck</option>
                <option value={JSON.stringify(deckHTML)}>HTML</option>
                <option value={JSON.stringify(deckCSS)}>CSS</option>
                <option value={JSON.stringify(deckJavaScript)}>JavaScript</option>
                <option value={JSON.stringify(deckReact)}>React</option>
            </select>
        </form>
    )
}

export default DeckOptions