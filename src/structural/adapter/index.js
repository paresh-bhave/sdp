const localStorage = require('./LocalStorage');

console.log( "[info] Storage length: ", localStorage.length );

const uid = localStorage.getItem("userID");
console.log("[info] Requested userID: ", uid);

if (!uid) {
  console.log('[info] User ID not found. Setting the user id and token...');
  localStorage.setItem("token", "TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ");
  localStorage.setItem("userID", "12345");
} else {
  console.log('[info] User ID found.', uid);
  console.log('[info] Clearning the User ID...');
  localStorage.clear();
}
