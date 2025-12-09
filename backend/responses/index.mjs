export const sendResponse = (status, data) => {
    return {
        statusCode: status,
        headers: {
        'Content-Type': 'application/json',
        'Content-Security-Policy': "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self';"
        },
        body: JSON.stringify({
        ...data
        })
    }
}

export const sendCookieResponse = (status, data, token) => {
    return {
        statusCode: status,
        headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': `token=${token}; HttpOnly; Secure; SameSite=None; Path=/; Max-Age=3600;`,
        'Content-Security-Policy': "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self';"
        },
        body: JSON.stringify({
        ...data
        })
    }
}
