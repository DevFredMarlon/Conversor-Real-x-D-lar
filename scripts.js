const convertButton = document.querySelector(".convert-button")
//classe criada no HTML / chamando o doc no HTML / nome da classe criada no HTML convert-button
const currencySelect = document.querySelector(".currency-select")
// classe que seleciona a moeda escolhida
function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value // valor digitado no input a ser convertido
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday= 5.01 // valor do Dólar
    const euroToday= 5.30  // valor do Euro
    const bitcoinToday= 168.66753 // valor do Biticoin

    if(currencySelect.value == "dolar"){
        // se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency" ,
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
        //tipo de documento para formatar valores em Dólar
    }
    
    
    if(currencySelect.value == "euro"){
        // se o select estiver selecionado o valor de euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
           style: "currency",
           currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
        //tipo de documento para formatar valores em Euro
    }

    if(currencySelect.value == "bitcoin"){
        // se o select estiver selecionado o valor de bitcoin, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
           style: "currency",
           currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
        //tipo de documento para formatar valores em bitcoin
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
    //tipo de documento para formatar valores em Real
}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    //Função para trocar o nome da moeda
    const currencyImage = document.querySelector(".currency-img")
    // Função para trocar a imagem ( bandeira / país )

    if(currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/Dólar.png"
        //Se selecionar dolar, entre aqui
    }

    if(currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
        ////Se selecionar euro, entre aqui
    }

    if(currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
        ////Se selecionar bitcoin, entre aqui
    }

    convertValues()

}

currencySelect.addEventListener("change", changeCurrency )
// Ouvinte para o seletor de moeda - para fazer a auteração de bandeira
convertButton.addEventListener("click", convertValues)
// Ouvinte para o seletor de moeda - para fazer a converção de Valor