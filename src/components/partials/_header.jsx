const Header = ({tag, img}) => {

  return (
    <div className="relative">     
      <img src={img} alt="blue square" />   
      <div className="absolute bottom-10 drop-shadow-md drop-shadow-black">
        <img src={tag} alt="red square" className="" />
      </div>
    </div>
  )
}

export default Header