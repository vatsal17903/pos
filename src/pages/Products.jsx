import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2, Printer, FileText, Settings } from 'lucide-react';

const Products = () => {
    const [products] = useState([
        { id: 1, name: 'Wireless Mouse', brand: 'Logitech', category: 'Accessories', quantity: 45, sku: 'MS-001', barcode: '123456', price: '$25.00' },
        { id: 2, name: 'Mechanical Keyboard', brand: 'Razer', category: 'Accessories', quantity: 12, sku: 'KB-002', barcode: '234567', price: '$85.00' },
        { id: 3, name: '27" Monitor', brand: 'Dell', category: 'Display', quantity: 8, sku: 'MN-003', barcode: '345678', price: '$210.00' },
        { id: 4, name: 'Laptop Pro', brand: 'Apple', category: 'Computers', quantity: 5, sku: 'LP-004', barcode: '456789', price: '$1200.00' },
        { id: 5, name: 'USB-C Hub', brand: 'Anker', category: 'Accessories', quantity: 25, sku: 'HB-005', barcode: '567890', price: '$45.00' },
    ]);

    return (
        <div className="fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                <h1 className="page-title" style={{ margin: 0 }}>Products List</h1>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="card" style={{ padding: '10px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <Printer size={18} />
                    </button>
                    <button className="card" style={{ padding: '10px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <FileText size={18} />
                    </button>
                    <button className="card" style={{ padding: '10px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <Settings size={18} />
                    </button>
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
                        Add New Product
                    </button>
                </div>
            </div>

            <div className="card">
                <div style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
                    <div style={{ flex: 1, position: 'relative' }}>
                        <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }} />
                        <input
                            className="form-control"
                            placeholder="Search products..."
                            style={{ paddingLeft: '40px' }}
                        />
                    </div>
                </div>

                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Brand</th>
                                <th>Category</th>
                                <th>Quantity</th>
                                <th>SKU</th>
                                <th>Price</th>
                                <th style={{ textAlign: 'right' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={product.id}>
                                    <td>{index + 1}</td>
                                    <td style={{ fontWeight: '600' }}>{product.name}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.category}</td>
                                    <td>
                                        <span className={`badge badge-${product.quantity > 10 ? 'success' : 'danger'}`}>
                                            {product.quantity}
                                        </span>
                                    </td>
                                    <td>{product.sku}</td>
                                    <td>{product.price}</td>
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

export default Products;
