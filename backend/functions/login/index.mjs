import { sendResponse, sendCookieResponse } from "../../responses/index.mjs";

const users = [
  {
    username : 'jesper',
    password : 'nyberg'
  },
  {
    username : 'admin', 
    password : 'admin'
  }
];

export const handler = async (event) => {
  const body = JSON.parse(event.body);

  const user = users.find(user => user.username === body.username);
  if(user) {
    if(user.password === body.password) {
      const token = 'bs72wjwdbw72ebd';

      return sendCookieResponse(200, { message : 'User logged in' }, token);
    } else {
      return sendResponse(400, { message : 'Wrong password' });
    }
  } else {
    return sendResponse(400, { message : 'No user found' });
  }
};
