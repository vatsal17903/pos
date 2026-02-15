import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f4f7fa', padding: '8px 15px', borderRadius: '8px' }}>
                    <Search size={18} color="#6c757d" />
                    <input
                        type="text"
                        placeholder="Search..."
                        style={{ border: 'none', background: 'none', marginLeft: '10px', outline: 'none', fontSize: '14px' }}
                    />
                </div>
            </div>
            <div className="nav-right">
                <div style={{ position: 'relative', cursor: 'pointer' }}>
                    <Bell size={20} />
                    <span style={{
                        position: 'absolute',
                        top: '-5px',
                        right: '-5px',
                        backgroundColor: '#e74a3b',
                        color: 'white',
                        fontSize: '10px',
                        padding: '2px 5px',
                        borderRadius: '50%'
                    }}>3</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontWeight: '600', fontSize: '14px' }}>John Doe</div>
                        <div style={{ fontSize: '12px', color: '#6c757d' }}>Administrator</div>
                    </div>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#584ed2',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                    }}>
                        <User size={20} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
