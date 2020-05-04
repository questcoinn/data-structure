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
        this.#datas[this.front] = null;
        this.front++;
        this.length--;
        return ret;
    }

    get(index) {
        if(index < this.front || index > this.back) return null;
        return this.#datas[index];
    }

    arrange() {
        if(this.length === 0) return;
        this.#datas = this.#datas.filter((element) => element !== null);
        this.front = 0;
        this.back -= this.front;
    }
}