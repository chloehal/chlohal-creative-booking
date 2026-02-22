import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const closeDrawer = () => {
    const checkbox = document.getElementById("mobile-drawer") as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  };

  return (
    <div className="drawer">
      <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <div className="navbar bg-base-100 border-b border-base-300 sticky top-0 z-40">
          <div className="container mx-auto px-4">
            <div className="flex-1">
              <Link to="/" className="text-2xl font-serif font-bold text-primary">
                ChloHal
              </Link>
            </div>

            {/* Desktop */}
            <div className="flex-none hidden md:flex">
              <ul className="menu menu-horizontal px-1 gap-1">
                <li>
                  <Link to="/" className={isActive("/") ? "active" : ""}>
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link to="/couture" className={isActive("/couture") ? "active" : ""}>
                    Atelier Couture
                  </Link>
                </li>
                <li>
                  <Link to="/linogravure" className={isActive("/linogravure") ? "active" : ""}>
                    Atelier Linogravure
                  </Link>
                </li>
                <li>
                  <Link to="/fleurs-en-perles" className={isActive("/fleurs-en-perles") ? "active" : ""}>
                    Fleurs en Perles
                  </Link>
                </li>
                <li>
                  <span className="opacity-50 cursor-default flex items-center gap-2">
                    Canevas
                    <span className="badge badge-sm badge-primary">Bientôt</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Mobile */}
            <div className="flex-none md:hidden">
              <label htmlFor="mobile-drawer" className="btn btn-square btn-ghost">
                <Menu className="h-5 w-5" />
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className="drawer-side z-50">
        <label htmlFor="mobile-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-72 min-h-full bg-base-200">
          <li className="mb-4">
            <span className="text-xl font-serif font-bold text-primary">ChloHal</span>
          </li>
          <li>
            <Link to="/" onClick={closeDrawer} className={isActive("/") ? "active" : ""}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/couture" onClick={closeDrawer} className={isActive("/couture") ? "active" : ""}>
              Atelier Couture
            </Link>
          </li>
          <li>
            <Link to="/linogravure" onClick={closeDrawer} className={isActive("/linogravure") ? "active" : ""}>
              Atelier Linogravure
            </Link>
          </li>
          <li>
            <Link to="/fleurs-en-perles" onClick={closeDrawer} className={isActive("/fleurs-en-perles") ? "active" : ""}>
              Fleurs en Perles
            </Link>
          </li>
          <li>
            <span className="opacity-50 cursor-default flex items-center gap-2">
              Canevas
              <span className="badge badge-sm badge-primary">Bientôt</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
