import test from 'ava';
import flatten from '../';
test('flatten is defined',t => {
    t.not(flatten, undefined);
});

test('flatten is a function',t => {
    t.is(typeof(flatten) === 'function', true);
});
test('flatten [] is []',t => {
    t.deepEqual([].reduce(flatten,[]),[]);
});

test('flatten [undefined] is [undefined]',t => {
    t.deepEqual([undefined].reduce(flatten,[]),[undefined]);
});

test('flatten [null,[null,[null]]] is [null,null,null]',t => {
    t.deepEqual([null,[null,[null]]].reduce(flatten,[]),[null,null,null]);
});


test('flatten [1,2,3,4] is [1,2,3,4]',t => {
    t.deepEqual([1,2,3,4].reduce(flatten,[]),[1,2,3,4]);
});


test('flatten [[1],2,3,4] is [1,2,3,4]',t => {
    t.deepEqual([[1],2,3,4].reduce(flatten,[]),[1,2,3,4]);
});

test('flatten [1,[2],3,4] is [1,2,3,4]',t => {
    t.deepEqual([1,[2],3,4].reduce(flatten,[]),[1,2,3,4]);
});

test('flatten [[1],[2],3,4] is [1,2,3,4]',t => {
    t.deepEqual([[1],[2],3,4].reduce(flatten,[]),[1,2,3,4]);
});


test('flatten [1,[2,3,[4,5,[6,[7],8],9],10],11] is [1,2,3,4,5,6,7,8,9,10,11]',t => {
    t.deepEqual([1,[2,3,[4,5,[6,[7],8],9],10],11].reduce(flatten,[]),[1,2,3,4,5,6,7,8,9,10,11]);
});
