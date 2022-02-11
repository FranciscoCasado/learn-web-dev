# Hacker's true love: The Terminal

The goal of this chapter is to know and to understand the *power* of terminal tools.

If haven't opened a terminal, I hope this guide is clear enough. Terminals and *Operating Systems* can be complex topics, but don't panic; there is nothing that can't be fixed.

## What is a terminal
A terminal is a text-based interface to your computer. Within the terminal one can access *almost* any part of our computer's operating system. The programs that run in the terminal may vary depending on the system, but most computers are shipped with one or more of the following:
- `sh`
- `bash`: *the standard for several years*
- `zsh`:*the best so far*

Some systems may have their own propietary shell

## First commands: navigate through your files and folders

Most operating systems have *file systems*, which means, all the data and we have stored and applications we have installed, *are* in some *place* in the file system. The file system uses mainly two types of *entries*: files and directories. The files are the *information* or *applications* and the directories are the *places*.

Whenever you open a terminal, it starts in a location by default: the *home* directory. On a Mac, terminals would show some information about the current user (technically is the *host*) and, next to it,the directory where the terminal is placed. Most machines use the `~` symbol as abreviation for the home directory, but to know the *full path*, we can use the `pwd` command, with stands for *print current directory*. Open a terminal and use the `pwd` command (hit <kbd>Enter</kbd> to execute the command).

The terminal should show something like this:
```sh
username@ComputerName ~ $ pwd
/Users/username
```

If you want to see what inside the directory, use the `ls` command, which stands for *list*. Here you may see folders and files
```sh
~ $ ls
Applications/           Movies/
Desktop/                Music/                  
Documents/              Pictures/               
Downloads/              Public/
Library/                file.txt
```

To change to another directory, we use `cd`, which stands for *change directory*, and next to it, separated by a space, the path to the folder. By default, every command that doesn't prints can be considered *successful*, which means it did not throw errors. `cd` is one of the commands that returns nothing, except when it does not find the specified directory *or* the specified path resolved to a file, intead of a directory:
```sh
~ $ cd Documents
~/Documents $ ls
file1.txt
file2.txt
file3.txt
~/Documents $ pwd
/Users/username/Documents
~/Documents $ cd
~ $
```
To go back to the home, we can execute `cd` without arguments. It returns to the home by default :)

**Important Note** 
>For now on, all code snippets will not include the directory or the `$` symbol. They will be just the commands, with the outputs in separate snippets if necessary


## Adding entries

### Add directories
To create new directories (or folders), the command is `mkdir`, which stands for *make directory*:
```sh
mkdir folderA
mkdir .hidden_folder
mkdir folderA/folder_inside_folderA
```

### Add files
To create brand new empty files, we can use the `touch` command and the name of the file or its path
```sh
touch file.txt
touch folderA/file_inside_forlderA.md
```

## Copy and Move
To copy files or folders, the command is `cp`, which stands for *copy*. The arguments it recieves are the source entry and the destination entry. When copying a folder we must use the `-r` flag, that stands for *recursive mode*. This flag tells the command to copy all the contents of the directory:
```sh
cp file.txt file_copy.txt
cp file.txt folderA/file.txt
cp -r folderA folderA_copy
```

To move files or folders, the command is `mv`, which stands for *move*. The arguments it recieves are the source entry and the destination entry. When moving a folder and its contents we must use the `-r` flag, same as with `cp`.

The `mv` command is also used to *rename* entries, as seen in the following example:

```sh
mv file.txt renamed_file.txt
mv file.txt folderA/moved_file.txt

mv folderA renamed_folder
mv -r folderA 

```

## Removing entries
To remove entries, the command is `rm`, which stands for *remove*. The arguments it recieves are the source entries, separated by spaces. When removing a folder and its contents we must use the `-r` flag, same as with `cp` or `mv`.

```sh
rm file.txt
rm folderA/file.txt
rm -r folderA
```

Sometimes, files and directories are protected agains accidental (user-)deletions, so `rm` may ask manual confirmation for each protected entry. To bypass the confirmation we can add the `-f` flag, which stands for *force*.:

```sh
rm -f protected_file.txt
rm -rf protected_folder
```