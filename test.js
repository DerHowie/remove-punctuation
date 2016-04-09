import test from 'ava';
import fn from './';

test('should remove symbols/punctuation', t => {
	t.is(fn('unicorns()!.!!!{}[]%^&$*#&'), 'unicorns');
});

test('expected a string', t => {
	t.throws(() => {
		fn(342);
	}, 'Expected a string');
});
