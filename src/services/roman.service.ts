import {romanMap} from '../constants/roman.constants';

/**
 * Converts a positive integer to its Roman numeral representation.
 * 
 * @param num - The positive integer to be converted (should be >= 1).
 * @returns The Roman numeral as a string.
 */
export const convertToRoman = (num: number): string => {
    const res = [];

    for (let i = romanMap.length - 1; i >= 0; i --){
        let [roman, romeNum] = romanMap[i];
        // get how many times a value can fit in current num
        const times = Math.floor(num / romeNum)
        //push times many of the current roman into the res.
        if (times > 0){
            res.push(...new Array(times).fill(roman));
        };
        // get reminding to cut down the number
        num = num % romeNum;
    }
    return res.join("");
}