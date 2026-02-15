import React from 'react';
import { Save, Globe, DollarSign, Bell, Shield, User } from 'lucide-react';

const Settings = () => {
    return (
        <div className="fade-in">
            <h1 className="page-title">System Settings</h1>

            <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '30px' }}>
                {/* Settings Navigation */}
                <div className="card" style={{ padding: '10px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <button className="menu-link active" style={{ border: 'none', background: 'var(--primary-color)', color: 'white', justifyContent: 'flex-start', padding: '12px 15px', borderRadius: '8px', cursor: 'pointer' }}>
                            <Globe size={18} style={{ marginRight: '10px' }} /> General
                        </button>
                        <button className="menu-link" style={{ border: 'none', background: 'none', justifyContent: 'flex-start', padding: '12px 15px', borderRadius: '8px', cursor: 'pointer' }}>
                            <DollarSign size={18} style={{ marginRight: '10px' }} /> Currency
                        </button>
                        <button className="menu-link" style={{ border: 'none', background: 'none', justifyContent: 'flex-start', padding: '12px 15px', borderRadius: '8px', cursor: 'pointer' }}>
                            <Bell size={18} style={{ marginRight: '10px' }} /> Notifications
                        </button>
                        <button className="menu-link" style={{ border: 'none', background: 'none', justifyContent: 'flex-start', padding: '12px 15px', borderRadius: '8px', cursor: 'pointer' }}>
                            <Shield size={18} style={{ marginRight: '10px' }} /> Security
                        </button>
                        <button className="menu-link" style={{ border: 'none', background: 'none', justifyContent: 'flex-start', padding: '12px 15px', borderRadius: '8px', cursor: 'pointer' }}>
                            <User size={18} style={{ marginRight: '10px' }} /> Profile
                        </button>
                    </div>
                </div>

                {/* Settings Form */}
                <div className="card">
                    <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px' }}>General Settings</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div className="form-group">
                            <label>Company Name</label>
                            <input className="form-control" defaultValue="POSGo SaaS" />
                        </div>
                        <div className="form-group">
                            <label>Company Email</label>
                            <input className="form-control" defaultValue="info@posgosaas.com" />
                        </div>
                        <div className="form-group">
                            <label>System Phone</label>
                            <input className="form-control" defaultValue="+1 234 567 890" />
                        </div>
                        <div className="form-group">
                            <label>Default Language</label>
                            <select className="form-control">
                                <option>English</option>
                                <option>Spanish</option>
                                <option>French</option>
                                <option>Arabic (RTL)</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Company Address</label>
                        <textarea className="form-control" rows="3" defaultValue="123 POS Street, Suite 500, Tech City, 90210"></textarea>
                    </div>

                    <div style={{ borderTop: '1px solid var(--border-color)', marginTop: '20px', paddingTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                        <button style={{
                            backgroundColor: '#584ed2',
                            color: 'white',
                            border: 'none',
                            padding: '12px 30px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}>
                            <Save size={18} /> Save Settings
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
