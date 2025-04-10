const Header = ({tag, img}) => {

  return (
    <div className="bg-red-100">
      <h1>{tag}</h1>
      <p>{img}</p>
    </div>
  )
}

export default Header