const Header = ({tag, img}) => {

  return (
    <div className="relative">     
      <img src={img} alt="blue square" />   
      <img src={tag} alt="red square" className="bg-red-300 drop-shadow-2xl drop-shadow-black absolute inset-x-0 bottom-10 z-1" /> 
    </div>
  )
}

export default Header