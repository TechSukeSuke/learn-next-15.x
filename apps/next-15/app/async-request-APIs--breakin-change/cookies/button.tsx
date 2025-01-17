"use client";

const SetCookieButton = () => {
  const handleClickSetCookie = () => {
    document.cookie = "token=1234567890"
  }
  return <button type="button" onClick={handleClickSetCookie}>Set Cookie</button>;
}

const DeleteCookieButton = () => {
  const handleClickDeleteCookie = () => {
    document.cookie = "token="
  }
  return <button type="button" onClick={handleClickDeleteCookie}>Delete Cookie</button>;
}

export { SetCookieButton, DeleteCookieButton }