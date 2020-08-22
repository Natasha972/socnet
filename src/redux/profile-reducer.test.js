const { default: myProfileReducer, addPost } = require("./myprofile-reducer");
import React from 'react';
import { render, waitForElementToBeRemoved } from '@testing-library/react';

let initialState= {
  user: {},
  status: "",
  posts: [  {id: 1, date: "11.02.22", user: "Vika", name: "cool post", text: "This is very intresting text..."},
            {id: 2, date: "11.02.22", user: "Kate", name: "next post", text: "This is very intresting text..."},
            {id: 3, date: "11.02.22", user: "Andrew", name: "any post", text: "Hi everybody! This is my first post. And let's talk about summer..."},
            ],
  newPostText: "",
  followingInProgress: false,
}
test('added new post', () => {
  let action= addPost({user: 'Natasha', name: 'Super Post'})
  let new_state= myProfileReducer(initialState, action)
  expect (new_state.posts.length).toBe(4);
});
test('added new post', () => {
  let action= addPost({user: 'Natasha', name: 'Super Post'})
  let new_state= myProfileReducer(initialState, action)
  expect(new_state.posts[3].name).toBe('Super Post');
});



