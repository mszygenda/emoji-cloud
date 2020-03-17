# emoji-cloud
Simple CLI tool that process text input from STDIN and outputs emojis and their occurrences in CSV format.

# INSTALLATION
    npm install -g @szygi/emoji-cloud
# USAGE
    cat file_with_emojis.txt | emoji-cloud

eg. Sample output may be:

    😂,1200
    📷,603
    ❤️,597
    😍,346
    ➡️,321
    
This may be later used as an input to keyword cloud of your choice.