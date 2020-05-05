/******************************************************************************
 * SOME USEFUL CONSTANTS
 ******************************************************************************/
const NULL = Symbol("null");

/******************************************************************************
 * @class   Stack
 ******************************************************************************/
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
        if(this.length === 0) return NULL;
        const ret = this.#datas[this.top];
        this.top--;
        this.length--;
        return ret;
    }

    get(index) {
        if(index > this.top) return NULL;
        return this.#datas[index];
    }
}

/******************************************************************************
 * @class   Queue
 * @todo    원형큐, 우선순위큐(?), 덱
 ******************************************************************************/
class Queue {
    #datas;

    constructor() {
        this.#datas = [];
        this.front = 0;
        this.back = -1;
        this.length = 0;
    }

    push(element) {
        this.back++;
        this.#datas[this.back] = element;
        this.length++;
    }

    pop() {
        if(this.length <= 0) return null;
        const ret = this.#datas[this.front];
        this.#datas[this.front] = NULL;
        this.front++;
        this.length--;
        return ret;
    }

    get(index) {
        if(index > this.back - this.front) return null;
        return this.#datas[this.front + index];
    }

    arrange() {
        if(this.length === 0) return;
        this.#datas = this.#datas.filter((element) => element !== NULL);
        this.back -= this.front;
        this.front = 0;
    }
}

/******************************************************************************
 * @class   Linked List
 ******************************************************************************/
class LinkedList {
    #value;

    constructor(element) {
        this.#value = element;
        this.child = null;
    }

    append(element) {
        if(!this.child) {
            this.child = new LinkedList(element);
        } else {
            const grandChild = this.child.child;
            this.child = new LinkedList(element);
            this.child.child = grandChild;
        }
        return this.child;
    }

    removeChild() {
        if(!this.child) return null;
        const originalChild = this.child;
        const newChild = originalChild.child;
        this.child = newChild;
        originalChild.child = null;
        return originalChild;
    }

    get() {
        return this.#value;
    }

    next() {
        return this.child;
    }
}

/******************************************************************************
 * etc.
 ******************************************************************************/
class StackOverflowError extends Error {
    constructor(message) {
        super(message);
        this.name = "StackOverflowError";
    }
}
