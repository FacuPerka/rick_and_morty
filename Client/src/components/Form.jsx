import { useState } from "react"
import validation from "./Validation";

const Form = ({ login }) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        validation({
            ...userData,
            [event.target.name]: event.target.value
        }, setErrors);
    }
    

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
      }      

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
                <input type="text" name="email" onChange={handleChange}/>
                    {errors.email && <p>{errors.email}</p>}
            <hr />
            <label htmlFor="password">Password: </label>
                <input type="password" name="password" onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
            <button>Submit</button>
        </form>
    )
}


export default Form