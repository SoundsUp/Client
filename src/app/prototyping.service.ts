import { Injectable } from '@angular/core';
import { User } from "./user.model";

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

  getConversationList(): User[] {
    return [
      {
        id: 2,
        avatar: 'https://i.pinimg.com/564x/9b/ea/e9/9beae9468d4f6ac9f75e8dbc95c6e3f8.jpg',
        displayName: 'Usagi Chan',
        email: 'usagi@kawaii.com',
        description: 'Such description',
        isOnline: true
      },
      {
        id: 3,
        avatar: 'https://i.pinimg.com/564x/1a/a0/04/1aa004ad35f703a29399f88dfe81d9c6.jpg',
        displayName: 'Bakadesu',
        email: 'usagi@kawaii.com',
        description: 'Such description',
        isOnline: true
      },
      {
        id: 4,
        avatar: 'https://i.pinimg.com/564x/a3/b6/a4/a3b6a462dabe76d5cf3988a8480fb7d8.jpg',
        displayName: 'Pew Pew PEW',
        email: 'usagi@kawaii.com',
        description: 'Such description',
        isOnline: false
      },
      {
        id: 5,
        avatar: 'https://i.pinimg.com/564x/03/37/bf/0337bfbb181a921b5c547acc96f6ad16.jpg',
        displayName: 'Amane-san',
        email: 'usagi@kawaii.com',
        description: 'Such description',
        isOnline: true
      },
      {
        id: 6,
        avatar: 'https://i.pinimg.com/originals/4b/43/8e/4b438edd9542563afb66e3cd1e06d6fe.jpg',
        displayName: 'Moo',
        email: 'usagi@kawaii.com',
        description: 'Such description',
        isOnline: true
      }
    ];
  }


}