import { sendResponse } from "../../responses/index.mjs";

const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

export const handler = async (event) => {
  if(!event.cookies) {
    return sendResponse(401, { message: "No cookies found", event });
  }
  const cookieArray = event.cookies || [];
  const tokenCookie = cookieArray.find(c => c.startsWith("token="));

  if (!tokenCookie) {
    return sendResponse(401, { message: "No token", token, event });
  }

  const token = tokenCookie.split("=")[1];

  return sendResponse(200, { data, token, event });
};
