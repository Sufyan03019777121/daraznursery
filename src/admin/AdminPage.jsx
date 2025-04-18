import React from 'react';
import AdminLayout from './AdminLayout';
import './admin.css';

const AdminPage = () => {
  return (
    <AdminLayout>
      <div className="admin-content">
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin page!</p>
        {/* Add your admin components here */}
      </div>
    </AdminLayout>
  );
};

export default AdminPage;
