(function WF2GCal_2_3(isHF) {
  function msToGCal(ms) {
    const gString = new Date(ms).toISOString();
    return gString.replace(/\W/g, '').match(/.{13}/)[0] + '00Z';
  }
  function nextXminutes(m) {
    const now = new Date(new Date().setSeconds(0, 0));
    return now.setMinutes(Math.ceil(now.getMinutes() / m) * m);
  }
  const duration = 30;
  const start = nextXminutes(30);
  const end = start + (duration * 60 * 1000);
  const addEvent = 'https://calendar.google.com/calendar/r/eventedit?text=';
  const name = isHF ? WF.currentItem().getNameInPlainText() : document.title.replace(/ - WorkFlowy$/, '');
  const url = isHF ? `https://workflowy.com${WF.currentItem().getUrl()}` : location.href;
  const details = `&details=${encodeURIComponent(url)}`;
  const dates = `&dates=${msToGCal(start)}/${msToGCal(end)}`;
  window.open(addEvent + encodeURIComponent(name) + details + dates);
})(false);