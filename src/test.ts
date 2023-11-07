export function testFunction(arg:string):string {
    console.log('TEST FUNCTION: ', arg);

    document.getElementsByTagName('body')[0].style.background = 'red'

    return arg;
}
