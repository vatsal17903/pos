import React from 'react';
import { Search, FileText, Download, Eye, ExternalLink } from 'lucide-react';

const Sales = () => {
    const sales = [
        { id: '#S-001', customer: 'Alice Smith', date: '2026-02-15 14:30', amount: '$120.00', status: 'Completed', items: 3 },
        { id: '#S-002', customer: 'Bob Johnson', date: '2026-02-15 15:45', amount: '$85.50', status: 'Completed', items: 1 },
        { id: '#S-003', customer: 'Charlie Brown', date: '2026-02-16 09:15', amount: '$210.00', status: 'Completed', items: 5 },
        { id: '#S-004', customer: 'Diana Ross', date: '2026-02-16 10:20', amount: '$45.00', status: 'Cancelled', items: 2 },
        { id: '#S-005', customer: 'Edward Norton', date: '2026-02-16 11:10', amount: '$300.20', status: 'Completed', items: 4 },
    ];

    return (
        <div className="fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                <h1 className="page-title" style={{ margin: 0 }}>Sales History</h1>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="card" style={{ padding: '10px 15px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: '600' }}>
                        <Download size={18} /> Export CSV
                    </button>
                    <a href="/pos" style={{
                        backgroundColor: '#584ed2',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        textDecoration: 'none'
                    }}>
                        <ExternalLink size={18} />
                        Go to POS
                    </a>
                </div>
            </div>

            <div className="card">
                <div style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
                    <div style={{ flex: 1, position: 'relative' }}>
                        <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }} />
                        <input
                            className="form-control"
                            placeholder="Search by Order ID or Customer..."
                            style={{ paddingLeft: '40px' }}
                        />
                    </div>
                    <select className="form-control" style={{ width: '200px' }}>
                        <option>All Status</option>
                        <option>Completed</option>
                        <option>Cancelled</option>
                        <option>Pending</option>
                    </select>
                </div>

                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer Name</th>
                                <th>Date & Time</th>
                                <th>Items</th>
                                <th>Total Amount</th>
                                <th>Status</th>
                                <th style={{ textAlign: 'right' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sales.map((sale) => (
                                <tr key={sale.id}>
                                    <td style={{ fontWeight: '700', color: '#584ed2' }}>{sale.id}</td>
                                    <td>{sale.customer}</td>
                                    <td style={{ color: '#6c757d' }}>{sale.date}</td>
                                    <td>{sale.items} Items</td>
                                    <td style={{ fontWeight: '700' }}>{sale.amount}</td>
                                    <td>
                                        <span className={`badge badge-${sale.status === 'Completed' ? 'success' : 'danger'}`}>
                                            {sale.status}
                                        </span>
                                    </td>
                                    <td style={{ textAlign: 'right' }}>
                                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                                            <button className="card" style={{ padding: '6px', color: '#584ed2', cursor: 'pointer' }} title="View Invoice">
                                                <FileText size={16} />
                                            </button>
                                            <button className="card" style={{ padding: '6px', cursor: 'pointer' }} title="Details">
                                                <Eye size={16} />
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

export default Sales;
