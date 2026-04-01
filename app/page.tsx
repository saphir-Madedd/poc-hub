import { AppsCards } from "@/components/apps-card";
import { SystemCards } from "@/components/system-cards";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans ">
      <main className="flex flex-1 w-full max-w-360 flex-col items-center justify-between py-32   sm:items-start">
       <div className="flex flex-row py-[85px] px-[100px] w-full bg-system-card-hover-background">
          <SystemCards />
        </div>
        <div className="flex flex-col items-center justify-center gap-16 w-full mt-16">
          <div className="flex flex-col justify-center items-center gap-4">
          <h4 className="text-primary font-medium text-[32px]">Nos applications externes</h4>
          <p className="text-external-app-card-logo-placeholder text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dui a libero efficitur feugiat.<br/>
             Vivamus a nunc eget ligula facilisis fermentum.
          </p>
          </div>
           <div className="flex flex-row  w-full max-w-312.5 justify-center items-center">
          <AppsCards />
        </div>
        </div>
      
       
      </main>
    </div>
  );
}
