import { Injectable } from '@angular/core';
import { User } from "./shared/models/user.model";
import { Conversation } from "./shared/models/conversation.model";
import { Message } from "./shared/models/message.model";

@Injectable()
export class PrototypingService {

  constructor() {
  }

  getUser(): User {
    return {
      id: 1,
      avatar: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/pembroke-welsh-corgi-dog-breed-pictures/prance-8.jpg',
      displayName: 'Corgi SuperUser',
      email: 'bark@postman.com',
      description: 'I like Pina Coladas, and getting caught in the rain\n' +
      'I´m not much into health food, I am into champagne\n'
    };
  }

  getConversationList(): Conversation[] {
    return [
      {
        id: 1,
        user: {
          id: 2,
          avatar: 'https://i.pinimg.com/564x/9b/ea/e9/9beae9468d4f6ac9f75e8dbc95c6e3f8.jpg',
          displayName: 'Usagi Chan',
          email: 'usagi@kawaii.com',
          description: 'Such description'
        },

        isOnline: true
      },
      {
        id: 2,
        user: {
          id: 3,
          avatar: 'https://i.pinimg.com/564x/1a/a0/04/1aa004ad35f703a29399f88dfe81d9c6.jpg',
          displayName: 'Bakadesu',
          email: 'usagi@kawaii.com',
          description: 'Such description'
        },
        isOnline: true
      },
      {
        id: 3,
        user: {
          id: 4,
          avatar: 'https://i.pinimg.com/564x/a3/b6/a4/a3b6a462dabe76d5cf3988a8480fb7d8.jpg',
          displayName: 'Pew Pew PEW',
          email: 'usagi@kawaii.com',
          description: 'Such description'
        },
        isOnline: false
      },
      {
        id: 4,
        user: {
          id: 5,
          avatar: 'https://i.pinimg.com/564x/03/37/bf/0337bfbb181a921b5c547acc96f6ad16.jpg',
          displayName: 'Amane-san',
          email: 'usagi@kawaii.com',
          description: 'Such description'
        },
        isOnline: true
      },
      {
        id: 5,
        user: {
          id: 6,
          avatar: 'https://i.pinimg.com/originals/4b/43/8e/4b438edd9542563afb66e3cd1e06d6fe.jpg',
          displayName: 'Moo',
          email: 'usagi@kawaii.com',
          description: 'Such description'
        },
        isOnline: true
      }
    ];
  }

  getMessages(conversation: Conversation): Message[] {
    return [
      {
        id: 0,
        userFromId: 4,
        date: '12/10/2017',
        msgContent: ''
      },
      {
        id: 1,
        userFromId: 1,
        msgContent: 'Some text',
        date: '16/12/2017'
      },
      {
        id: 2,
        userFromId: 4,
        msgContent: 'Some text',
        date: '16/12/2017'
      },
      {
        id: 3,
        userFromId: 4,
        msgContent: 'Some text',
        date: '16/12/2017'
      }

    ];
  }

  getAvatars(): string[] {
    return [
      'http://cdn3-www.dogtime.com/assets/uploads/gallery/pembroke-welsh-corgi-dog-breed-pictures/prance-8.jpg',
      'https://i.pinimg.com/564x/26/32/2f/26322f3c9216e25158694169c92ab720.jpg',
      'https://i.pinimg.com/564x/14/13/a3/1413a3e2fcec57d335a0e46219f14851.jpg',
      'https://i.imgur.com/FX600C5.jpg',
      'https://i.pinimg.com/564x/71/05/67/710567ef646cab76c326841b719ed44e.jpg',
      'https://i.imgur.com/ttWgkZI.jpg',
      'https://i.imgur.com/ANId1MR.jpg?1',
      'https://i.imgur.com/tVkIZ6Y.jpg',
      'https://i.pinimg.com/564x/b0/b9/f5/b0b9f5ce3324af26cf989159f9d26437.jpg',
      'https://i.imgur.com/PGS8dFB.jpg',
    ];
  }

}




