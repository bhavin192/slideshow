# Slideshow (alpha development phase, testing on Fedora 27 (tm) ).
Slideshow and individual image viewer, with sortable and zoom facility.

## Config

To run example:

git clone https://github.com/pixelsplurge/slideshow.git

or download and unzip:

https://github.com/pixelsplurge/slideshow/archive/master.zip

navagate to location of app directory eg:

cd /home/user/slideshow/

run:

npm install

to install dependencies, then run:

node index.js

Then open URI of index.html in browser, eg:

file:///home/user/slideshow/index.html

NB not URL http://...

To display your images, edit index.js:

var slidesDir = "/home/user/slideshow/slides/";

To the directory of your images, or simply add/replace images in the slides/ sub-directory.

## HowTo

Drag sortable thumbnails to organize sequence of slideshow.

Click play icon.

To view indvidual images, click on thumb or on image while playing or pause icon.

Click play icon to resume.

Click stop icon to return to sortable thumbs.
		

