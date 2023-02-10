import { InputText } from 'primereact/inputtext';
import { StyleClass } from 'primereact/styleclass';
import { classNames } from 'primereact/utils';
import { useRef } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { env } from '../env';

type MenuItemProps = { name: string; icon: string; path: string };
function MenuItem({ name, icon, path }: MenuItemProps) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        classNames({
          'surface-100': isActive,
          'flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full no-underline mb-2':
            true,
        })
      }
    >
      <i className={`pi mr-2 ${icon}`} style={{ fontSize: '1.2rem' }}></i>
      <span className="font-medium">{name}</span>
    </NavLink>
  );
}

export function Layout() {
  const sideMenuRef = useRef(null);
  const teamMenuRef = useRef(null);
  const profileMenuRef = useRef(null);
  return (
    <div className="min-h-screen flex relative lg:static surface-ground">
      <div
        id="app-sidebar"
        className="surface-section h-screen lg:h-auto hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
        style={{ width: '280px' }}
      >
        <div className="flex flex-column h-screen">
          <div
            className="flex align-items-center px-5 flex-shrink-0"
            style={{ height: '60px' }}
          >
            <img
              src="https://via.placeholder.com/200x30.png"
              alt="hyper-700"
              height={30}
            />
          </div>
          <div className="overflow-y-auto">
            <ul className="list-none p-3 m-0">
              <li>
                <MenuItem path={'/dashboard'} name="Dashboard" icon="pi-home" />
              </li>
              <li>
                <MenuItem
                  path={'/privilege'}
                  name="Privilege"
                  icon="pi-credit-card"
                />
              </li>
              <li>
                <MenuItem path={'/coupon'} name="Coupon" icon="pi-ticket" />
              </li>

              <li>
                <StyleClass
                  nodeRef={teamMenuRef}
                  selector="@next"
                  enterClassName="hidden"
                  enterActiveClassName="slidedown"
                  leaveToClassName="hidden"
                  leaveActiveClassName="slideup"
                >
                  <div
                    ref={teamMenuRef}
                    className="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                  >
                    <i className="pi pi-chart-line mr-2"></i>
                    <span className="font-medium">Teams</span>
                    <i className="pi pi-chevron-down ml-auto mr-1"></i>
                  </div>
                </StyleClass>
                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                  <li>
                    <MenuItem
                      path={'/users'}
                      name="Manage Users"
                      icon="pi-users"
                    />
                  </li>
                  <li>
                    <MenuItem
                      path={'/users/organization'}
                      name="Manage Organization"
                      icon="pi-users"
                    />
                  </li>
                  <li>
                    <MenuItem
                      path={'/users/team'}
                      name="Manage Team"
                      icon="pi-users"
                    />
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mt-auto mx-3">
            <hr className="mb-3 border-top-1 border-bluegray-200" />
            <ul className="list-none p-2 m-0 hidden">
              <li>
                <div className="flex align-items-center p-3 text-700 border-round transition-duration-150 transition-colors w-full">
                  <span className="font-medium">{env.environment}</span>
                </div>
              </li>
              <li>
                <a className="flex align-items-center cursor-pointer p-3 hover:surface-100 text-700 border-round transition-duration-150 transition-colors w-full">
                  <i className="pi pi-user mr-2"></i>
                  <span className="font-medium">Profile</span>
                </a>
              </li>
              <li>
                <a className="flex align-items-center cursor-pointer p-3 hover:surface-100 text-700 border-round transition-duration-150 transition-colors w-full">
                  <i className="pi pi-cog mr-2"></i>
                  <span className="font-medium">Settings</span>
                </a>
              </li>
              <li>
                <MenuItem path={'/logout'} name="Sign Out" icon="pi-sign-out" />
              </li>
            </ul>
            <StyleClass
              nodeRef={profileMenuRef}
              selector="@prev"
              enterClassName="hidden"
              enterActiveClassName="fadein"
              leaveToClassName="hidden"
              leaveActiveClassName="fadeout"
            >
              <a
                ref={profileMenuRef}
                className="my-3 px-3 py-2 flex align-items-center hover:surface-100 text-700 border-round cursor-pointer transition-duration-150 transition-colors w-full"
              >
                <img
                  src="https://i.pravatar.cc/150"
                  alt="avatar-f-1"
                  className="mr-2"
                  style={{ width: '28px', height: '28px' }}
                />
                <span className="font-medium">Amy Elsner</span>
                <i className="pi pi-chevron-up ml-auto"></i>
              </a>
            </StyleClass>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex flex-column relative flex-auto">
        <div
          className="z-10 flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static"
          style={{ height: '60px' }}
        >
          <div className="flex">
            <StyleClass
              nodeRef={sideMenuRef}
              selector="#app-sidebar"
              enterClassName="hidden"
              enterActiveClassName="fadeinleft"
              leaveToClassName="hidden"
              leaveActiveClassName="fadeoutleft"
              hideOnOutsideClick
            >
              <a
                ref={sideMenuRef}
                className="cursor-pointer block lg:hidden text-700 mr-3"
              >
                <i className="pi pi-bars text-4xl"></i>
              </a>
            </StyleClass>
            <span className="p-input-icon-left">
              <i className="pi pi-search"></i>
              <InputText className="border-none" placeholder="Search" />
            </span>
          </div>
        </div>

        <div className="flex flex-column relative flex-auto p-4 h-screen overflow-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
