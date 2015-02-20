'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

function onAlarm(alarm) {
  updateIcon();
}

if (chrome.runtime && chrome.runtime.onStartup) {
  updateIcon();
  chrome.alarms.create('refresh', {periodInMinutes: 1});
  chrome.alarms.onAlarm.addListener(onAlarm);
}
