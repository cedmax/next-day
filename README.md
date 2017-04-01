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