
Simple WhatsApp Bot

```bash
> pkg update && pkg upgrade
> pkg install git -y
> pkg install nodejs -y
> pkg install ffmpeg -y
> pkg install imagemagick -y
> git clone https://github.com/maicosilver/botmod8
> cd wabot-aq
> npm install
```

---------


```bash
> git clone https://github.com/maicosilver/botmod8
> cd wabot-aq
> npm install
```

---------

## Run

```bash
> node . [<session name>] (session name is optional)
```

---------

## Arguments `node . [--options] [<session name>]`

### `--self`

Activate self mode (Ignores other)

### `--prefix <prefixes>`

* `prefixes` are seperated by each character
Set prefix

### `--server`

Used for [heroku](https://heroku.com/) or scan through website

### `--big-qr`

If small qr unicode doesn't support

### `--restrict`

Enables restricted plugins (which can lead your number to be **banned** if used too often)

* Group Administration `add, kick`

### `--img`

Enable image inspector through terminal

### `--nyimak`

No bot, just print received messages and add users to database

### `--test`

**Development** Testing Mode

### `--trace`

```js
conn.logger.level = 'trace'
```

### `--debug`

```js
conn.logger.level = 'debug'
```

---------

#### Powered By : [`XTEAM`](https://api.xteam.xyz)

#### Author / Creator : [`Nurutomo`](https://GitHub.com/Nurutomo)
