export class Matrix {
    constructor(data) {
        this.data = data;
    }

    static zeros(rows, cols) {
        return new Matrix(Array.from({ length: rows }, () => Array(cols).fill(0)));
    }

    transpose() {
        const transposedData = this.data[0].map((_, i) => this.data.map(row => row[i]));
        return new Matrix(transposedData);  // Return a new Matrix instance
    }

    toArray() {
        return this.data;
    }

    add(matrix) {
        if (this.data.length !== matrix.data.length || this.data[0].length !== matrix.data[0].length) {
            throw new Error('Matrices must have the same dimensions');
        }

        const result = this.data.map((row, i) =>
            row.map((value, j) => value + matrix.data[i][j])
        );

        return new Matrix(result);
    }
}
