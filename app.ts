const text = 'this is a test';

const encoder = new TextEncoder();
const data = encoder.encode(text);

Deno.writeFile('message.txt', data).then(()=> {
    console.log('file is written');
})