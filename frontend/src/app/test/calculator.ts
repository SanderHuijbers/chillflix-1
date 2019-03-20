export class Calculator {
	public storage: number[] = [];

	public sum(a: number, b: number): number {
		const result = a + b;
		this.storage = this.addToStorage(result);
		return result
	}

	public sumAll(numbers: number[]) {
		return numbers.join();
	}

	public multiply(a: number, b: number): number {
		const result = a * b
		this.storage = this.addToStorage(result);
		return result;
	}

	public devide(a: number, b: number): number {
		return a / b
	}

	private addToStorage(result: number) {
		return this.storage = [...this.storage, result];
	}
}
