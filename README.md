# prev-day
Get the previous occurance of a day of the week, eg: last Thursday


[![Build Status](https://travis-ci.org/cedmax/prev-day.svg?branch=master)](https://travis-ci.org/cedmax/prev-day)
[![npm version](https://badge.fury.io/js/prev-day.svg)](https://badge.fury.io/js/prev-day)
[![Dependency status](https://david-dm.org/cedmax/prev-day.svg)](https://david-dm.org)
[![codecov](https://codecov.io/gh/cedmax/prev-day/branch/master/graph/badge.svg)](https://codecov.io/gh/cedmax/prev-day)


## Installation

```bash
npm install --save prev-day
```

## Usage

```javascript
var prevDay = require('prev-day');
// get previous Monday
prevDay(new Date(), 1); // returns { date: [Date] , daySince: 4 }
                                            ^ date object    ^ day passed since prev Monday

// or equivalent to
prevDay(new Date(), prevDay.Monday);
```