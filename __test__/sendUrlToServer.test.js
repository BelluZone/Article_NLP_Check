/**
 * @jest-environment jsdom
 */

import { sendUrlToServer } from "../src/client/js/formHandler";


global.fetch = jest.fn();

describe('sendUrlToServer', () => {
    it('should throw an error when the response is not ok', async () => {
        // Arrange: Mock fetch to return a response with a status other than 200
        fetch.mockResolvedValue({
            ok: false,
            status: 400,
            json: jest.fn(),
        });

        const testUrl = 'invalid-url';

        // Act & Assert: Call the function and expect it to throw an error
        await expect(sendUrlToServer(testUrl)).rejects.toThrow('Error: 400');
    });
});