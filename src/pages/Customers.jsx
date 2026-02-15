import React from 'react';
import { Search, Plus, Edit, Trash2, Mail, Phone, MapPin } from 'lucide-react';

const Customers = () => {
    const customers = [
        { id: 1, name: 'Alice Smith', email: 'alice@example.com', phone: '+1 234 567 890', address: '123 Main St, New York', totalSales: '$1,250.00' },
        { id: 2, name: 'Bob Johnson', email: 'bob@example.com', phone: '+1 345 678 901', address: '456 Elm St, Chicago', totalSales: '$850.50' },
        { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', phone: '+1 456 789 012', address: '789 Oak St, Los Angeles', totalSales: '$2,100.00' },
        { id: 4, name: 'Diana Ross', email: 'diana@example.com', phone: '+1 567 890 123', address: '321 Pine St, Houston', totalSales: '$45.00' },
        { id: 5, name: 'Edward Norton', email: 'edward@example.com', phone: '+1 678 901 234', address: '654 Maple St, Phoenix', totalSales: '$300.20' },
    ];

    return (
        <div className="fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                <h1 className="page-title" style={{ margin: 0 }}>Customer Management</h1>
                <button style={{
                    backgroundColor: '#584ed2',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontWeight: '600',
                    cursor: 'pointer'
                }}>
                    <Plus size={18} />
                    Add New Customer
                </button>
            </div>

            <div className="card">
                <div style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
                    <div style={{ flex: 1, position: 'relative' }}>
                        <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }} />
                        <input
                            className="form-control"
                            placeholder="Search customers..."
                            style={{ paddingLeft: '40px' }}
                        />
                    </div>
                </div>

                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Customer Name</th>
                                <th>Contact Info</th>
                                <th>Address</th>
                                <th>Total Purchases</th>
                                <th style={{ textAlign: 'right' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer) => (
                                <tr key={customer.id}>
                                    <td>
                                        <div style={{ fontWeight: '600' }}>{customer.name}</div>
                                        <div style={{ fontSize: '12px', color: '#6c757d' }}>ID: #CUST-{customer.id.toString().padStart(3, '0')}</div>
                                    </td>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px' }}>
                                            <Mail size={14} color="#6c757d" /> {customer.email}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', marginTop: '4px' }}>
                                            <Phone size={14} color="#6c757d" /> {customer.phone}
                                        </div>
                                    </td>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px' }}>
                                            <MapPin size={14} color="#6c757d" /> {customer.address}
                                        </div>
                                    </td>
                                    <td>
                                        <div style={{ fontWeight: '700', color: '#1cc88a' }}>{customer.totalSales}</div>
                                    </td>
                                    <td style={{ textAlign: 'right' }}>
                                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                                            <button className="card" style={{ padding: '6px', color: '#36b9cc', cursor: 'pointer' }}>
                                                <Edit size={16} />
                                            </button>
                                            <button className="card" style={{ padding: '6px', color: '#e74a3b', cursor: 'pointer' }}>
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Customers;
