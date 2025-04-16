const Header = ({tag, img, img_alt="Header image", tag_alt="Nomad Logo"}) => {

  return (
    <header className="relative mb-8 border-solid border-firebrick border-b-4">     
      <img 
        className="w-full h-full object " 
        src={img} 
        alt={img_alt} 
      />   
      <div className="absolute bottom-10">
        <img 
          src={tag} 
          alt={tag_alt} 
          className="fade-in z-2 w-auto min-h-24 filter-drop-shadow-lg filter-drop-shadow-black" 
        />
      </div>
    </header>
  )
}

export default Header