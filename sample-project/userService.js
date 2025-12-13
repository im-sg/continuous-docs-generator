/**
 * User Data Service
 * Handles user data management and validation
 * @module userService
 */

/**
 * User interface definition
 * @typedef {Object} User
 * @property {string} id - Unique user identifier
 * @property {string} name - User's full name
 * @property {string} email - User's email address
 * @property {Date} createdAt - Account creation date
 */

/**
 * In-memory user database (for demo purposes)
 * @private
 */
const users = new Map();

/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if email is valid
 * @private
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Creates a new user
 * @param {string} name - User's name
 * @param {string} email - User's email
 * @returns {User} Created user object
 * @throws {Error} If email is invalid or already exists
 * @example
 * createUser('John Doe', 'john@example.com')
 */
export function createUser(name, email) {
  if (!isValidEmail(email)) {
    throw new Error('Invalid email format');
  }

  // Check if email already exists
  for (const user of users.values()) {
    if (user.email === email) {
      throw new Error('Email already exists');
    }
  }

  const user = {
    id: `user_${Date.now()}`,
    name,
    email,
    createdAt: new Date()
  };

  users.set(user.id, user);
  return user;
}

/**
 * Retrieves a user by ID
 * @param {string} id - User ID
 * @returns {User|null} User object or null if not found
 * @example
 * getUserById('user_123')
 */
export function getUserById(id) {
  return users.get(id) || null;
}

/**
 * Updates user information
 * @param {string} id - User ID
 * @param {Partial<User>} updates - Fields to update
 * @returns {User} Updated user object
 * @throws {Error} If user not found
 * @example
 * updateUser('user_123', { name: 'Jane Doe' })
 */
export function updateUser(id, updates) {
  const user = users.get(id);
  if (!user) {
    throw new Error('User not found');
  }

  if (updates.email && !isValidEmail(updates.email)) {
    throw new Error('Invalid email format');
  }

  Object.assign(user, updates);
  return user;
}

/**
 * Deletes a user
 * @param {string} id - User ID
 * @returns {boolean} True if deleted successfully
 * @example
 * deleteUser('user_123')
 */
export function deleteUser(id) {
  return users.delete(id);
}

/**
 * Lists all users
 * @returns {User[]} Array of all users
 * @example
 * getAllUsers()
 */
export function getAllUsers() {
  return Array.from(users.values());
}

/**
 * Searches users by name or email
 * @param {string} query - Search query
 * @returns {User[]} Matching users
 * @example
 * searchUsers('john')
 */
export function searchUsers(query) {
  const lowerQuery = query.toLowerCase();
  return Array.from(users.values()).filter(user => 
    user.name.toLowerCase().includes(lowerQuery) ||
    user.email.toLowerCase().includes(lowerQuery)
  );
}
