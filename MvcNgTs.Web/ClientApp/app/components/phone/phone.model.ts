export interface IPhone {
    name: string;
    snippet: string;
}

export class Phone implements IPhone {
    constructor(public name: string,
        public snippet: string) {}
}

export const PHONES: Phone[] = [
    {
        name: 'Nexus S',
        snippet: 'Fast just got faster with Nexus S.'
    }, {
        name: 'Motorola XOOM™ with Wi-Fi',
        snippet: 'The Next, Next Generation tablet.'
    }, {
        name: 'MOTOROLA XOOM™',
        snippet: 'The Next, Next Generation tablet.'
    }
];
