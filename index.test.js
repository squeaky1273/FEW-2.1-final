const sourcecode = require('./index');

test('Phone Format', () => {
    expect(sourcecode.phoneFormat('2302342134')).toBe('(230) 234-2134')
})

test('Phone Format Nulls', () => {
    expect(sourcecode.phoneFormat("230234213443")).toBe(null);
    expect(sourcecode.phoneFormat("lololololololol?")).toBe(null);
})