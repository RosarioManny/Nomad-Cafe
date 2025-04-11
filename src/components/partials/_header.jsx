const Header = ({tag, img}) => {

  return (
    <div className="relative">     
      <img src={img} alt="blue square" />   
      <div className="absolute bottom-10">
        <img src={tag} alt="red square" className="" />
      </div>
    </div>
  )
}

export default Header