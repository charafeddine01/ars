import bcrypt from 'bcryptjs';

/**
 * Hash a password using bcrypt
 * @param password - Plain text password
 * @returns Promise<string> - Hashed password
 */
export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

/**
 * Compare a plain text password with a hashed password
 * @param password - Plain text password
 * @param hashedPassword - Hashed password from database
 * @returns Promise<boolean> - True if passwords match
 */
export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

/**
 * Generate bcrypt hash for a given password (utility function for development)
 * @param password - Plain text password
 */
export const generateHash = async (password: string): Promise<void> => {
  const hash = await hashPassword(password);
  console.log(`Password: ${password}`);
  console.log(`Hash: ${hash}`);
};

// Example usage for generating hashes during development:
// generateHash('admin');
// generateHash('demo123');