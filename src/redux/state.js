import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import chatsReducer from "./chats-reducer";

const store= {
  _state: {
    profile_page: {
      posts: [  {id: 1, date: "11.02.22", user: "Vika", name: "cool post", text: "This is very intresting text..."},
                {id: 2, date: "11.02.22", user: "Kate", name: "next post", text: "This is very intresting text..."},
                {id: 3, date: "11.02.22", user: "Andrew", name: "any post", text: "Hi everybody! This is my first post. And let's talk about summer..."},
              ],
      newPostText: "",
    },

    chats_page: {
      chats: [
        {id: 1, name: "Kate"},
        {id: 2, name: "Vika"},
        {id: 3, name: "Andrey"},
        {id: 4, name: "Mom"}
      ]
    },

    messages_page: {
      messages: [
        {id: 1, date: "11.07.20", text: "la la la"}, {id: 2, date: "11.07.20", text: "la la la"},
        {id: 3, date: "11.07.20", text: "la la la"}, {id: 4, date: "11.07.20", text: "la la la"},
        {id: 5, date: "11.07.20", text: "la la la"}, {id: 6, date: "11.07.20", text: "Hey"},
      ],
      newMessageText: "",
    },
    users: [{id: 1, name: 'Vika', posts: 3,  }, {id: 2, name: 'Andey', posts: 2,  }, {id: 3, name: 'Kate', posts: 1,  }]
  },
  _subscriber() {
    console.log('No subscribers')
  },
  subscribe(observe) {
    this._subscriber= observe;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {

    this._state.profile_page= profileReducer(this._state.profile_page ,action);
    this._state.messages_page= messagesReducer(this._state.messages_page ,action);
    this._state.chats= chatsReducer(this._state.chats ,action);

    this._subscriber(this._state);

  }
}

