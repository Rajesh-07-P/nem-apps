Create a file server in nodejs using http

when user visits site, he should see the list of all files and folders in current directory

user should be able to ask for different directory content by routes

eg:

/ shows directories: data, src, public etc

/public will show content of public directory

/public/other will show content of other directory inside public and so on

listing should appear on URL change you can enter URL manuall



PART 2:

make the listing with proper UI and Icons and anchor tags

hints: / serves an html response. you will have to manipulate li tags as strings yourself

when user clicks on li tag, take them on proper URL /public etc.

in backend handle /public route dynamically it cannot be hardcoded.

hint: you can change request structure like /api/public will ask for contents of public directory etc. just to know which request is for data and which request is for frontend etc