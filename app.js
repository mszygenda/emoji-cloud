#! /usr/bin/env node
const _ = require('lodash');
const emojiRegex = require('emoji-regex');
const readline = require('readline');
const stdinInterface = readline.createInterface({
  input: process.stdin
});

const regex = emojiRegex();
const emojiOccurrences = {};
const separator = ','

const formatRow = ({emoji, occurrences}) => `${emoji}${separator}${occurrences}`

stdinInterface.on('line', (line) => {
   let emojiMatch = null;

   while(emojiMatch = regex.exec(line)) {
	const emoji = emojiMatch[0];
	const emojiCount = emojiOccurrences[emoji] || 0;

	emojiOccurrences[emoji] = emojiCount + 1;
   }
});

stdinInterface.on('close', () => {
	const emojiStats = _.map(_.toPairs(emojiOccurrences), ([emoji, occurrences]) => {
		return {emoji, occurrences};
	});
	const emojiStatsSorted = _.orderBy(emojiStats, ['occurrences'], ['desc']);

	_.forEach(emojiStatsSorted, (emojiStats) => {
		console.log(formatRow(emojiStats));
	})
});
