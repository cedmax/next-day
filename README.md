# prev-day
[![Build Status](https://travis-ci.org/cedmax/prev-day.svg?branch=master)](https://travis-ci.org/cedmax/prev-day)
<!--[![npm version](https://badge.fury.io/js/prev-day.svg)](https://badge.fury.io/js/prev-day)
[![Dependency status](https://david-dm.org/tanhauhau/prev-day.svg)](https://david-dm.org)
[![Downloads](https://img.shields.io/npm/dt/prev-day.svg)](https://www.npmjs.com/package/prev-day)
[![Donate](https://img.shields.io/gratipay/user/tanhauhau.svg)](https://gratipay.com/~tanhauhau/)
[![codecov](https://codecov.io/gh/tanhauhau/prev-day/branch/master/graph/badge.svg)](https://codecov.io/gh/tanhauhau/prev-day)-->


> Get the previous day of the week, eg: previous Thursday

## Installation

```bash
npm install --save prev-day
```

## Usage

```javascript
var prevDay = require('prev-day');
// get prev Monday
prevDay(new Date(), 1); // returns { date: [Date] , daySince: 4 }
                                            ^ date object    ^ day since prev Monday

// or equivalent to
prevDay(new Date(), prevDay.Monday);
```


The MIT License (MIT)

Copyright (c) 2016 Tan Li Hau

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
