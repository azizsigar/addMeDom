export const createWelcomeElement = () => {
    const welcomePage = document.createElement('div');
    console.log("wellcomePage")
    welcomePage.innerHTML = String.raw`
      <h1>Welcome</h1>
        <p>In this game, you will be given a random dog photo. Your goal is to find the MARS photo among the other dog photos on the screen. 

        How to Play:
        
        Photo Selection: In each round, you will be shown a dog photo.
        Match the Photo: Find the same photo among the other photos on the screen.
        Score Points: 
        Attempt to find Mars with the fewest tries (world record: 0).
        Good luck!</p>
    `;
    return welcomePage;
  };