/**
 * Unit tests for utils.js
 * Run with: npm test
 */

const {
  add,
  subtract,
  multiply,
  divide,
  isPalindrome,
  capitalize
} = require('../utils.js');

describe('Mathematical Operations', () => {
  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add positive and negative numbers', () => {
      expect(add(5, -3)).toBe(2);
    });

    test('should add two negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });
  });

  describe('subtract', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('should subtract negative from positive', () => {
      expect(subtract(5, -3)).toBe(8);
    });

    test('should subtract two negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });
  });

  describe('multiply', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(3, -4)).toBe(-12);
    });

    test('should return zero when multiplying by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    test('should divide two positive numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('should divide positive by negative', () => {
      expect(divide(10, -2)).toBe(-5);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });
  });
});

describe('String Operations', () => {
  describe('isPalindrome', () => {
    test('should return true for simple palindrome', () => {
      expect(isPalindrome('racecar')).toBe(true);
    });

    test('should return true for palindrome with spaces', () => {
      expect(isPalindrome('race car')).toBe(true);
    });

    test('should return true for palindrome with mixed case', () => {
      expect(isPalindrome('RaceCar')).toBe(true);
    });

    test('should return false for non-palindrome', () => {
      expect(isPalindrome('hello')).toBe(false);
    });

    test('should return true for single character', () => {
      expect(isPalindrome('a')).toBe(true);
    });
  });

  describe('capitalize', () => {
    test('should capitalize first letter of lowercase word', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    test('should handle already capitalized word', () => {
      expect(capitalize('Hello')).toBe('Hello');
    });

    test('should handle mixed case', () => {
      expect(capitalize('hELLO')).toBe('Hello');
    });

    test('should return empty string for empty input', () => {
      expect(capitalize('')).toBe('');
    });

    test('should handle single character', () => {
      expect(capitalize('a')).toBe('A');
    });
  });
});
