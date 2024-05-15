const App = () => (
    <div>
        <Person
            name="Betty"
            age={21}
            hobbies={["friends", "diary", "fashion"]}
        />
        <Person
            name="Caydin"
            age={27}
            hobbies={["accounting", "farming"]}
        />
        <Person
            name="Spongebob"
            age={20}
            hobbies={["blowing bubbles", "hanging out with friends"]}
        />
        <Person
            name="Athena"
            age={14}
            hobbies={["sleeping", "playing with toys", "eating"]}
        />
    </div>
);

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);