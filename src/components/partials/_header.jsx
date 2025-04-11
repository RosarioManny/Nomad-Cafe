const Header = ({tag, img, img_alt="Header image", tag_alt="Page Title"}) => {

  return (
    <header className="relative">     
      <img 
        className="w-full h-full object " 
        src={img} 
        alt={img_alt} 
      />   
      <div className="absolute bottom-10">
        <img 
          src={tag} 
          alt={tag_alt} 
          className="w-auto min-h-24" 
        />
      </div>
    </header>
  )
}

export default Header