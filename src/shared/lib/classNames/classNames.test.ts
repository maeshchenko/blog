import {classNames} from "shared/lib/classNames/classNames";

describe("classNames tests", ()=> {
    test('only class', ()=>{
        const expected = 'someClass';

        expect(classNames('someClass',{},[]))
            .toBe(expected);
    });
    test('with false mod', ()=>{
        const expected = 'someClass hovered';

        expect(classNames('someClass',{"hovered":true, "pressed":false}, []))
            .toBe(expected);
    });
    test('with additional', ()=>{
        const expected = 'someClass green';

        expect(classNames('someClass',{},['green']))
            .toBe(expected);
    });
    test('with additional, with variable mods', ()=>{
        const expected = 'someClass green hovered';

        expect(classNames('someClass',{"hovered":true, pressed:false},['green']))
            .toBe(expected);
    });
});
