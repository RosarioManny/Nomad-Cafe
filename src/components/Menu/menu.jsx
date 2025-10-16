import Header from "../partials/_header";
import { theme } from "../../styles/themes";
import ScrollToAnchor from "../../utils/scrollToAnchor";
import { useMenuNavigation } from "../../utils/Menu/hooks/useMenuNavigation";
import { menuCategories } from "../../utils/Menu/constants/menuCategories";

const Menu = () => {
  const {
    category,
    handleCategoryChange,
    handleKeyDown
  } = useMenuNavigation(menuCategories);

  const currentCategory = menuCategories.find(cat => cat.id === category) || menuCategories[0];
  const ActiveComponent = currentCategory.Component;

  return (
    <>
      <ScrollToAnchor/>
      <Header
        id="Header"
        img={currentCategory.image}
        tag={currentCategory.tag}
        img_alt={currentCategory.img_alt}
      />
      
      {/* Skip link for screen readers */}
      <a 
        href="#menu-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white p-2 z-50 rounded shadow-lg"
      >
        Skip to menu content
      </a>

      <nav 
        className="sticky top-5 z-10 mx-4 my-8"
        aria-label="Menu categories"
      >
        <div className="
          bg-oatmilk shadow-lg rounded-xl 
          max-w-2xl mx-auto
          px-4 py-3
          flex flex-col md:flex-row sm:items-center justify-between
          gap-4
        ">
          {/* Menu Category Buttons */}
          <ul 
            className="flex flex-wrap justify-center gap-2 w-full "
            role="tablist"
            aria-label="Select menu category"
          >
            {menuCategories.map((menuCat) => (
              <li key={menuCat.id}>
                <button 
                  onClick={() => handleCategoryChange(menuCat.id)}
                  onKeyDown={(e) => handleKeyDown(e, menuCat.id)}
                  className={`
                    md:px-4 p-2 rounded-lg transition-all duration-300 ease-in-out 
                    focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2
                    whitespace-nowrap
                    ${theme.color.text.default}
                    ${category === menuCat.id 
                      ?  `${theme.color.background.accent}  shadow-md`
                      :  ` hover:bg-amber-200 hover:shadow-sm`
                    }
                  `}
                  role="tab"
                  aria-selected={category === menuCat.id}
                  aria-controls={`${menuCat.id}-menu`}
                  id={`${menuCat.id}-tab`}
                >
                  {menuCat.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Download Link */}
          <div className="flex justify-center sm:justify-end">
            <a 
              className="
                italic text-sm px-3 py-2 
                text-espresso hover:text-firebrick 
                transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded
                whitespace-nowrap
              " 
              href="/NomadCafe-Site/public/products/Large-Menu.jpg" 
              download="Nomad-Cafe-Menu.jpg"
              aria-label="Download full menu as image"
            >
              Download Full Menu
            </a>
          </div>
        </div>
      </nav>

      {/* Menu Content */}
      <main id="menu-content">
        <ActiveComponent />
      </main>
    </>
  );
};

export default Menu;