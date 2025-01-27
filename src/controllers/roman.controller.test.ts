import { convertToRoman } from "../services/roman.service"
import { Request, Response, NextFunction } from "express";
import { convertNumberController } from "./roman.controller";
import createHttpError from 'http-errors'

jest.mock('../services/roman.service', () => ({
    convertToRoman: jest.fn(),
}));

describe('converterNumberController', () => {
    it('should return Error when "number" query is missing', async () => {
        const req = { query: {} } as unknown as Request;
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn().mockReturnThis(),
        } as unknown as Response;
        const next = jest.fn() as NextFunction;
    
        // Simulate controller logic
        await convertNumberController(req, res, next);
    
        // Error should be caught by the error handler and status should be set there
        expect(next).toHaveBeenCalledWith(expect.any(Error)); // Ensure the error is passed to next()
      });

      it('should return 200 and correct Roman numeral when valid number is provided', async () => {
        // Mock the service function to return 'X' for number 10
        (convertToRoman as jest.Mock).mockReturnValue('X');
    
        const req = { query: { number: '10' } } as unknown as Request;
        const res = {
          status: jest.fn().mockReturnThis(),
          json: jest.fn().mockReturnThis(),
        } as unknown as Response;
        const next = jest.fn() as NextFunction;
    
        await convertNumberController(req, res, next);
    
        // Ensure the correct status and Roman numeral are returned
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
          input: '10',
          output: 'X',
        });
    });
})