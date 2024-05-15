const App = () => (
    <div>
        <Tweet
            name="Jesse"
            username="JesseB"
            date={new Date().toDateString()}
            message="I am a Peer Mentor"
        />
        <Tweet
            name="Nicole"
            username="NicoleH"
            date={new Date().toDateString()}
            message="I am also a Peer Mentor"
        />
        <Tweet
            name="Michael"
            username="MichaelL"
            date={new Date().toDateString()}
            message="We are all Peer Mentors"
        />
    </div>
)

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);