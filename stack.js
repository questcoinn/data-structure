class StackOverflowError extends Error {
    constructor(message) {
        super(message);
        this.name = "StackOverflowError";
    }
}

class Stack {
    #datas;

    constructor() {
        this.#datas = [];
        this.top = -1;
        this.length = 0;
    }

    push(element) {
        if(this.length === Number.MAX_SAFE_INTEGER) {
            throw new StackOverflowError("stack size exceeds javascript's internal safe limit");
        }
        this.top++;
        this.#datas[this.top] = element;
        this.length++;
    }

    pop() {
        if(this.length === 0) return null;
        const ret = this.#datas.pop();
        this.top--;
        this.length--;
        return ret;
    }

    get(index) {
        if(index > this.top) return null;
        return this.#datas[index];
    }
}
