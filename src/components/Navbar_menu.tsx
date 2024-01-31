import NavbarTop from "./navbar_top";
import { Button } from "./ui/button";
import refaim_badge from "/refaim_badge.png";

function Navbar_menu() {
  return (
    <nav className="min-w-full max-h-[150px]">
      <div>
        <ul className="flex flex-row justify-between p-5 place-items-center flex-wrap">
          <li>
            <div className="flex flex-1 justify-center place-items-center">
              <img src={refaim_badge} className="h-16" alt="refaim-badge" />
              <p className="text-white font-medium">עמותת רפאים</p>
            </div>
          </li>
          <li>
            <NavbarTop />
          </li>
          <li>
            <Button
              variant={"default"}
              className="bg-green-900 hover:bg-green-700 text-white ml-2"
              name="join-foundation"
            >
              להצטרפות לעמותה
            </Button>
            <Button variant={"destructive"} name="donate-foundation">
              לתרומה
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar_menu;
