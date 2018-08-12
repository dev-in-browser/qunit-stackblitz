import QUnit from 'qunit';

function openTestPanel() {
  const e = document.querySelector('.test-ui');
  e.classList.add('open');
}
const passColor = '#C6E746';
const failColor = '#C6E746';

const testOrTests = x => x === 1 ? 'test' : 'tests';

function makeButtonLabel(details) {
  const { failed, passed, todo, skipped } = details;
  const messages = [];
  if (failed) {
    messages.push(`${failed} ${testOrTests(failed)} Failed`);
  }
  if (passed) {
    messages.push(`${passed} ${testOrTests(passed)} Passed`);
  }
  if (todo) {
    messages.push(`Still Writing ${todo} ${testOrTests(todo)}`);
  }
  if (skipped) {
    messages.push(`${todo} ${testOrTests(todo)} Skipped`);
  }
  if (messages.length < 2) {
    return messages.join(', ');
  } else {
    return `${messages.slice(0, messages.length - 1).join(', ')} and ${messages[messages.length - 1]}`
  }
}

QUnit.done(details => {
  const b = document
    .querySelector('.test-ui .toggle-button');
  const { failed, passed } = details;
  if (failed > 0) {
    openTestPanel();
    b.classList.add('fail');
  } else {
    b.classList.add('pass');
  }
  b.innerText = makeButtonLabel(details);
})