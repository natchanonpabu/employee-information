import Sidebar from "./sidebar";
import Header from "./header";
import Content from "./content";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <div className="w-[calc(100vw_-_3.5rem)] overflow-auto">
        <Header />
        <Content>{children}</Content>
      </div>
    </div>
  );
};

export default MainLayout;
