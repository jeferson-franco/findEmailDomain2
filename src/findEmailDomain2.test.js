const solution = require('./findEmailDomain2.js');

test('test 1', () => {
    expect(solution('prettyandsimple@example.com')).toBe('example.com');
});

test('test 2', () => {
    expect(solution('fully-qualified-domain@codesignal.com')).toBe('codesignal.com');
});

test('test 3', () => {
    expect(solution('" "@space.com')).toBe('space.com');
});

test('test 4', () => {
    expect(solution('someaddress@yandex.ru')).toBe('yandex.ru');
});

test('test 5', () => {
    expect(solution('" "@xample.org')).toBe('xample.org');
});

test('test 6', () => {
    expect(solution('"much.more unusual"@yahoo.com')).toBe('yahoo.com');
});

test('test 7', () => {
    expect(solution('"very.unusual.@.unusual.com"@usual.com')).toBe('usual.com');
});

test('test 8', () => {
    expect(solution('admin@mailserver2.ru')).toBe('mailserver2.ru');
});

test('test 9', () => {
    expect(solution('example-indeed@strange-example.com')).toBe('strange-example.com');
});

test('test 10', () => {
    expect(solution('very.common@gmail.com')).toBe('gmail.com');
});
