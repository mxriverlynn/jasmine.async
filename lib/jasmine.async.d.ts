
// expose the AsyncSpec object
declare var AsyncSpec: asyncjasmine.AsyncSpec;

declare module asyncjasmine {

    interface AsyncSpec {
        new (spec: any);
        beforeEach(block: (done: Function) => void): void;
        afterEach(block: (done: Function) => void): void;
        it(description: string, block: (done: Function) => void): void;
    }
}
