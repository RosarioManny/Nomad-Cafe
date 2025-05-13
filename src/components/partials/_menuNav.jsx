import { theme } from "../../styles/themes"
import { useParams, useLocation} from "react-router-dom"

const MenuNav = () => {
  // Get's the current url path
  const { pathname } = useLocation()
  const params = useParams()
  console.log(pathname)
  const underlinePath = {
    '/menu/breakfast': true,
    '/menu/beverages': true,
    '/menu/sweets': true,
  }

  console.log(underlinePath['/menu/breakfast'], pathname)
  return (
    <section className={`${theme.layout.column}`}>
      <div className={`${theme.layout.row} ${theme.text.subheading} space-x-10`}>
        <a href="/menu/breakfast">
          <p className={
            `${underlinePath['/menu/breakfast'] && pathname === '/menu/breakfast' 
            ? 
            `${theme.color.text.primary} ${theme.text.underline}` : `${theme.color.text.default}`}
            `}
          > 
            Foods 
          </p>
        </a>
        <a href="/menu/beverages">
          <p className={
            `${underlinePath['/menu/beverages'] && pathname === '/menu/beverages' 
            ? 
            `${theme.color.text.primary} ${theme.text.underline}` : `${theme.color.text.default}`}
            `}
          > 
            Drinks 
          </p>
        </a>
        <a href="/menu/sweets">
          <p className={
            `${underlinePath['/menu/sweets'] && pathname === '/menu/sweets' 
            ? 
            `${theme.color.text.primary} ${theme.text.underline}` : `${theme.color.text.default}`}
            `}
          > 
            Sweets 
          </p>
        </a>
      </div>
      <a className="italic text-sm m-2" href="/NomadCafe-Site/public/products/Large-Menu.jpg" download="Large-Menu.jpg">
       (Download Menus)
      </a>
    </section>
  )
}

export default MenuNav