import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComponent } from './message.component';
import { Component, DebugElement, ViewChild } from "@angular/core";
import { Message } from "../../../shared/models/message.model";
import { User } from "../../../shared/models/user.model";
import { Conversation } from "../../../shared/models/conversation.model";
import { By } from "@angular/platform-browser";

describe('MessageComponent', () => {
  let testHostComponent: TestMessageHostComponent;
  let testHostFixture: ComponentFixture<TestMessageHostComponent>;
  let messageComponent: MessageComponent;

  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMessageHostComponent, MessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestMessageHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();

    messageComponent = testHostComponent.messageComponent;

    // query for the title <h1> by CSS element selector
    de = testHostFixture.debugElement.query(By.css('.media'));
    el = de.nativeElement;

  });

  it('should create', () => {
    expect(messageComponent).toBeTruthy();
  });

  it('should contain message content', () => {
    const msgContent = el.textContent;
    expect(msgContent).toContain('test message');
  });

  it('should contain date', () => {
    const msgContent = el.textContent;
    expect(msgContent).toContain('2 minutes ago');
  });

  it('should display the user avatar', () => {
    const img = testHostFixture.debugElement.query(By.css('img'));
    const srcProp = img.properties.src;
    expect(srcProp).toBe(testHostComponent.conversation.user.avatar);
  });

  it('should align received messages on left', () => {
    const avatar = testHostFixture.debugElement.query(By.css('.media-left'));
    expect(avatar).toBeTruthy();
  });

  it('should align sent messages on right', () => {
    testHostComponent.message.userFromId = 1;
    testHostFixture.detectChanges();

    const avatar = testHostFixture.debugElement.query(By.css('.media-right'));
    expect(avatar).toBeTruthy();
  });

  // Create parent component that hosts app message in order to test its inputs, outputs
  @Component({
    selector: `test-message-host-component`,
    template: `<app-message [message]="message" [conversation]="conversation" [profile]="profile"></app-message>`
  })
  class TestMessageHostComponent {
    // Reference to the MessageComponent used for testing
    @ViewChild(MessageComponent)
    public messageComponent: MessageComponent;

    // Input statics for the MessageComponent
    message: Message;
    profile: User;
    conversation: Conversation;

    constructor() {
      // Test data
      this.message = {
        id: 10,
        msgContent: 'test message',
        userFromId: 2,
        date: '2 minutes ago'
      };

      this.profile = {
        id: 1,
        email: 'bastard@stark.no',
        description: 'I know nothing',
        displayName: 'Jon Snow',
        avatar: 'https://i.pinimg.com/564x/9b/ea/e9/9beae9468d4f6ac9f75e8dbc95c6e3f8.jpg'
      };

      this.conversation = {
        id: 2,
        user: {
          id: 3,
          avatar: 'https://i.imgur.com/PGS8dFB.jpg',
          displayName: 'Bakadesu',
          email: 'usagi@kawaii.com',
          description: 'Such description'
        }
      };
    }
  }

});


