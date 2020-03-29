export const questions = [
    {
        text: 'While working in a code repository you have not worked before, you notice there is an error in the documentation. Do you:',
        answers: [
            {
                text: 'Finish your work, then open a PR to fix the documentation',
                seansMoodChangesBy: 1,
            },
            {
                text: 'Finish your work, then let the owners of the repo know about the error',
                seansMoodChangesBy: 0,
            },
            {
                text: 'Finish your work, then move on. You have more work to do, and the owners of the repo should maintain their own documentation',
                seansMoodChangesBy: -1,
            }
        ]
    },
    {
        text: 'You are working on a Jira ticket when you realize that the problem is not clearly defined. Do you:',
        answers: [
            {
                text: 'Reach out to your teammates to open a conversation about the problem, then record the clarified problem statement in the ticket',
                seansMoodChangesBy: 1,
            },
            {
                text: 'Edit the ticket on your own, based on your understanding of the problem',
                seansMoodChangesBy: 0,
            },
            {
                text: 'Keep working on the ticket. Someone else will figure this out at the end of the sprint',
                seansMoodChangesBy: -1,
            }
        ]
    },
    {
        text: 'Everyone in the community is using this new library. I solves a problem that your current codebases solves with an older library. Do you:',
        answers: [
            {
                text: 'Write a document describing the pros and cons of using the new library, along with the cost of switching. Share the document with others to get feedback.',
                seansMoodChangesBy: 1,
            },
            {
                text: 'Put together a Proof Of Concept application using the new library, start talking with people about it to build excitement.',
                seansMoodChangesBy: 0,
            },
            {
                text: 'npm install the new library and start using it already! Surely this newer library is better than the old one.',
                seansMoodChangesBy: -1,
            }
        ]
    },
    {
        text: 'The POC CCVOC is OSAE and UPE, please use PODWDD to GIBOT',
        answers: [
            {
                text: 'Use text like this Proof Of Concept (POC) to introduce acronyms at the header of any document',
                seansMoodChangesBy: 1,
            },
            {
                text: 'Post in a channel what each of the acronyms you are using means',
                seansMoodChangesBy: 0,
            },
            {
                text: "What's the problem, everyone already knows what we're talking about",
                seansMoodChangesBy: -1,
            }
        ]
    },
];

export const WELCOME = 'WELCOME';
export const QUESTIONS = 'QUESTIONS';
export const GOODBYE = 'GOODBYE';
export const WINNER = 'WINNER';
export const LOSER = 'LOSER';

export const WINNING_SCORE = 4;
export const LOSING_SCORE = -4;
