import React, { useState } from 'react';
import { Search, Plus, Minus, Trash2, UserPlus } from 'lucide-react';

const POS = () => {
    const [cart, setCart] = useState([]);
    const [categories] = useState(['All', 'Accessories', 'Computers', 'Display', 'Storage']);
    const [activeCategory, setActiveCategory] = useState('All');

    const products = [
        { id: 1, name: 'Wireless Mouse', price: 25.00, category: 'Accessories', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Mechanical Keyboard', price: 85.00, category: 'Accessories', image: 'https://via.placeholder.com/150' },
        { id: 3, name: '27" Monitor', price: 210.00, category: 'Display', image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Laptop Pro', price: 1200.00, category: 'Computers', image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'USB-C Hub', price: 45.00, category: 'Accessories', image: 'https://via.placeholder.com/150' },
        { id: 6, name: 'External SSD', price: 120.00, category: 'Storage', image: 'https://via.placeholder.com/150' },
    ];

    const addToCart = (product) => {
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const updateQuantity = (id, delta) => {
        setCart(cart.map(item => {
            if (item.id === id) {
                const newQty = item.quantity + delta;
                return newQty > 0 ? { ...item, quantity: newQty } : item;
            }
            return item;
        }));
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = total * 0.1; // 10% tax example

    return (
        <div className="fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h1 className="page-title" style={{ margin: 0 }}>Point of Sale</h1>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <div className="form-group" style={{ margin: 0, width: '300px' }}>
                        <div style={{ position: 'relative' }}>
                            <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }} />
                            <input className="form-control" placeholder="Search products..." style={{ paddingLeft: '40px' }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="pos-container">
                {/* Products Grid */}
                <div className="pos-products">
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', overflowX: 'auto', paddingBottom: '5px' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                style={{
                                    padding: '8px 20px',
                                    borderRadius: '50px',
                                    border: activeCategory === cat ? 'none' : '1px solid var(--border-color)',
                                    backgroundColor: activeCategory === cat ? 'var(--primary-color)' : 'white',
                                    color: activeCategory === cat ? 'white' : 'var(--dark-color)',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="product-grid">
                        {products.filter(p => activeCategory === 'All' || p.category === activeCategory).map(product => (
                            <div key={product.id} className="product-item" onClick={() => addToCart(product)}>
                                <img src={product.image} alt={product.name} className="product-img" />
                                <span className="product-name">{product.name}</span>
                                <span className="product-price">${product.price.toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cart Sidebar */}
                <div className="pos-cart">
                    <div className="cart-header">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>Current Order</span>
                            <button style={{ backgroundColor: '#f8f9fc', border: 'none', padding: '5px 10px', borderRadius: '6px', color: 'var(--primary-color)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <UserPlus size={16} /> Add Customer
                            </button>
                        </div>
                    </div>

                    <div className="cart-items">
                        {cart.length === 0 ? (
                            <div style={{ textAlign: 'center', padding: '50px 20px', color: '#6c757d' }}>
                                Your cart is empty
                            </div>
                        ) : (
                            cart.map(item => (
                                <div key={item.id} className="cart-item">
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: '600' }}>{item.name}</div>
                                        <div style={{ fontSize: '12px', color: '#6c757d' }}>${item.price.toFixed(2)}</div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '0 15px' }}>
                                        <button onClick={() => updateQuantity(item.id, -1)} style={{ border: 'none', background: '#f8f9fc', width: '24px', height: '24px', borderRadius: '4px', cursor: 'pointer' }}><Minus size={14} /></button>
                                        <span style={{ fontWeight: '600', width: '20px', textAlign: 'center' }}>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)} style={{ border: 'none', background: '#f8f9fc', width: '24px', height: '24px', borderRadius: '4px', cursor: 'pointer' }}><Plus size={14} /></button>
                                    </div>
                                    <div style={{ fontWeight: '700', width: '60px', textAlign: 'right' }}>
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} style={{ border: 'none', background: 'none', color: '#e74a3b', cursor: 'pointer', marginLeft: '10px' }}>
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="cart-footer">
                        <div className="total-row">
                            <span>Subtotal</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="total-row">
                            <span>Tax (10%)</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="total-row" style={{ marginTop: '10px', paddingWeight: '800' }}>
                            <span className="total-amount">Total</span>
                            <span className="total-amount">${(total + tax).toFixed(2)}</span>
                        </div>
                        <button className="btn-pay" disabled={cart.length === 0}>
                            Proceed to Payment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default POS;
