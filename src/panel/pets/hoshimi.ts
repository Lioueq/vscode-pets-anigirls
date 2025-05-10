import { PetColor } from '../../common/types';
import { BasePetType } from '../basepettype';
import { PetSize, PetSpeed } from '../../common/types';
import { States } from '../states';

export class Hoshimi extends BasePetType {
    label = 'Hoshimi';
    
    static possibleColors = [
        PetColor.black,
    ];
    sequence = {
        startingState: States.sitIdle,
        sequenceStates: [
            {
                state: States.sitIdle,
                possibleNextStates: [States.sitIdle],
            },
        ],
    };

    constructor(
        spriteElement: HTMLImageElement,
        collisionElement: HTMLDivElement,
        speechElement: HTMLDivElement,
        petRoot: string,
        floor: number,
        name: string,
        speed: PetSpeed,
    ) {
        super(
            spriteElement,
            collisionElement,
            speechElement,
            PetSize.giftheme, // size
            0, // left
            0, // bottom
            petRoot,
            floor,
            name,
            speed,
        );
    }

    get emoji(): string {
        return '🐱';
    }
    get hello(): string {
        return ``;
    }
}

export const HOSHIMI_NAMES: ReadonlyArray<string> = [
    'Hoshimi',
];
