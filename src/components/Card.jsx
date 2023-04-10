import { Link } from "react-router-dom";

export default function Card({id,name, species, gender, image, onClose, origin, status}) {
   return (
      <div className="card-container">
         <button onClick={() => onClose(id)} className="close-button">X</button>
         <Link to={`/detail/${id}`} className="name-link">
            <h2>Name: {name}</h2>
         </Link>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Status:{status}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' />
      </div>
   );
}

