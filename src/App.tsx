import flowerGreen from "@assets/flower-green.png";
import flowerOrange from "@assets/flower-orange.png";
import pot from "@assets/pot.png";
import { Divider } from "@components/Divider";
import { Footer } from "@components/Footer";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import { Home } from "@sections/Home";
import { ListaPresentes } from "@sections/ListaPresentes";
import { Localizacao } from "@sections/Localizacao";
import cn from "classnames";
import { ToastContainer } from "react-toastify";

function App() {
  const { height, width } = useWindowDimensions();

  return (
    <div className="relative">
      <div
        className={cn(
          "fixed inset-0 -z-10 bg-cover bg-center",
          width > height + 50
            ? "bg-[url(./assets/bg-web.jpg)]"
            : "bg-[url(./assets/bg-mobile.jpg)]",
        )}
      />
      <div className="fixed size-full bg-black/40" />
      <Home />
      <div className="relative mx-auto max-w-300 shadow-2xl">
        <Divider />
        <div className="bg-off flex flex-col py-4">
          <div className="flex justify-evenly">
            <img src={flowerGreen} className="h-28 w-auto md:h-40" />
            <img src={pot} className="h-28 w-auto md:h-40" />
            <img src={flowerOrange} className="h-28 w-auto md:h-40" />
          </div>
          <Localizacao />
          <ListaPresentes />
          <Footer />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
