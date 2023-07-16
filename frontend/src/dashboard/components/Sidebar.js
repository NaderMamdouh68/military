import { Link, Navigate, useNavigate } from "react-router-dom"
import "../styling/style.css"
import { removeAuthUser } from "../../assets/helper/Storage";

const Sidebar = () => {
const naviagte = useNavigate();
    const logOut = () => {
        removeAuthUser();
      };
      
    return (
        <div className="sidebar-container">
            <div className="sidebar-inner-container">
                <div className="px-6 pt-8">
                    <div className="section-1">
                      
                        <Link to={-1} className="search-button">
                            <svg className="svg-2 stroke-svg stroke-gray-300" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.25 6.75L4.75 12L10.25 17.25" />
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.25 12H5" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="px-6 pt-4">
                    <hr className="hr-1" />
                </div>
                <div className="px-6 pt-4">
                    <ul className="sidebar-menu">
                        <li className>
                            <div className="sidebar-menu-item">
                                <div className="sidebar-menu-item-custom">
                                    <div className="container-svg">
                                        <svg className="svg-1 stroke-svg" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z" />
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 9.25H13.75V5" />
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 15.25H14.25" />
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 12.25H14.25" />
                                        </svg>
                                    </div>
                                    <Link to={"appointments"} className="itemLink">المواد</Link>
                                </div>
                            </div>
                            <div className="dropdown-container">
                               
                            </div>
                        </li>
                        <li className>
                            <div className="sidebar-menu-item">
                                <div className="sidebar-menu-item-custom">
                                    <div className="container-svg">
                                        <svg className="svg-1 stroke-svg" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z" />
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 9.25H13.75V5" />
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 15.25H14.25" />
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 12.25H14.25" />
                                        </svg>
                                    </div>
                                    <Link to={"requests"} className="itemLink">جميع الدرجات </Link> 
                                  
                                </div>
                            </div>
                            <div className="dropdown-container">
                               
                            </div>
                        </li>
                        <li className>
                            <div className="sidebar-menu-item">
                                <div className="sidebar-menu-item-custom">
                                    <div className="container-svg">
                                        <svg className="svg-1 stroke-svg" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z" />
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 9.25H13.75V5" />
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 15.25H14.25" />
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 12.25H14.25" />
                                        </svg>
                                    </div>
                                    <div className="dropdown-container">
                                    <ul className="sidebar-dropdown">
                                    <Link to={"traveler"}  className="sidebar-dropdown-item">المستخدمين </Link>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                          
                        </li>
                    </ul>
                </div>
                <div className="px-6 pt-8">
                    <hr className="hr-1" />
                </div>
                <div className="px-6 pt-4 pb-8">
                    <ul className="list-type-none">
                        <li className="sidebar-menu-item">
                        
                          
                        </li>
                        <li className="sidebar-menu-item">
                            <div className="container-svg">
                                <svg className="svg-3 stroke-svg" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                                </svg>
                            </div>
                            <Link  to={"/"} className="itemLink" onClick={logOut}>تسجيل خروج</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Sidebar
