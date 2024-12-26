export class Pool<T> {
    private pool: T[]

    constructor(private ctor: () => T) {
        this.pool = []
    }

    public get(): T {
        if (this.pool.length > 0) {
            return this.pool.pop()!
        }
        return this.ctor()
    }

    public set(t: T) {
        this.pool.push(t)
    }
}