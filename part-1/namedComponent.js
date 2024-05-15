const namedComponent = (props) => {
    return <p>My name is {props.name}</p>
}

reactDOM.render(<namedComponent />,
    document.getElementById("root"));