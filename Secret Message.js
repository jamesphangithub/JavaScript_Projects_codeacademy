//James Phan
//Secret Message produced from different array methods


let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
secretMessage.push('to', 'Program');
secretMessage[secretMessage.indexOf('easily')] = 'right';
secretMessage.shift();
secretMessage.splice(0, 0, 'Programming')
secretMessage.splice(6, 5, 'know');

console.log(secretMessage.join(' '));




