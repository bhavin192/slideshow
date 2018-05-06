# Slideshow (alpha development phase, testing on Fedora 27 (tm) ).
Slideshow and individual image viewer, with sortable and zoom facility.

## Config

To run example:
```sh
git clone https://github.com/pixelsplurge/slideshow.git
```
or download and unzip:
```sh
https://github.com/pixelsplurge/slideshow/archive/master.zip
```
navagate to location of app directory eg:
```sh
cd /home/user/slideshow/
```
run:
```sh
npm install
```
to install dependencies, then run:
```sh
node index.js
```
Then open URI of index.html in browser, eg:

```sh
file:///home/user/slideshow/index.html
```
NB not URL http://...

To display your images, edit index.js:
```js
var slidesDir = "/home/user/slideshow/slides/";
```
To the directory of your images, or simply add/replace images in the slides/ sub-directory.

## HowTo

Drag sortable thumbnails to organize sequence of slideshow.

Click play icon.

To view indvidual images, click on thumb or on image while playing or pause icon.

Click play icon to resume.

Click stop icon to return to sortable thumbs.
		

