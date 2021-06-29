# The Web Developer Bootcamp 2021
*by Colt Steele*

This course has a [changelog](https://www.notion.so/Web-Developer-Bootcamp-ChangeLog-45e3eab6be724c5f9a4b83c01044e126])

The code of this course is in every lecture (and will be saved in this folder) and resources may appear if needed in every lesson

The tools needed for this course are:
- Chrome (or every othe web browser)
- VS Code (or some other text/code editing software)


Some useful resources:
- [Mozilla Developer Network](https://developer.mozilla.org/en-US/)
- Chome Inspector


## Lesson 1: Basic Concepts
### The Internet and the Web
The internet is a **global** network of networks. It is the infrastructure that allows services such as e-mails
The World Wide eb is the system that allows sharing information over the internet. The current protocol for sharing is *Hyper Text Transfer Protocol* (HTTP) and it works with *Requests* and *Responses*. In every information exchange, we have two agents:
1. The servers are machines (computers) and also softwares that can satisfy requests on the web.
2. The client is a computer that accesses a server, i.e, the one who makes a request to ta server.

At a human level, a web browser is necessary to process the information that servers respond to our request. This processing is mostly rendering a visual representation of the information, using the instructions that the server delivers within every response.

Nowadays, the servers mostly respond with instructions that use three main technologies: HTML, JavaScript and CSS.

### Front-end and Back-eand
One suitable analogy to understand the relationshio between the front and the back ends is the kitchen and the tables in a restaurant:
1. At the table, the front-end, the waiters take your order (request)
2. Then, the kitchen, the back-end, prepares your meals (processes your request) and then delivers them with the waiters (response)

In the web development, one can separate this two ends in terms of what technologies are used to implement them: the fron-end develompent focuses on the dynamic trio HTML, JS and CSS, however the back-end may be built upon many languages: Python, C, Ruby, JS (also), Databases languages, etc.

In this course we start by understanding the front-end and then we move into the server-side :)

### Front-end: The Purple Dino Danced
The front-end technologies have unique roles as follows:

- HTML: *What*, the contents of the page (the structure)
- CSS: *How it should look*, the content display style
- JS: *Actions*, how do the page behaves and interacts