create a simple nodejs program to edit files, based on arguments passed.

the program will support basic file reading, deleting, creating and appending operations

node index.js read test.txt will output the content of file

similarly append CONTENT test.txt will append the 'content' at the end of the file

delete test.txt will delete the file

create test.txt will create a new file

rename test.txt new.txt will rename the file

list . will list everything in current directory. (other paths should also support)