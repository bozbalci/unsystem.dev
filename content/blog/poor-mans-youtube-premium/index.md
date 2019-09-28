---
title: Poor Man's YouTube Premium
date: "2019-09-29"
description: Premium experience without the cost.
---

# The problem

YouTube Premium enables the following features for 17₺/month:

- ad-free viewing
- background play
- Picture-in-Picture (PiP) on the iPad
- save videos for offline viewing

I want to get them for free.

# The solution

I maintain a high-bandwidth remote server with a sizeable storage space. I hacked together a very
simple Flask app that runs [`youtube-dl`][youtube-dl] when requested, and moves the downloaded
videos to a [Plex][plex] library location.

## The service

I simply host the following Flask app over nginx + uWSGI:

```python
import subprocess

from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/youtube-dl')
def echo():
    return 'youtube-dl service is running'


@app.route('/youtube-dl/<video_id>', methods=['GET'])
def youtube_dl(video_id):
    if request.headers.get('X-Too-Cool-For') == 'Basic-Auth':  # keep outsiders away
        subprocess.Popen(["youtube-dl",
                          "-f", "best[filesize<=250M]",
                          "-o", "~/plex/youtube-dls/%(title)s.%(id)s.%(ext)s",
                          "--", video_id])
        return render_template('youtube_dl.html', succeeded=True, video_id=video_id)

    return render_template('youtube_dl.html', succeeded=False)


if __name__ == '__main__':
    app.run()
```

This script is unashamedly [secure through obscurity][security], but that's not a problem because
this is only a proof of concept.

Once the app is configured properly, we can send requests to download videos to Plex:

    $ curl --header "X-Too-Cool-For: Basic-Auth" http://example.com:8080/youtube-dl/dQw4w9WgXcQ
    ... some html ...
    Downloading dQw4w9WgXcQ
    ... some html ...

## The shortcut

The following iOS 13 shortcut can be used from the Share Sheet in any YouTube video link opened
in Safari:

![iOS shortcut, transcript:
Get Query from Shortcut Input,
Get Value for v in Component of URL,
URL: censored, "youtube-dl/YouTube Video ID"
Get contents of URL.](./tublex_shortcut.jpg)

In just two clicks, you can download any YouTube video into your Plex server.

## The end

I am using the [VLC for Mobile][vlc] iOS app to connect to my Plex server. Along with all of the
features above, I also get all the cool benefits of the VLC app. Nice.

**N.B.** This is probably not the best way to do it for everyone, but so far I'm enjoying this
setup. Also, I am aware that the implementation is not very nice. That's alright. :p

[plex]: https://www.plex.tv/
[youtube-dl]: https://ytdl-org.github.io/youtube-dl/index.html
[security]: https://en.wikipedia.org/wiki/Security_through_obscurity
[vlc]: https://apps.apple.com/us/app/vlc-for-mobile/id650377962
