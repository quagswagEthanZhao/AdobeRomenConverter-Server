import { RequestHandler } from 'express';
import createHttpError from 'http-errors'; // For better error handling
import { convertToRoman } from '../services/roman.service';

export const convertNumberController: RequestHandler = (req, res, next) => {
  try {
    const queryParam = req.query.number as string | undefined;

    if (!queryParam) {
      throw createHttpError(400, 'Missing "number" query parameter');
    }

    const numberInput = parseInt(queryParam, 10);

    if (isNaN(numberInput)) {
      throw createHttpError(400, `"${queryParam}" is not a valid integer`);
    }

    if (numberInput <= 0 || numberInput > 3999) {
      throw createHttpError(400, `"${queryParam}" must be in the range of 1-3999`);
    }

    const romanNumeral = convertToRoman(numberInput);

    res.status(200).json({ input: queryParam, output: romanNumeral });
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
};
