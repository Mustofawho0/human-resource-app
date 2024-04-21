import { SidebarDashboard } from "~/components/core/SideBarDashboard";

export default function PositionLayout ({ children }) {
    return (
      <html lang="en">
        <body>
            <div className="grid grid-cols-12">
                <div className="col-span-2 ">
                    <SidebarDashboard />
                </div>
                <div className="col-span-8  h-[100vh]">
                    {children}
                </div>
            </div>
        </body>
      </html>
    );
  }