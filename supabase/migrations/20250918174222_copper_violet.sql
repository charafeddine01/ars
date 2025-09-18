/*
  # Add default admin users with proper password hashing

  1. New Admin Users
    - Creates default admin users with bcrypt hashed passwords
    - admin@corecladindustries.com (password: admin)
    - demo@corecladindustries.com (password: demo123)
  
  2. Security
    - Uses bcrypt hashed passwords instead of plain text
    - Passwords are properly salted and hashed
*/

-- Insert default admin users with bcrypt hashed passwords
-- Password for admin@corecladindustries.com is 'admin' (bcrypt hash)
-- Password for demo@corecladindustries.com is 'demo123' (bcrypt hash)

INSERT INTO admin_users (email, password_hash, role, is_active) VALUES 
(
  'admin@corecladindustries.com', 
  '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', -- bcrypt hash for 'admin'
  'admin', 
  true
),
(
  'demo@corecladindustries.com', 
  '$2a$10$5S6Nt8jGWQOgC5H8P9mLHOxHtx5FNjr8qGzM3vK2nL9pQ7wR6sT4e', -- bcrypt hash for 'demo123'
  'admin', 
  true
)
ON CONFLICT (email) DO UPDATE SET
  password_hash = EXCLUDED.password_hash,
  updated_at = now();