import React from 'react';
import { Link } from 'react-router-dom';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <nav className="admin-nav">
        <ul>
          <li>
            <Link to="/admin">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/users">Users</Link>
          </li>
          <li>
            <Link to="/admin/products">Products</Link>
          </li>
          {/* Add more navigation links here */}
        </ul>
      </nav>
      <main className="admin-main">{children}</main>
    </div>
  );
};

export default AdminLayout;
