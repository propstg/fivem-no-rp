# fivem-no-rp
Adds a marker/circle on the map to show where "admin/support call" is going on and indicates that no RP should take place. Created for https://forum.fivem.net/t/request-admin-area/118624.

## Commands:

* **/norp** - Sets the area of no RP to either the caller's coordinates or the caller's waypoint marker, if set.
* **/clearnorp** - Clears the area of no RP.

## Config options
* **Locale** - What language file to use in locales/ (currently only has english)
* **NoRpRadius** - Controls the size of the circle
* **XBlipScale** - Controls the size of the (X) blip in the middle of the circle

## Permissions:

Uses ACE permissions, for `command.norp`. Example of command I used for testing, in `server.cfg`:
```
add_ace group.admin command.norp allow
```

## Download & Installation

### Using Git
```
cd resources
git clone https://github.com/propstg/fivem-no-rp.git
```

### Manually
- Download https://github.com/propstg/fivem-no-rp/archive/master.zip
- Put it in the `resources` directory

## Installation
- Add this to your `server.cfg`:

```
start fivem-no-rp
```

# Legal
### License
The MIT License (MIT)

Copyright (c) 2018 Gregory Propst

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.