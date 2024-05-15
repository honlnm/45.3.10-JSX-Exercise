const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Nicole" />
    </div>
)

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);