import React from "react";
import Navbar1 from "./Navbar1";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar1 />
      <div>{children}</div>
    </>
  );
};

export default Layout;

// import React from "react";
// import SideMenu from "./SideMenu";

// function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="flex flex-col h-screen overflow-hidden">
//       <div className="fixed top-0 left-0 w-64 h-full bg-gray-900 overflow-y-auto sm:w-48 md:w-64 lg:w-64">
//         <div className="w-full h-16 flex items-center justify-center text-white font-bold text-xl">
//           <SideMenu />
//         </div>
//       </div>
//       <div className="flex-1 flex-grow h-full overflow-y-auto sm:px-2 md:px-4 lg:px-4">
//         <div className="p-4">{children}</div>
//       </div>
//     </div>
//   );
// }

// export default Layout;
