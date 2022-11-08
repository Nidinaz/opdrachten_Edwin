import './App.css';

function App() {
  // opdracht 1
  const namen = ["Edwin", "Dina", "Mohammed", "Floppie"]
  // met behulp van map, zet de namen in een div
  
  
  // opdracht 2
  const num = [3, 5, 4, 7, 8, 49]
  // met behulp van `map`, bereken het kwadraat van bovenstaande nummers en zet die in een div


  // opdracht 3
  const cijfers = [4, 5, 6, 4, 6, 7, 1, 8]
  // met behulp van filter, selecteer alle cijfers van 6 of hoger
  // print het resultaat met console.log (je hebt hier dus geen map nodig)

  
  // opdracht 4
  const studenten = [
    {
      naam: "Edwin",
      cijfer: 4
    },
    {
      naam: "Dina",
      cijfer: 8
    },
    {
      naam: "Mohammed",
      cijfer: 5
    },
    {
      naam: "Floppie",
      cijfer: 7
    }
  ]
  // met behulp van filter, selecteer de studenten die een cijfer van 6 of hoger hebben gehaald
  // vervolgens, met behulp van map, zet hun naam + cijfer in de html

  return (
    <div>
      <div>
        {/* geef hier het resultaat van de namen map (opdracht 1) weer */}
      </div>
      <div>
        {/* geef hier het resultaat van de kwadraten (opdracht 2) weer */}
      </div>
      <div>
        {/* geef hier de studenten (opdracht 4) weer */}
      </div>
    </div>
  );
}

export default App;
