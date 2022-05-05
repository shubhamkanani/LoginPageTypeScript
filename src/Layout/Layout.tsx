import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

// import components

type Props = { children: ReactNode };

// provide className to layout for styling children wrapper
function Layout({ children }: Props) {
  return (
    <div className="main">
      <Header />
      {/* <OptionSelect pageSelected={currentPage}/> */}
      <div className="component" style={{ height: "100%" }}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

// Default Props
Layout.defaultProps = {
  className: "",
};
export default Layout;
