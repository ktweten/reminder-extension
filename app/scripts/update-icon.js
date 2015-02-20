/**
 * Created by Kelly on 2/16/2015.
 */

function loadNotes() {
  var stored = localStorage.getItem('reminders'),
    notes = [];

  if (stored) {
    notes = JSON.parse(stored);
  }
  return notes;
}

function countDueToday(notes) {
  var tomorrow,
    due = 0,
    noteDate,
    i;

  tomorrow = Date.now() + 86400000;

  for (i = 0; i < notes.length; i +=1) {
    if (notes[i].due) {
      noteDate = new Date(notes[i].due);

      if (noteDate < tomorrow){
        due += 1;
      }
    }
  }
  return due;
}

function updateIcon() {
  var notes = loadNotes(),
    dueToday = countDueToday(notes);

  chrome.browserAction.setBadgeBackgroundColor({color:[208, 0, 24, 255]});
  chrome.browserAction.setBadgeText({
    text: dueToday > 0 ? dueToday.toString() : ""
  });
}