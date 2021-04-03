let responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes, definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Can't predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
]
// your code, here
// Confirm the correct number of responses have been stored by printing the number to the console (`20`)
console.log("Number of responses: ", responses.length)

// Ask the user what their question is, and store it as a variable called `question`
let question = prompt('What is your question?')

// Output a random response to the user's question
let randomIndex = (length) => {
  return Math.floor((Math.random() * length));
}
console.log('You asked:', question)
console.log('Response:', responses[randomIndex(responses.length)])

// Output the number of responses that include the word "yes"
let numOfYes = 0
responses.forEach(element => {
  if(element.toLowerCase().includes('yes')){
    numOfYes++
  }
});
console.log("Number of responses containing 'yes':", numOfYes)

// Output the number of responses that include the words "no" or "not"
let negativeResponses = responses.filter(response => {
  return response.includes(`no` || `not` || `n't`)
})

console.log('Negative responses:', negativeResponses)

// Output the alphabetized list of responses
responses.sort()
console.log(responses)

// Output the first and last responses from the alphabetized list
console.log(responses[0])
console.log(responses[responses.length - 1])

// Delete two of the negative responses
let numberToDelete = 2
let count = 0
let i = 0
while (count < numberToDelete && i < responses.length) {
  if(responses[i].includes(`no` || `not` || `n't`)) {
    responses.splice(i, 1)
    count++
  }
  i++
}
console.log(responses)

// Reassign 'Ask again later' to the beginning of the array
responses[0] = 'Ask again later'
console.log(responses)

// Add 1 response of your choosing to the current list
responses.push('You can do it')
console.log(responses)

// Concat an **array** of 3 additional responses to the current list
let moreResponses = ['today is the day', 'why not', 'go ahead']
let combinedResponses = responses.concat(moreResponses)
console.log(combinedResponses)

// Confirm the correct number of responses have been removed and added by printing the number of responses to the console (`22`)
console.log(responses.length)
