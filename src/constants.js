export const questions = [
    {
        text: 'While working in a code repository you have not worked before, you notice there is an error in the documentation. Do you:',
        answers: [
            {
                text: 'Finish your work, then open a PR to fix the documentation.',
                seansMoodChangesBy: 1,
            },
            {
                text: 'Finish your work, then let the owners of the repo know about the error.',
                seansMoodChangesBy: 0,
            },
            {
                text: 'Finish your work, then move on. You have more work to do, and the owners of the repo should maintain their own documentation.',
                seansMoodChangesBy: -1,
            }
        ]
    },
    {
        text: 'You are working on a Jira ticket when you realize that the problem is not clearly defined. Do you:',
        answers: [
            {
                text: 'Reach out to your teammates to open a conversation about the problem, then record the clarified problem statement in the ticket.',
                seansMoodChangesBy: 1,
            },
            {
                text: 'Edit the ticket on your own, based on your understanding of the problem.',
                seansMoodChangesBy: 0,
            },
            {
                text: 'Keep working on the ticket. Someone else will figure this out at the end of the sprint.',
                seansMoodChangesBy: -1,
            }
        ]
    },
    {
        text: 'Everyone in the community is using this new library. It solves a problem that your current codebases solves with an older library. Do you:',
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
    {
        text: "You notice a problem in a codebase. The problem appears to have been there for a while, and while it doesn't appear to affect users, you suspect that something isn't right.",
        answers: [
            {
                text: 'Timebox an exploration of the problem space. Write up a summary of your findings, then discuss it and next steps with a teammate.',
                seansMoodChangesBy: 1,
            },
            {
                text: 'File the problem away in your memory for if you see it again, then move on for now.',
                seansMoodChangesBy: 0,
            },
            {
                text: "Post about it in engineering or incident-response so everyone knows about it.",
                seansMoodChangesBy: -1,
            }
        ]
    },
    {
        text: "You have an idea for a new feature, or a twist on an existing one. Do you:",
        answers: [
            {
                text: 'Write out a problem statement and the value a solution would bring to the user. Share it with a member of Product or UX for feedback.',
                seansMoodChangesBy: 1,
            },
            {
                text: 'Create a toy app or component set, showing what your new feature might look like. Share it with a member of Product or UX for feedback.',
                seansMoodChangesBy: 1,
            },
            {
                text: "Move on with your day. Nobody's going to care about your ideas anyway.",
                seansMoodChangesBy: -1,
            }
        ]
    },
    {
        text: "You're in a meeting when you realize there wasn't a clear agenda, and the meeting is rabbit holing into an obscure nuance of the problem being discussed. You:",
        answers: [
            {
                text: 'Go to the whiteboard and help the group articulate and visualize the problem or opportunity space',
                seansMoodChangesBy: 1,
            },
            {
                text: 'Vote with your feet and excuse yourself from the meeting',
                seansMoodChangesBy: 0,
            },
            {
                text: "Open your laptop and respond to one of your 7 unread slacks or 21 unread emails",
                seansMoodChangesBy: -1,
            }
        ]
    },
    {
        text: "You're in the zone and making good progress on a difficult problem when you get a slack from that engineering manager of yours. You:",
        answers: [
            {
                text: 'Give yourself a timebox to finish your current thread and set the precedent that immediate responses are not your SLA',
                seansMoodChangesBy: 1,
            },
            {
                text: "Respond immediately, it's probably something important",
                seansMoodChangesBy: -1,
            },
            {
                text: "Ignore it, it's probably nothing important",
                seansMoodChangesBy: -1,
            }
        ]
    },
    {
        text: "A teammate asks for help understanding an aspect of the business domain that you know well. You:",
        answers: [
            {
                text: 'Gently point them to the documentation you and others have created, with a reminder that searching confluence, paper and slack often yields good results.',
                seansMoodChangesBy: 1,
            },
            {
                text: "Offer to take on the ticket they're working on yourself, since you have the expertise in this area",
                seansMoodChangesBy: -1,
            },
            {
                text: "Setup a meeting with everyone who knows about the subject",
                seansMoodChangesBy: -1,
            }
        ]
    },
    {
        text: "You and your team have just made an important architectural decision. Next, you:",
        answers: [
            {
                text: 'Create a decision record, clearly stating why the decision was made. Socialize the decision record amongst those affected by the decision',
                seansMoodChangesBy: 1,
            },
            {
                text: "Start taking action on the decision immediately",
                seansMoodChangesBy: 0,
            },
            {
                text: "Proclaim the decision to most of the people who need to know",
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
