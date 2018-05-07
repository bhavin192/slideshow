# Slideshow (beta development phase, testing on Fedora 27 (tm) && Windows 7 (tm)).
Slideshow and individual image viewer, with sortable and zoom facility.

## Intro

As simple as paste images into a directory, start node script, open index.html in browser, and drag sortable thumbnails are displayed. Click play for slideshow, pause to view image, zoom in or out and change delay time. Save settings for each folder.

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
Windows eg:
```sh
cd C:\Users\User 1\slideshow\
```
to install dependencies, run:
```sh
npm install
```
then:
```sh
node index.js
```
Then open URI of index.html in browser, Linux eg:

```sh
/home/user/slideshow/index.html
```
Windows eg:
```sh
C:\Users\User 1\slideshow\index.html
```
NB not URL http://...

To display your images, create new sub-directory and paste images and edit index.js, eg:
```js
var slidesDir = "slides2/";
```

To change global delay of slides edit:
```js
var defaultDelay = 3; //sec
```

Individual slide delays can be set by clicking images and making adjustments in menu.



## HowTo

Socket.io automatically reads directory and displays thumbnails of type: png, jpeg, jpg, gif, bmp and svg.

Drag sortable thumbnails to organize sequence of slideshow.

Click play icon.

To view indvidual images, click on thumb or on image while playing or pause icon.

Click play icon to resume.

Click stop icon to return to sortable thumbs.

To save or open saved delay and sequence settings, click settings icon on far left.

