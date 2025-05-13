import Header from "./partials/_header";
import { theme } from "../styles/themes";
import { useResponsive } from "../utils/responsoveProvider";
import ScrollToAnchor from "../utils/scrollToAnchor";
import  MenuNav  from "./partials/_menuNav";

const MenuSweets = () => {
  const isMobile = useResponsive();
  

  return (
    <>
      <ScrollToAnchor/>
      <Header
        id="Header"
        img={"/products/Nomad-Danishes-Full.jpg"}
        tag={"/icons-logos/Nomad-White-Sweets.webp"}
      />
      {/* Mini Nav */}
      <MenuNav />
      <div className="flex justify-center "> 
        <hr className={`${theme.layout.hr} ${theme.color.background.accent}`}/>
      </div>
      {/* Menu Items */}
      <section className={`${isMobile ? "" : "m-2 flex flex-col align-center items-center"}`}>
        <p>SWEETS</p>
      </section>
    </>
  );
};

export default MenuSweets;