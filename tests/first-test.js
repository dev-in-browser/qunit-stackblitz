import { module, test } from 'qunit';
import { hello } from '../src/hello';
import './test-utils';
// QUnit.config.hidepassed = true;
QUnit.config.urlConfig = [];

module('my first test module', hooks => {
  test('first test', assert => {
    assert.ok(true, 'first assertion');
  });
});
module('my second test module', hooks => {
  test('first test', assert => {
    assert.ok(true, 'first assertion');
  });
});
module('my third test module', hooks => {
  test('first test', assert => {
    assert.ok(true, 'first assertion');
  });
});

module('my fourth test module', hooks => {
  test('first test', assert => {
    assert.ok(true, 'first assertion');
  });
});
module('my fifth test module', hooks => {
  test('first test', assert => {
    assert.ok(true, 'first assertion');
  });
});
module('my sixth test module', hooks => {
  test('first test', assert => {
    assert.ok(true, 'first assertion');
  });
});
module('my seventh test module', hooks => {
  test('first test', assert => {
    assert.ok(true, 'first assertion');
  });
});
module('my eigth test module', hooks => {
  test('first test', assert => {
    assert.ok(true, 'first assertion');
  });
});
module('my ninth test module', hooks => {
  test('first test', assert => {
    assert.ok(true, 'first assertion');
  });
});
module('my tenth test module', hooks => {
  test('first test', assert => {
    assert.ok(true, 'first assertion');
  });
});
module('my eleventh test module', hooks => {
  test('first test', assert => {
    assert.ok(true, 'first assertion');
  });
});
module('my twelfth test module', hooks => {
  test('first test', assert => {
    assert.ok(true, 'first assertion');
  });
});
module('my thirteenth test module', hooks => {
  test('first test', assert => {
    assert.ok(true, 'first assertion');
  });
});
module('my fourteenth test module', hooks => {
  test('first test', assert => {
    assert.equal(hello(), 'he world');
  });
});