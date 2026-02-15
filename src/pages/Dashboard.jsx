import React from 'react';
import { ShoppingBag, TrendingUp, Users, DollarSign } from 'lucide-react';

const Dashboard = () => {
    const stats = [
        { title: 'Total Sales', value: '$12,450', icon: <ShoppingBag />, color: '#584ed2' },
        { title: 'Revenue', value: '$8,240', icon: <DollarSign />, color: '#1cc88a' },
        { title: 'Total Customers', value: '1,245', icon: <Users />, color: '#36b9cc' },
        { title: 'Profit', value: '$4,210', icon: <TrendingUp />, color: '#f6c23e' },
    ];

    const recentSales = [
        { id: '#S-001', customer: 'Alice Smith', item: 'Product A', amount: '$120.00', status: 'Success' },
        { id: '#S-002', customer: 'Bob Johnson', item: 'Product B', amount: '$85.50', status: 'Pending' },
        { id: '#S-003', customer: 'Charlie Brown', item: 'Product C', amount: '$210.00', status: 'Success' },
        { id: '#S-004', customer: 'Diana Ross', item: 'Product D', amount: '$45.00', status: 'Failed' },
        { id: '#S-005', customer: 'Edward Norton', item: 'Product E', amount: '$300.20', status: 'Success' },
    ];

    return (
        <div className="fade-in">
            <h1 className="page-title">Dashboard Overview</h1>

            <div className="stats-grid">
                {stats.map((stat) => (
                    <div key={stat.title} className="card stat-card">
                        <div className="stat-info">
                            <h3>{stat.title}</h3>
                            <div className="value">{stat.value}</div>
                        </div>
                        <div className="stat-icon" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                            {stat.icon}
                        </div>
                    </div>
                ))}
            </div>

            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '18px', fontWeight: '600' }}>Recent Sales</h2>
                    <button style={{
                        padding: '8px 16px',
                        backgroundColor: '#584ed2',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}>View All</button>
                </div>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentSales.map((sale) => (
                                <tr key={sale.id}>
                                    <td style={{ fontWeight: '600', color: '#584ed2' }}>{sale.id}</td>
                                    <td>{sale.customer}</td>
                                    <td>{sale.item}</td>
                                    <td>{sale.amount}</td>
                                    <td>
                                        <span className={`badge badge-${sale.status === 'Success' ? 'success' : sale.status === 'Pending' ? 'warning' : 'danger'}`}>
                                            {sale.status}
                                        </span>
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

export default Dashboard;
