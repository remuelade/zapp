import { ClassAntworten } from './class-antworten';
export { ClassAntworten } from './class-antworten';

export class Frage {
constructor(
    public id: number,
    public fragentext: string,
    public hinweis: string,
    public antwort: ClassAntworten[],
    public typ: string,
    public first?: boolean,
    public last?: boolean
) {}
}