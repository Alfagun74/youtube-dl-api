# youtube-dl-api
Express Youtube-DL REST API Server with Docker Support
### Prerequisities
In order to run this container you'll need docker installed.
* [Windows](https://docs.docker.com/windows/started)
* [OS X](https://docs.docker.com/mac/started/)
* [Linux](https://docs.docker.com/linux/started/)
### Usage
#### Container Parameters
```shell
docker run alfagun74/youtube-dl-api:latest
```
#### Environment Variables
* `TZ` - The Timezone to use for the container. Default is Europe/Berlin.
* `SERVER_PORT` - The port to use for the server. Default is 80.  
* `YOUTUBE_DL_DOWNLOAD_HOST` - Path to download the Youtube-DL Binary from. Default is ``https://yt-dl.org/downloads/latest/youtube-dl``  
#### API Methods
**GET** ``api/v1/info?url={VIDEO_URL}``  
Returns all information youtube-dl can find about this video as JSON. Also works with non youtube sources. (See [here](https://ytdl-org.github.io/youtube-dl/supportedsites.html)).
## Built With
* [Express](https://github.com/expressjs/express)
* [Youtube-DL](https://github.com/ytdl-org/youtube-dl)
* [node-youtube-dl](https://github.com/przemyslawpluta/node-youtube-dl)
## Find Me
* [GitHub](https://github.com/alfagun74/youtube-dl-api)
## Contributing
Please feel free to issue tickets or pull-requests.
## Versioning
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the 
[tags on this repository](https://github.com/your/repository/tags). 
## Authors
* **Alfagun74** - *Maintainer* - [Steam](https://steamcommunity.com/id/Alfagun74/)  
See also the list of contributors who participated in this project.
## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
