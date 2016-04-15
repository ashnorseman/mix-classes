/**
 * Created by AshZhang on 2016-4-15.
 */


import mixClass from '../index';


describe('mixClass', () => {

	it('empty props => empty string', () => {
		expect(mixClass({})).toEqual('');
	});

	it('true => class name', () => {
		expect(mixClass({ 'test': true })).toEqual('test');
	});

	it('false => empty string', () => {
		expect(mixClass({ 'test': false })).toEqual('');
	});

	it('$ => replaced string', () => {
		expect(mixClass({ '$': 'dollar' })).toEqual('dollar');
		expect(mixClass({ '$-test': 'dollar' })).toEqual('dollar-test');
		expect(mixClass({ 'test-$': 'dollar' })).toEqual('test-dollar');
		expect(mixClass({ '$-test-$': 'dollar' })).toEqual('dollar-test-dollar');
	});

	it('mixed', () => {
		const props = {
			'true': true,
			'false': false,
			'$': 'dollar'
		};

		expect(mixClass(props)).toEqual('true dollar');
	});
});
