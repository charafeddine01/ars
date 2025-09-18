/*
  # Add default admin user

  1. New Data
    - Insert a default admin user for testing
    - Email: admin@corecladindustries.com
    - Password: admin (stored as plain text for demo - in production use proper hashing)
    - Role: admin
    - Active status: true

  2. Notes
    - This is for development/demo purposes only
    - In production, passwords should be properly hashed
    - Consider using Supabase Auth for production applications
*/

-- Insert default admin user if it doesn't exist
INSERT INTO admin_users (email, password_hash, role, is_active)
SELECT 'admin@corecladindustries.com', 'admin', 'admin', true
WHERE NOT EXISTS (
  SELECT 1 FROM admin_users WHERE email = 'admin@corecladindustries.com'
);

-- Insert a second admin user for testing
INSERT INTO admin_users (email, password_hash, role, is_active)
SELECT 'demo@corecladindustries.com', 'demo123', 'admin', true
WHERE NOT EXISTS (
  SELECT 1 FROM admin_users WHERE email = 'demo@corecladindustries.com'
);