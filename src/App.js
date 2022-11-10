import "./App.css";

function App() {
  // opdracht 1
  const namen = ["Edwin", "Dina", "Mohammed", "Floppie"];
  // met behulp van map, zet de namen in een div
  const namenMap = namen.map((divNames) => <div>{divNames}</div>);
  console.log(namenMap);

  // opdracht 2
  const num = [3, 5, 4, 7, 8, 49];
  // met behulp van `map`, bereken het kwadraat van bovenstaande nummers en zet die in een div
  const kwadraatArray = num.map((arrayNum) => <div>{arrayNum * arrayNum}</div>);
  console.log(kwadraatArray);

  // opdracht 3
  const cijfers = [4, 5, 6, 4, 6, 7, 1, 8];

  // met behulp van ilter, selecteer alle cijfers van 6 of hoger
  // print het resultaat met console.log (je hebt hier dus geen map nodig)

  const filtered = cijfers.filter((cijfer) => {
    return cijfer >= 6;
  });
  console.log(filtered);

  // opdracht 4
  const studenten = [
    {
      naam: "Edwin",
      cijfer: 4,
    },
    {
      naam: "Dina",
      cijfer: 8,
    },
    {
      naam: "Mohammed",
      cijfer: 5,
    },
    {
      naam: "Floppie",
      cijfer: 7,
    },
  ];
  // met behulp van filter, selecteer de studenten die een cijfer van 6 of hoger hebben gehaald
  // vervolgens, met behulp van map, zet hun naam + cijfer in de html

  
  const filteredStudents = studenten.filter((studenten) => {
    return studenten.cijfer >= 6
  }).map((studenten) => {
    return <div>{studenten.naam}</div>
  })

  //How to write this, using an arrow function?
  // const filteredStudents = studenten.filter(function (studenten) {
  //   return studenten.cijfer >= 6
  // }).map(function (studenten) {
  //   return studenten.naam
  // })

  return (
    <div>
      <div>
        {/* geef hier het resultaat van de namen map (opdracht 1) weer }) */}
        {namenMap}
      </div>
      <div>
        {/* geef hier het resultaat van de kwadraten (opdracht 2) weer */}
        {kwadraatArray}
      </div>
      <div>
        {/* geef hier de studenten (opdracht 4) weer */}
        {filteredStudents}
      </div>
    </div>
  );
}

export default App;
