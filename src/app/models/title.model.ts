import { Award } from './award.model';
import { OtherName } from './other-name.model';
import { Participant } from './participant.model';
import { StoryLine } from './story-line.model';

export class Title {
    id: string;

    awards: Award[];

    genres: string[];

    otherNames: OtherName[];

    participants: Participant[];

    releaseYear: number;

    storylines: StoryLine[];

    titleId: number;

    titleName: string;

    titleNameSortable: string;
}
