function addTransaction() {
  const type = document.getElementById('type').value;
  const account = document.getElementById('account').value;
  const subAccount = document.getElementById('subAccount').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const note = document.getElementById('note').value;

  const data = {
    type,
    account,
    subAccount,
    amount,
    note
  };

  postToGoogleSheets(account, data); // send to the correct sheet based on selected account
}
