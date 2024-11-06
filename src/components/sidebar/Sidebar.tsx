"use client"

import styles from './Sidebar.module.css';
import Link from "next/link";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHome, faProjectDiagram, faUser, faCog, faBars } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed} `} onMouseEnter={toggleSidebar} onMouseLeave={toggleSidebar}>
            <h2 className={isOpen ? styles.logo : styles.logoClosed}>Mission Link</h2>

            <nav>
                <ul className={styles.navList}>
                    <li>
                        <Link legacyBehavior={true} href="/">
                            <a>
                                <FontAwesomeIcon icon={faHome} />
                                {isOpen && <span>Dashboard</span>}
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior={true} href="/projects">
                            <a>
                                <FontAwesomeIcon icon={faProjectDiagram} />
                                {isOpen && <span>Projects</span>}
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link  legacyBehavior={true} href="/users">
                            <a>
                                <FontAwesomeIcon icon={faUser} />
                                {isOpen && <span>Users</span>}
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link legacyBehavior={true} href="/settings">
                            <a>
                                <FontAwesomeIcon icon={faCog} />
                                {isOpen && <span>Settings</span>}
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;