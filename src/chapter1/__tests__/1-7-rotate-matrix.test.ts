import { rotateMatrix } from '../1-7-rotate-matrix';

describe('Chapter 1.7: Rotate Matrix', () => {
  it('should rotate a 1x1 matrix', () => {
    const matrix = [[1]];
    const expected = [[1]];
    const result = rotateMatrix(matrix);

    expect(result).toEqual(expected);
  });

  it('should rotate 2x2 matrix', () => {
    const matrix = [
      [1, 2],
      [4, 3]
    ];
    const expected = [
      [4, 1],
      [3, 2]
    ];
    const result = rotateMatrix(matrix);

    expect(result).toEqual(expected);
  });
  
  it('should rotate 3x3 matrix', () => {
    const matrix = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5]
    ];
    const expected = [
      [7, 8, 1],
      [6, 9, 2],
      [5, 4, 3]
    ];
    const result = rotateMatrix(matrix);

    expect(result).toEqual(expected);
  });
  
  it('should rotate 5x5 matrix', () => {
    const matrix = [
      [ 1, 2, 3, 4, 5],
      [16,17,18,19, 6],
      [15,24,25,20, 7],
      [14,23,22,21, 8],
      [13,12,11,10, 9],
    ];
    const expected = [
      [13,14,15,16, 1],
      [12,23,24,17, 2],
      [11,22,25,18, 3],
      [10,21,20,19, 4],
      [ 9, 8, 7, 6, 5],
    ];
    const result = rotateMatrix(matrix);

    expect(result).toEqual(expected);
  });
});
