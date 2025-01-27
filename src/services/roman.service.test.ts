import { convertToRoman } from "./roman.service";

describe('convertToRoman service', () => {
    it('should convert 1 to I', () => {
        expect(convertToRoman(1)).toBe("I");
    });

    it('should convert 3999 to MMMCMXCIX', () => {
        expect(convertToRoman(3999)).toBe('MMMCMXCIX');
      });

    it('should handle out of range case', () => {
        expect(() => convertToRoman(0)).toThrow('"0" must be in the range of 1-3999');
    })
});