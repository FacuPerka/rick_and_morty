export default function Card({id,name, species, gender, image, onClose, origin, status}) {
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>Name: {name}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Status:{status}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' />
      </div>
   );
}
