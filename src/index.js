function displayPoem(response){
    new Typewriter('#poem', {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: ""
  });


}

function generatePoem(event){
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions")

    let apiKey = "c33e6a2o22a07a65f728fe3b854t0bd9";
    let context = "You are William Shakespare's assistant with expert knowledge in writing poetry. Your mission is to generate a 4 line poem in basic HTML and seperate each line with a <br/>. DO not include a title to the poems. Do not include quotes or (html). Make sure to follow the user's instructions. Sign the end of the poem with 'SheCodes AI' in <strong> element"
    let prompt = `User instructions: Generate an English poem about ${instructionsInput.value} `;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayPoem);

    console.log(`Prompt: ${prompt} ,and Context: ${context}`)



}

let poemFormElement = document.querySelector("#poem-generator")
poemFormElement.addEventListener("submit", generatePoem)