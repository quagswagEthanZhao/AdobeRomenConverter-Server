import { RequestHandler } from 'express';
import { convertToRoman } from '../services/roman.service';

export const convertNumberController: RequestHandler = (req, res, next) => {
  try {
    const queryParam = req.query.number as string | undefined;
    if (!queryParam) {
      res.status(400).send('Error: Missing "query" parameter.');
      return;
    }

    const numberInput = parseInt(queryParam, 10);
    if (isNaN(numberInput)) {
      res.status(400).send(`Error: "${queryParam}" is not a valid integer.`);
      return;
    }

    if (numberInput <= 0 || numberInput > 3999) {
      res.status(400).send(
        `Error: Input must be in the range of 1-3999`
      );
      return;
    }

    const romanNumeral = convertToRoman(numberInput);
    res.json({ input: queryParam, output: romanNumeral });
    return;
  } catch (error) {
    next(error);
  }
};
