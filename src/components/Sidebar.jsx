import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    ShoppingCart,
    Package,
    Users,
    FileText,
    Settings,
    Truck,
    BarChart3,
    LogOut
} from 'lucide-react';

const Sidebar = () => {
    const menuItems = [
        { name: 'Dashboard', icon: <LayoutDashboard className="menu-icon" />, path: '/' },
        { name: 'POS', icon: <ShoppingCart className="menu-icon" />, path: '/pos' },
        { name: 'Sales', icon: <ShoppingCart className="menu-icon" />, path: '/sales' },
        { name: 'Purchases', icon: <Truck className="menu-icon" />, path: '/purchases' },
        { name: 'Products', icon: <Package className="menu-icon" />, path: '/products' },
        { name: 'Customers', icon: <Users className="menu-icon" />, path: '/customers' },
        { name: 'Reports', icon: <BarChart3 className="menu-icon" />, path: '/reports' },
        { name: 'Quotations', icon: <FileText className="menu-icon" />, path: '/quotations' },
        { name: 'Settings', icon: <Settings className="menu-icon" />, path: '/settings' },
    ];

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-logo">POSGo SaaS</div>
            </div>
            <div className="sidebar-menu">
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.name} className="menu-item">
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => `menu-link ${isActive ? 'active' : ''}`}
                                end
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </NavLink>
                        </li>
                    ))}
                    <li className="menu-item" style={{ marginTop: 'auto' }}>
                        <a href="/logout" className="menu-link">
                            <LogOut className="menu-icon" />
                            <span>Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
